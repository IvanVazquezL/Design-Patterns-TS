namespace Ducks {
    interface MovementStrategy {
        move(): void;
    }

    class SwimFast implements MovementStrategy {
        move(): void {
            console.log("Swimming fast!");
        }
    }

    class FlyOverWater implements MovementStrategy {
        move(): void {
            console.log("Flies over water!");
        }
    }

    class WalkClumsily implements MovementStrategy {
        move(): void {
            console.log("Walks Clumsily");
        }
    }

    class Duck {
        constructor(
            private name: string,
            private movementStrategy: MovementStrategy
        ) {
            console.log(`${this.name} ready to run`);
        }

        performMovement(): void {
            console.log(`${this.name} prepares to move`);
            this.movementStrategy.move();
        }

        setMovementStrategy(strategy: MovementStrategy)  {
            this.movementStrategy = strategy;
            console.log(`${this.name} changed of strategy`);
        }
    }

    function main() {
        const duck1 = new Duck('ducki', new SwimFast());
        const duck2 = new Duck('duckle', new FlyOverWater());
        const duck3 = new Duck('puck', new WalkClumsily());

        duck1.performMovement();
        duck2.performMovement();
        duck3.performMovement();

        duck3.setMovementStrategy(new FlyOverWater());
        duck3.performMovement();
    }

    main();
}