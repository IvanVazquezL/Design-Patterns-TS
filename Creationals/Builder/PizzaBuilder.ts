const PizzaSizes = {
    Small: { name: "Small", cost: 8 },
    Medium: { name: "Medium", cost: 12 },
    Large: { name: "Large", cost: 15 }
};

const PizzaCrusts = {
    Normal: { name: "Normal", cost: 0 },
    Stuffed: { name: "Stuffed", cost: 12 },
};

const PizzaToppings = {
    Pepperoni: { name: "Pepperoni", cost: 5 },
    Olives: { name: "Olives", cost: 4 },
};

class Pizza {
    public size: string = "Unknown";
    public crust: string = "Normal";
    public toppings: string[] = [];
    public total: number = 0;

    public displayPizzaInfo(): string {
        return `Size: ${this.size}, Crust: ${this.crust}, Toppings: ${this.toppings.join(', ')}, Total: $${this.total}`;
    }
}

class PizzaBuilder {
    private pizza: Pizza;

    constructor() {
        this.pizza = new Pizza();
    }

    public setSize(size: { name: string; cost: number }): PizzaBuilder {
        this.pizza.size = size.name;
        this.pizza.total += size.cost;
        return this;
    }

    public setCrust(crust: { name: string; cost: number }): PizzaBuilder {
        this.pizza.crust = crust.name;
        this.pizza.total += crust.cost;
        return this;
    }

    public addTopping(topping: { name: string; cost: number }): PizzaBuilder {
        this.pizza.toppings.push(topping.name);
        this.pizza.total += topping.cost;
        return this;
    }

    public build(): Pizza {
        return this.pizza;
    }
}

function main() {
    const pizza = new PizzaBuilder()
        .setSize(PizzaSizes.Large)
        .setCrust(PizzaCrusts.Stuffed)
        .addTopping(PizzaToppings.Pepperoni)
        .addTopping(PizzaToppings.Olives)
        .build();

    console.log(pizza.displayPizzaInfo());
}

main();
