interface Burger {
    prepare(): void;
}

interface Drink {
    pour(): void;
}

class ChickenBurger implements Burger {
    prepare(): void {
        console.log("Preparing chicken burger");
    }
}

class BeefBurger implements Burger {
    prepare(): void {
        console.log("Preparing beef burger");
    }
}

class Water implements Drink {
    pour(): void {
        console.log('Pouring water');
    }
}

class Beer implements Drink {
    pour(): void {
        console.log('Pouring beer');
    }
}

interface RestaurantFactory {
    createBurger(): Burger;
    createDrink(): Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory {
    createBurger(): Burger {
        return new BeefBurger();
    }

    createDrink(): Drink {
        return new Beer();
    }
}

class VeganRestaurantFactory implements RestaurantFactory {
    createBurger(): Burger {
        return new ChickenBurger();
    }
    createDrink(): Drink {
        return new Water();
    }
    
}

function main(factory: RestaurantFactory) {
    const burger = factory.createBurger();
    const drink = factory.createDrink();

    burger.prepare();
    drink.pour();
}

main(new VeganRestaurantFactory());