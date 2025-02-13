abstract class Shape {
    x: number;
    y: number;
    color: string;

    constructor();
    constructor(x: number, y: number, color: string);
    constructor(source: Shape);
    
    // Single constructor handling all cases
    constructor(xOrSource?: number | Shape, y?: number, color?: string) {
        if (xOrSource instanceof Shape) {
            // Copy constructor logic
            this.x = xOrSource.x;
            this.y = xOrSource.y;
            this.color = xOrSource.color;
        } else {
            // Regular constructor logic
            this.x = xOrSource ?? 0;
            this.y = y ?? 0;
            this.color = color ?? 'white';
        }
    }

    abstract clone(): Shape;
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor();
    constructor(width: number, height: number);
    constructor(source: Rectangle);
    
    constructor(widthOrSource?: number | Rectangle, height?: number) {
        if (widthOrSource instanceof Rectangle) {
            // Copy constructor
            super(widthOrSource);
            this.width = widthOrSource.width;
            this.height = widthOrSource.height;
        } else {
            // Regular constructor with defaults
            super();
            this.width = widthOrSource ?? 0;
            this.height = height ?? 0;
        }
    }
    
    clone(): Shape {
        return new Rectangle(this);
    }
}

class Circle extends Shape {
    radius: number;

    constructor();
    constructor(radius: number);
    constructor(source: Circle);
    
    constructor(radiusOrSource?: number | Circle) {
        if (radiusOrSource instanceof Circle) {
            // Copy constructor
            super(radiusOrSource);
            this.radius = radiusOrSource.radius;
        } else {
            // Regular constructor with defaults
            super();
            this.radius = radiusOrSource ?? 0;
        }
    }

    clone(): Shape {
        return new Circle(this);
    }
}

function main() {
    const shapes: Shape[] = [];
    const circle = new Circle();
    circle.x = 10;
    circle.y = 10;
    circle.radius = 20;
    shapes.push(circle);

    const anotherCircle = circle.clone();
    shapes.push(anotherCircle);
    // The `anotherCircle` variable contains an exact copy
    // of the `circle` object.

    const rectangle = new Rectangle();
    rectangle.width = 10
    rectangle.height = 20
    shapes.push(rectangle);

    for (const shape of shapes) {
        console.log(shape.constructor.name);
    }
}

main();

