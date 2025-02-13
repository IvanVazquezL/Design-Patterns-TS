namespace Documents {
    class Document {
        constructor(
            public title: string,
            public content: string,
            public author: string
        ) {}

        clone(): Document {
            return new Document(this.title, this.content, this.author);
        }

        displayInfo(): void {
            console.log(`
                Title: ${this.title}
                Content: ${this.content}
                Author: ${this.author}
                `);
        }
    }

    function main() {
        const document1 = new Document('ibs', '500', 'ibs');
        document1.displayInfo();

        const document2 = document1.clone();
        document2.title = 'bsi';
        document2.displayInfo();
    }

    main();
}