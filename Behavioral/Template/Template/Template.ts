namespace Templates {
    abstract class HotBeverage {
        prepare(): void {
            this.boilWater();
            this.addMainIngredient();
            this.pourInCup();
            this.addCondiments();
        }

        private boilWater(): void {
            console.log('Boiling water');
        }

        private pourInCup(): void {
            console.log('Pouring in cup');
        }

        protected abstract addMainIngredient(): void;
        protected abstract addCondiments(): void;
    }

    class Tea extends HotBeverage {
        protected addMainIngredient(): void {
            console.log('Adding a tea bag');
        }

        protected addCondiments(): void {
            console.log('Adding honey and lemon');
        }
    }

    class Coffee extends HotBeverage {
        protected addMainIngredient(): void {
            console.log('Adding a coffee');
        }

        protected addCondiments(): void {
            console.log('Adding sugar and honey');
        }
    }

    function main() {
        const tea = new Tea();
        tea.prepare();

        const coffee = new Coffee();
        coffee.prepare();
    }

    main();
}