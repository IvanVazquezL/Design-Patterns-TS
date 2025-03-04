namespace Weather {
    interface Observer {
        update(weatherData: string): void;
    }

    class WeatherStation {
        private observers: Observer[] = [];
        private weatherData: string = '';

        constructor() { }

        subscribe(observer: Observer): void {
            this.observers.push(observer);
            console.log('Nueva aplicación suscrita al sistema meteorológico.');
        }

        unsubscribe(observer: Observer): void {
            this.observers = this.observers.filter(app => app !== observer);
            console.log(`Una aplicación se ha dado de baja`);
        }

        setWeather(weatherData: string): void {
            console.log(`\nClima actualizado: ${weatherData}`);
            this.weatherData = weatherData;
            this.notifyObservers();
        }

        private notifyObservers(weatherData: string): void {
            for (const observer of this.observers) {
                observer.update(this.weatherData);
            }
        }
    }

    class WeatherApp implements Observer {
        private name: string;

        constructor(name: string) {
            this.name = name;
        }

        update(weatherData: string): void {
            console.log(`${this.name} ha recibido notificación del clima: %c${weatherData}`);
        }
    }

    // Código Cliente para Probar
    function main(): void {
        const weatherStation = new WeatherStation();

        // Crear aplicaciones
        const flutterWeatherApp = new WeatherApp('Flutter WeatherApp');
        const reactNativeWeatherApp = new WeatherApp('React Native WeatherApp');
        const weatherTrackerApp = new WeatherApp('Weather Tracker App');

        // Suscribir aplicaciones a la estación meteorológica
        weatherStation.subscribe(flutterWeatherApp);
        weatherStation.subscribe(reactNativeWeatherApp);

        // Actualizar el clima
        weatherStation.setWeather('Lluvioso');

        // Agregar una nueva aplicación
        weatherStation.subscribe(weatherTrackerApp);
        weatherStation.setWeather('Nublado');

        // Una aplicación se da de baja
        weatherStation.unsubscribe(reactNativeWeatherApp);
        weatherStation.setWeather('Tormenta eléctrica');
    }

    main();
}