namespace PrototypeRegistry {
    interface Prototype {
        getColor(): string;
        clone(): Prototype;
    }

    class Button implements Prototype {
        x: number;
        y: number;
        color: string;

        constructor(x: number, y: number, color: string);
        constructor(prototype: Button);
    
        constructor(xOrPrototype: number | Button, y?: number, color?: string) {
            if (xOrPrototype instanceof Button) {
                // Copy constructor
                this.x = xOrPrototype.x;
                this.y = xOrPrototype.y;
                this.color = xOrPrototype.color;
            } else {
                // Regular constructor
                this.x = xOrPrototype;
                this.y = y!;
                this.color = color!;
            }
        }

        getColor(): string {
            return this.color;
        }

        clone(): Prototype {
            return new Button(this);
        }
    }

    class PrototypeRegistry {
        items: Prototype[] = [];
        map: Map<string, Prototype> = new Map<string, Prototype>();

        addItem(id: string, prototype: Prototype): void {
            this.map.set(id, prototype);
            this.items.push(prototype);
        }

        getById(id: string): Prototype {
            return this.map.get(id);
        }

        getByColor(color: string): Prototype {
            for (const item of this.items) {
                if (item.getColor() === color) {
                    return item.clone();
                }
            }
        }
    }

    function main() {
        const registry = new PrototypeRegistry();
        const button = new Button(10, 40, 'red');
        registry.addItem('LandingButton', button);

        const newButton = registry.getByColor('red');
        console.log(newButton.getColor());

        const newButton2 = registry.getById('LandingButton');
        console.log(newButton2.getColor());
    }

    main();
}