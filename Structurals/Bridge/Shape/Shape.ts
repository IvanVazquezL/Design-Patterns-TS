namespace Shapes {
    interface Color {
        color(): string;
    }

    class Blue implements Color {
        color(): string {
            return 'Blue';
        }
    } 

    class Red implements Color {
        color(): string {
            return 'Red';
        }
    } 

    abstract class Shape {
        constructor(protected color: Color) {}

        setColor(color: Color) {
            this.color = color;
        }

        abstract displayInfo(): void;
    }

    class Circle extends Shape {
        displayInfo(): void {
            console.log(`${this.color.color()} Circle`);
        }
    }

    class Square extends Shape {
        displayInfo(): void {
            console.log(`${this.color.color()} Square`);
        }
    }

    function main() {
        const red = new Red();
        const blue = new Blue();

        const circle = new Circle(red); 
        circle.displayInfo();

        const square = new Square(blue);
        square.displayInfo();

    }
    main();
}