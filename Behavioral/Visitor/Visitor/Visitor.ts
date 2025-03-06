namespace Visitors {
    interface Visitor {
        visitRollerCoaster(rollerCoaster: RollerCoaster): void;
        visitHauntedHouse(hauntedHouse: HauntedHouse): void;
        visitFerrisWheel(ferrisWheel: FerrisWheel): void;
    }

    interface Attraction {
        accept(visitor: Visitor): void;
    }

    class RollerCoaster implements Attraction {
        private price: number = 50;

        getPrice(): number {
            return this.price;
        }

        accept(visitor: Visitor): void {
            visitor.visitRollerCoaster(this);
        }
    }

    class HauntedHouse implements Attraction {
        private price: number = 40;

        getPrice(): number {
            return this.price;
        }

        accept(visitor: Visitor): void {
            visitor.visitHauntedHouse(this);
        }
    }

    class FerrisWheel implements Attraction {
        private price: number = 30;

        getPrice(): number {
            return this.price;
        }

        accept(visitor: Visitor): void {
            visitor.visitFerrisWheel(this);
        }
    }

    class ChildVisitor implements Visitor {
        visitRollerCoaster(rollerCoaster: RollerCoaster): void {
            console.log(`${rollerCoaster.getPrice() * 0.50}`);
        }

        visitHauntedHouse(hauntedHouse: HauntedHouse): void {
            console.log(`${hauntedHouse.getPrice() * 0.70}`);
        }

        visitFerrisWheel(ferrisWheel: FerrisWheel): void {
            console.log(`${ferrisWheel.getPrice() * 0.60}`);
        }
    }

    class AdultVisitor implements Visitor {
        visitRollerCoaster(rollerCoaster: RollerCoaster): void {
            console.log(`${rollerCoaster.getPrice()}`);
        }

        visitHauntedHouse(hauntedHouse: HauntedHouse): void {
            console.log(`${hauntedHouse.getPrice()}`);
        }

        visitFerrisWheel(ferrisWheel: FerrisWheel): void {
            console.log(`${ferrisWheel.getPrice()}`);
        }
    }

    class SeniorVisitor implements Visitor {
        visitRollerCoaster(rollerCoaster: RollerCoaster): void {
            console.log(`${rollerCoaster.getPrice() * 0.80}`);
        }

        visitHauntedHouse(hauntedHouse: HauntedHouse): void {
            console.log(`${hauntedHouse.getPrice() * 0.90}`);
        }

        visitFerrisWheel(ferrisWheel: FerrisWheel): void {
            console.log(`${ferrisWheel.getPrice() * 0.90}`);
        }
    }

    function main() {
        const attractions: Attraction[] = [
            new RollerCoaster(),
            new FerrisWheel(),
            new HauntedHouse()
        ];

        const childVisitor = new ChildVisitor();
        for (const attraction of attractions) {
            attraction.accept(childVisitor);
        }
    }

    main();
}
