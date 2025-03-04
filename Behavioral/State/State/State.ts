namespace States {
    interface State {
        name: string;

        insertMoney(): void;
        selectProduct(): void;
        dispenseProduct(): void;
    }

    class VendingMachine {
        constructor(
            private state: State = new WaitingForMoney(this)
        ) {}

        insertMoney(): void {
            this.state.insertMoney();
        }

        selectProduct(): void {
            this.state.selectProduct();
        }

        dispenseProduct(): void {
            this.state.dispenseProduct();
        }

        setState(state: State): void {
            this.state = state;
            console.log(`State changed to: ${state.name}`);
        }

        getStateName(): string {
            return this.state.name;
        }
    }

    class WaitingForMoney implements State {
        name: string = 'Waiting for Money';

        constructor(
            private vendingMachine: VendingMachine
        ) {}

        insertMoney(): void {
            console.log('Money inserted. Select Product');
            this.vendingMachine.setState(
                new SelectingProduct(this.vendingMachine)
            );
        }

        selectProduct(): void {
            console.log('Insert Money');
        }

        dispenseProduct(): void {
            console.log('Insert Money');
        }
    }

    class SelectingProduct implements State {
        name: string = 'Selecting Product';

        constructor(
            private vendingMachine: VendingMachine
        ) {}

        insertMoney(): void {
            console.log('Select a product');
        }

        selectProduct(): void {
            this.vendingMachine.setState(
                new DispensingProduct(this.vendingMachine)
            );
        }

        dispenseProduct(): void {
            console.log('Select a product');
        }
    }

    class DispensingProduct implements State {
        name: string = 'Dispensing Product';

        constructor(
            private vendingMachine: VendingMachine
        ) {}

        insertMoney(): void {
            console.log('Wait for product');
        }

        selectProduct(): void {
            console.log('Wait for product');
        }

        dispenseProduct(): void {
            this.vendingMachine.setState(
                new WaitingForMoney(this.vendingMachine)
            );
        }
    }

    function main() {
        const vendingMachine = new VendingMachine();

        vendingMachine.insertMoney();
        vendingMachine.selectProduct();
        vendingMachine.dispenseProduct();
    }

    main();
}