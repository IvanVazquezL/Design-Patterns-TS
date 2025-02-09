import inquirer from 'inquirer';

abstract class OrderItem {
    constructor(public name: string, public cost: number) {}

    getCost(): number {
        return this.cost;
    }

    display(): string {
        return `${this.name}: $${this.cost}`;
    }
}

class Drink extends OrderItem {
    constructor(public size: string, name: string, cost: number) {
        super(name, cost);
    }
}

class Side extends OrderItem {
    constructor(public size: string, name: string, cost: number) {
        super(name, cost);
    }
}

class Dessert extends OrderItem {
    constructor(name: string, cost: number) {
        super(name, cost);
    }
}

class Toppings extends OrderItem {
    constructor(name: string, cost: number) {
        super(name, cost);
    }
}

class Burger extends OrderItem {
    public toppings: Toppings[] = [];

    constructor(name: string, cost: number) {
        super(name, cost);
    }

    addTopping(topping: Toppings): void {
        this.toppings.push(topping);
    }
}

class Order {
    public items: OrderItem[];
    public total: number = 0;

    public getTotal(): number {
        for (const item of this.items) {
            this.total += item.getCost();
        }

        return this.total;
    }

    public printOrder() {
        for (const item of this.items) {
            console.log(`${item.name} $${item.getCost()}`);
        }

        console.log(`Total: ${this.getTotal()}`);
    }
}

class OrderBuilder {
    public order: Order;

    constructor() {
        this.order = new Order();
    }

    public addItem(item: OrderItem): OrderBuilder {
        this.order.items.push(item);
        return this;
    }

    public execute(): Order {
        return this.order;
    }
}

const Burgers = {
    cheeseBurger: { name: "Small", cost: 8 },
    baconBurger: { name: "Medium", cost: 12 },
    chickenBurger: { name: "Large", cost: 15 }
};


async function main() {
    const order = new OrderBuilder();

    const BurgerOptions = [
        { name: "Cheese Burger", value: "cheeseBurger" },
        { name: "Bacon Burger", value: "baconBurger" },
        { name: "Chicken Burger", value: "chickenBurger" },
        { name: "None", value: "none" },
    ];

    const ToppingOptions = [
        { name: "Pickles", value: "pickles" },
        { name: "Cheese", value: "cheese" },
        { name: "Bacon", value: "bacon" },
        { name: "None", value: "none" },
    ];

    const DrinkOptions = [
        { name: "Coke", value: "coke" },
        { name: "Fanta", value: "fanta" },
        { name: "Sprite", value: "sprite" },
        { name: "None", value: "none" },
    ];

    const SideOptions = [
        { name: "Fries", value: "fries" },
        { name: "None", value: "none" },
    ];

    const DessertOptions = [
        { name: "Ice Cream", value: "icecream" },
        { name: "Pie", value: "pie" },
        { name: "None", value: "none" },
    ];

    const burger = await inquirer.prompt([
        {
            type: "list",
            name: "burger",
            message: "Select your burger:",
            choices: BurgerOptions
        }
    ]);

    const toppings = await inquirer.prompt([
        {
            type: "list",
            name: "toppings",
            message: "Select your topping:",
            choices: ToppingOptions
        }
    ]);

    const Side = await inquirer.prompt([
        {
            type: "list",
            name: "side",
            message: "Select your side:",
            choices: SideOptions
        }
    ]);

    const dessert = await inquirer.prompt([
        {
            type: "list",
            name: "dessert",
            message: "Select your Dessert:",
            choices: DessertOptions
        }
    ]);
}

main();
