namespace Trees {
    interface Iterator<T> {
        next(): T | null;
        hasNext(): boolean;
        current(): T | null;
    }

    class TreeNode {
        constructor(
            public val: number,
            public left: TreeNode | null = null,
            public right: TreeNode | null = null
        ) {}
    }

    class TreeCollection {
        private tree: TreeNode | null = null;

        constructor(root: TreeNode | null) {
            this.tree = root;
        }

        getDepthIterator(): DepthIterator {
            return new DepthIterator(this.tree);
        }

        getBreadthIterator(): BreadthIterator {
            return new BreadthIterator(this.tree);
        }
    }

    class DepthIterator implements Iterator<TreeNode> {
        private stack: TreeNode[] = [];
        private currentNode: TreeNode | null = null;

        constructor(root: TreeNode | null) {
            if (root) this.stack.push(root);
        }

        next(): TreeNode | null {
            if (!this.hasNext()) return null;
            this.currentNode = this.stack.pop()!;

            // Push right child first so left is processed first
            if (this.currentNode.right) this.stack.push(this.currentNode.right);
            if (this.currentNode.left) this.stack.push(this.currentNode.left);

            return this.currentNode;
        }

        hasNext(): boolean {
            return this.stack.length > 0;
        }

        current(): TreeNode | null {
            return this.currentNode;
        }
    }

    class BreadthIterator implements Iterator<TreeNode> {
        private queue: TreeNode[] = [];
        private currentNode: TreeNode | null = null;

        constructor(root: TreeNode | null) {
            if (root) this.queue.push(root);
        }

        next(): TreeNode | null {
            if (!this.hasNext()) return null;
            this.currentNode = this.queue.shift()!; // Dequeue

            if (this.currentNode.left) this.queue.push(this.currentNode.left);
            if (this.currentNode.right) this.queue.push(this.currentNode.right);

            return this.currentNode;
        }

        hasNext(): boolean {
            return this.queue.length > 0;
        }

        current(): TreeNode | null {
            return this.currentNode;
        }
    }

    function main() {
        // Creating the tree
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);

        const treeCollection = new TreeCollection(root);

        console.log("Depth-First Traversal:");
        const depthIterator = treeCollection.getDepthIterator();
        while (depthIterator.hasNext()) {
            console.log(depthIterator.next()?.val);
        }

        console.log("\nBreadth-First Traversal:");
        const breadthIterator = treeCollection.getBreadthIterator();
        while (breadthIterator.hasNext()) {
            console.log(breadthIterator.next()?.val);
        }
    }

    main();
}
