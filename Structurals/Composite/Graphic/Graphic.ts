namespace Graphic {
    interface Graphic {
        move(x: number, y: number): void;
        draw(): void;
    }
    
    class Dot implements Graphic {
        constructor(private x: number, private y: number) {}
    
        move(x: number, y: number): void {
            this.x += x;
            this.y += y;
        }
    
        draw(): void {
            console.log('Drawing Dot');
        } 
    }
    
    class CompoundGraphic implements Graphic {
        children: Graphic[];
    
        add(child: Graphic): void {
            this.children.push(child);
        }
    
        remove(childToRemove: Graphic): void {
            this.children = this.children.filter(
                child => child !== childToRemove
            );
        }
    
        move(x: number, y: number): void {
            for (const child of this.children) {
                child.move(x, y);
            }
        }
    
        draw(): void {
            for (const child of this.children) {
                child.draw();
            }
        }
    }
    
    class Circle extends Dot {
        private radius: number;

        constructor(x: number, y: number, radius: number) {
            super(x,y);
            this.radius = radius;
        }

        draw(): void {
            console.log('Drawing circle');
        }
    }
}
