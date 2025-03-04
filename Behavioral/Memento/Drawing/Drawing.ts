namespace Drawings {
    class DrawingMemento {
        private shapes: string[];

        constructor(shapes: string[]) {
            this.shapes = [...shapes];
        }

        getShapes(): string[] {
            return [...this.shapes];
        }
    }

    class DrawingBoard {
        private shapes: string[] = [];

        addShape(shape: string): void {
            this.shapes.push(shape);
            console.log(`Figura agregada: ${shape}`);
        }

        showBoard(): void {
            console.log('Pizarra actual:', this.shapes.join(', ') || 'Vacía');
        }

        save(): DrawingMemento {
            return new DrawingMemento(this.shapes);
        }

        restore(memento: DrawingMemento): void {
            this.shapes = memento.getShapes();
            console.log('%c\nEstado de la pizarra restaurado.');
        }
    }

    class History {
        private mementos: DrawingMemento[] = [];

        push(memento: DrawingMemento): void {
            this.mementos.push(memento);
        }

        pop(): DrawingMemento | undefined {
            return this.mementos.pop();
        }
    }


    function main(): void {
        const drawingBoard = new DrawingBoard();
        const history = new History();

        // El usuario agrega figuras y guarda el estado en cada paso
        drawingBoard.addShape('Círculo');
        history.push(drawingBoard.save());

        drawingBoard.addShape('Cuadrado');
        history.push(drawingBoard.save());

        drawingBoard.addShape('Triángulo');
        drawingBoard.showBoard(); // Mostrar estado actual de la pizarra

        // Deshacer el último cambio
        drawingBoard.restore(history.pop()!);
        drawingBoard.showBoard(); // Mostrar estado después de deshacer

        // Deshacer otro cambio
        drawingBoard.restore(history.pop()!);
        drawingBoard.showBoard(); // Mostrar estado después de deshacer nuevamente
    }

    main();
}