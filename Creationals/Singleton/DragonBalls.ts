class DragonBalls {
    private static instance: DragonBalls;
    private ballsCollected: number;

    private constructor() {
        this.ballsCollected = 0;
    }

    public static getInstance(): DragonBalls {
        if (!DragonBalls.instance) {
            DragonBalls.instance = new DragonBalls();
            console.log('Instance created');
        }

        return DragonBalls.instance;
    }

    collectBall(): void {
        if (this.ballsCollected < 7) {
            this.ballsCollected++;
            console.log(`Ball collected. You have ${this.ballsCollected} balls`);
            return;
        }

        console.log('You have collected all the balls');
    }

    summonShenLong(): void {
        if (this.ballsCollected === 7) {
            this.ballsCollected = 0;
            console.log('ShenLong has been summoned. Make a wish!');
            return;
        }

        console.log(`You still need ${7 - this.ballsCollected} balls`);
    }
}

function main() {
    const goku = DragonBalls.getInstance();
    goku.collectBall();
    goku.summonShenLong();

    const vegetta = DragonBalls.getInstance();
    vegetta.collectBall();
    
    goku.summonShenLong();
}

main();