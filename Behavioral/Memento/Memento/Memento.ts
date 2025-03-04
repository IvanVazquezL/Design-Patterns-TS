class GameMemento {
    constructor(
        private level: number,
        private health: number,
        private position: string
    ) {}

    getLevel(): number {
        return this.level;
    }

    getHealth(): number {
        return this.health;
    }

    getPosition(): string {
        return this.position;
    }
}

class Game {
    constructor(
        private level: number = 1,
        private health: number = 100,
        private position: string = 'Start'
    ) {
        this.printInfo();
    }

    save(): GameMemento {
        return new GameMemento(
            this.level,
            this.health,
            this.position
        );
    }

    play(level: number, health: number, position: string) {
        this.level = level;
        this.health = health;
        this.position = position;

        this.printInfo();
    }

    restore(memento: GameMemento): void {
        this.level = memento.getLevel();
        this.health = memento.getHealth();
        this.position = memento.getPosition();

        this.printInfo();
    }

    printInfo(): void {
        console.log(`
            Level: ${this.level}
            Health: ${this.health}
            Position: ${this.position}`
        );
    }
}

class GameHistory {
    constructor(
        private mementos: GameMemento[] = []
    ) {}

    push(memento: GameMemento) {
        this.mementos.push(memento);
    }

    pop(): GameMemento | undefined {
        return this.mementos.pop();
    }
}

function main() {
    const game = new Game();
    const history = new GameHistory();

    history.push(game.save());

    game.play(2, 90, 'Forest');
    history.push(game.save());

    game.play(3, 70, 'Cave');
    history.push(game.save());

    game.play(3, 70, 'Dragon Lair');

    game.restore(history.pop());
}

main();