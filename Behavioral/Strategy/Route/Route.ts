namespace Routes {
    interface RouteStrategy {
        buildRoad(): void;
    }

    class RoadStrategy implements RouteStrategy {
        buildRoad(): void {
            console.log('road route');
        }
    }

    class PublicTransportStrategy implements RouteStrategy {
        buildRoad(): void {
            console.log('public transport route');
        }
    }

    class WalkingStrategy implements RouteStrategy {
        buildRoad(): void {
            console.log('walking route');
        }
    }

    class Navigator {
        constructor(
            private routeStrategy: RouteStrategy
        ) {}

        buildRoute(): void {
            this.routeStrategy.buildRoad();
        }

        setStrategy(strategy: RouteStrategy): void {
            this.routeStrategy = strategy;
        }
    }

    function main() {
        const navigator = new Navigator(
            new WalkingStrategy()
        );
        navigator.buildRoute();
        navigator.setStrategy(new PublicTransportStrategy());
        navigator.buildRoute();
        navigator.setStrategy(new RoadStrategy());
        navigator.buildRoute();

    }

    main();
}