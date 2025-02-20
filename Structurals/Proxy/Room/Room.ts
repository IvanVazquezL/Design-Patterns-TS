namespace Rooms {
    class Player {
        constructor(
            public name: string,
            public level: number
        ) {}
    }

    interface Room {
        enter(player: Player): void;
    }

    class SecretRoom implements Room {
        enter(player: Player): void {
            console.log(`Welcome to the secret room player ${player.name}`);
            console.log('A big enemy awaits you');
        }
    }

    class MagicPortal implements Room {
        constructor(private secretRoom: Room) {}

        enter(player: Player): void {
            if (player.level >= 10) {
                this.secretRoom.enter(player);
                return;
            }

            console.log('Sorry you cant enter');
        }
        
    }

    function main() {
        const portal = new MagicPortal(
            new SecretRoom()
        );

        const player1 = new Player('Adventure', 5);
        const player2 = new Player('Action', 15);

        portal.enter(player1);
        portal.enter(player2);

    }

    main();
}

