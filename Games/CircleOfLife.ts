import readline from "readline";

namespace CircleOfLife {
    class Prompt {
        private rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        ask(question: string): Promise<string> {
            return new Promise((resolve) => {
                this.rl.question(question, (answer) => {
                    resolve(answer);
                });
            });
        }

        close() {
            this.rl.close();
        }
    }

    class GameUtils {
        static rollDice(sides: number = 6): number {
            return Math.floor(Math.random() * sides) + 1;
        }
    
        static rollTwoDice(): number {
            return this.rollDice() + this.rollDice();
        }
    
        static getRandomNumber(min: number, max: number): number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        static sleep(ms: number): Promise<void> {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }

    class Tile {
        constructor(
            private type: string,
            private number: number
        ) {}
    }

    class Board {
        private tiles: Tile[] = [];
        private numberOfTiles: number = 50;

        constructor() {
            for (let tile = 1; tile < this.numberOfTiles; tile++) {
                this.tiles.push(
                    new Tile('mushroom', GameUtils.getRandomNumber(1,6))
                )
            }
        }

        getNewPosition(currentPosition: number): number {
            const diceRoll = GameUtils.rollDice();
            const newPosition = (currentPosition + diceRoll) % this.numberOfTiles;
            console.log(`Rolled: ${diceRoll}, New Position: ${newPosition + 1}`);
            return newPosition;
        }

        getTile(position: number): Tile {
            return this.tiles[position];
        }
    }

    class Player {
        private mushrooms: number = 0;
        private tileNumber: number = 0;

        constructor(
            private name: string
        ) {
            console.log(`${name}: Hello, my name is ${name}\n`);
        }

        getTileNumber(): number {
            return this.tileNumber;
        }

        rollDice(): number {

            return GameUtils.rollTwoDice();
        }

        isWinner(): boolean {
            return this.mushrooms >= 400;
        }

        displayPlayersStatus(): void {
            console.log(
                `${this.name} - Tile ${this.tileNumber + 1} - ${this.mushrooms} Mushrooms`
            );
        }
    }

    async function main() {
        const prompt = new Prompt();

        //const namePlayer1 = await prompt.ask("What's your name player 1? ");
        const namePlayer1 = 'ibs'
        await GameUtils.sleep(1000);
        const player1 = new Player(namePlayer1);
        
        //const namePlayer2 = await prompt.ask("What's your name player 2? ");
        const namePlayer2 = 'bis';
        const player2 = new Player(namePlayer2);

        const board = new Board();

        let currentPlayer = player1;

        while (!player1.isWinner() && !player2.isWinner()) {
            currentPlayer.displayPlayersStatus();
            const option = await prompt.ask(`
                1 - Roll dice
                2 - Harvest & Roll dice`);

            if (option === '2') {
                const harvest = await prompt.ask(`How much mushrooms to harvest?`);
                
            }


            const roll = GameUtils.rollTwoDice();
            const newPosition = board.getNewPosition(currentPlayer.getTileNumber());
            const currentTile = board.getTile(newPosition);

            currentPlayer = currentPlayer === player1 ? player2 : player1;
            break;
        }

        prompt.close();
    }

    main();
}