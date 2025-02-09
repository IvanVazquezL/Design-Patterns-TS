interface Burger {
    prepare(): void;
}

class ChickenBurger implements Burger {
    prepare(): void {
        console.log("Preparing Chicken Burger: Grilling chicken patty, adding lettuce, tomato, and sauce.");
    }
}

class BeefBurger implements Burger {
    prepare(): void {
        console.log("Preparing Beef Burger: Grilling beef patty, adding cheese, lettuce, tomato, and sauce.");
    }
}

abstract class Restaurant {
    abstract createBurger(): Burger;

    orderBurger(): void {
        const burger = this.createBurger();
        burger.prepare();
    }
}

class ChickenRestaurant extends Restaurant {
    override createBurger(): Burger {
        return new ChickenBurger();
    }
}

class BeefRestaurant extends Restaurant {
    override createBurger(): Burger {
        return new BeefBurger();
    }
}
