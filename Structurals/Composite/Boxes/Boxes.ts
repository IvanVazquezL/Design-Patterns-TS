interface Item {
    getCost(): number;
}
 
class Product implements Item{
    constructor(private cost: number) {}

    getCost(): number {
        return this.cost;
    }
}

class Box implements Item{
    private items: Item[] = [];

    addItem(item: Item): void {
        this.items.push(item);
    }

    getCost(): number {
        let cost = 0;

        for (const item of this.items) {
            cost += item.getCost();
        }

        return cost;
    }
}

function main() {
    const box1 = new Box();
    const gameBoy = new Product(100);
    const box2 = new Box(); 
    const headphones = new Product(90);
    const box3 = new Box();
    const phone = new Product(120);
    box3.addItem(phone);
    box2.addItem(headphones);
    box2.addItem(box3);
    box1.addItem(gameBoy);
    box1.addItem(box2);

    console.log(box1.getCost());

}

main();