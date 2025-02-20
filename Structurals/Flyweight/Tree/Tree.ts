class TreeType {
    constructor(
        private name: string,
        private color: string,
        private texture: string
    ) {}

    draw(canvas: any, x: number, y: number): void {
        console.log('Drawing tree');
    }
}

class TreeFactory {
    static treeTypes: Record<string, TreeType> = {};

    static getTreeType(name: string, color: string, texture: string) {
        const key = `${name}-${color}-${texture}`;

        if (!this.treeTypes[key]) {
            const treeType = new TreeType(name, color, texture);
            this.treeTypes[key] = treeType;
        }

        return this.treeTypes[key];
    }
}

class Tree {
    constructor(
        private x: number,
        private y: number,
        private type: TreeType
    ) {}

    draw(canvas: any): void {
        this.type.draw(canvas, this.x, this.y);
    }
}

class Forest {
    private trees: Tree[] = [];

    plantTree(x: number, y: number, name: string, color: string, texture: string): void {
        const type = TreeFactory.getTreeType(name, color, texture);
        const tree = new Tree(x, y, type);
        this.trees.push(tree);
    }

    draw(canvas: any): void {
        for (const tree of this.trees) {
            tree.draw(canvas);
        }
    }
}

function main() {
    const forest = new Forest();
    forest.plantTree(10, 40, 'Ficus', 'Green', 'Rigid');
    forest.draw('');
}

main();
