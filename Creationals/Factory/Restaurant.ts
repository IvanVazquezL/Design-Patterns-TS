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

class BeanBurger implements Burger {
    prepare(): void {
        console.log("Preparing Bean Burger: Grilling bean patty, adding cheese, lettuce, tomato, and sauce.");
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

class BeanRestaurant extends Restaurant {
    override createBurger(): Burger {
        return new BeanBurger();
    }
}

import promptSync from "prompt-sync";

function main() {
    let restaurant: Restaurant;
    const prompt = promptSync();

    const burgerType = prompt('Select burger (beef/chicken/bean)');

    switch(burgerType) {
        case 'chicken':
            restaurant = new ChickenRestaurant();
            break;
        case 'beef':
            restaurant = new BeefRestaurant();
            break;
        case 'bean':
            restaurant = new BeefRestaurant();
            break;
        default:
            break;
    }

    restaurant.orderBurger();
}

main();
