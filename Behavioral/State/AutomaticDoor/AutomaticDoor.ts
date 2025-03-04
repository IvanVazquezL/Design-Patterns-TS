namespace AutomaticDoors {
/**
 * !Objetivo:
 * Implementar el patrón State para simular el funcionamiento de una puerta
 * automática.
 *
 * La puerta tiene diferentes estados:
 *  - Cerrada
 *  - Abriéndose
 *  - Abierta
 *  - Cerrándose
 * Su comportamiento varía dependiendo del estado actual.
 */

    function sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    interface State {
        name: string;

        open(): void;
        close(): void;
    }

    class AutomaticDoor {
        private state: State;

        constructor() {
            this.state = new Closed(this);
        }

        setState(state: State): void {
            this.state = state;
            console.log(`Estado cambiado a: ${state.name}`);
        }

        open(): void {
            this.state.open();
        }

        close(): void {
            this.state.close();
        }

        getStateName(): string {
            return this.state.name;
        }
    }

    class Closed implements State {
        public name: string = 'Closed';

        constructor(
            private door: AutomaticDoor
        ) {}

        open(): void {
            console.log('Abriendo la puerta...');
            this.door.setState(
                new Opening(this.door)
            );
        }

        close(): void {
            console.log('La puerta ya está cerrada.');
        }
    }

    class Opening implements State {
        public name: string = 'Opening';

        constructor(private door: AutomaticDoor) {
            this.afterOpen();
        }

        private async afterOpen() {
            await sleep(3000);

            console.log('La puerta se ha abierto.');
            this.door.setState(
                new Open(this.door)
            )
        }

        open(): void {
            console.log('La puerta ya se está abriendo.');
        }

        close(): void {
            console.log('La puerta no puede cerrarse mientras se abre.');
        }
    }

    class Open implements State {
        public name: string = 'Opened';

        constructor(
            private door: AutomaticDoor
        ) {}

        open(): void {
            console.log('La puerta ya está abierta.');
        }

        close(): void {
            console.log('Cerrando la puerta...');
            this.door.setState(
                new Closing(this.door)
            )
        }
    }

    class Closing implements State {
        public name: string = 'Closing';

        constructor(
            private door: AutomaticDoor
        ) {}

        open(): void {
            console.log('Detectando movimiento. Abriendo la puerta nuevamente...');
            this.door.setState(
                new Open(this.door)
            );
        }

        close(): void {
            console.log('La puerta se ha cerrado.');
            this.door.setState(
                new Closed(this.door)
            );
        }
    }

    async function main() {
        const door = new AutomaticDoor();

        let selectedOption: string | null = '3';

        do {
            console.clear();
            console.log(`Estado actual: ${door.getStateName()}`);
            selectedOption = prompt(`
            1. Abrir puerta
            2. Cerrar puerta
            3. Salir

            Selecciona una opción: 
            `);

            switch (selectedOption) {
            case '1':
                door.open();
                break;
            case '2':
                door.close();
                break;
            case '3':
                console.log('Saliendo del simulador...');
                break;
            default:
                console.log('Opción no válida.');
                break;
            }

            await sleep(2000);
        } while (selectedOption !== '3');
    }

    main();
}