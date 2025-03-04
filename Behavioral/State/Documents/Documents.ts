namespace Documents {
    interface State {
        name: string;

        drafting(): void;
        moderating(): void;
        publishing(): void;
    }

    class Document {
        constructor(
            private state: State = new Draft(this)
        ) {}

        drafting(): void {
            this.state.drafting();
        }

        moderating(): void {
            this.state.moderating();
        }

        publishing(): void {
            this.state.publishing();
        }

        setState(state: State): void {
            const previousState = this.state.name;
            this.state = state;
            console.log(`${previousState} -> ${state.name}`);
        }
    }

    class Draft implements State {
        name: string = 'Drafting document';

        constructor(
            private document: Document
        ) {}
        
        drafting(): void {
            console.log('Already drafting');
        }

        moderating(): void {
            this.document.setState(
                new Moderation(this.document)
            );
        }

        publishing(): void {
            this.document.setState(
                new Published(this.document)
            );
        }
    }

    class Moderation implements State {
        name: string = 'Moderating document';

        constructor(
            private document: Document
        ) {}

        drafting(): void {
            this.document.setState(
                new Draft(this.document)
            )
        }

        moderating(): void {
            console.log('Already Moderating');
        }

        publishing(): void {
            this.document.setState(
                new Published(this.document)
            )
        }

    }

    class Published implements State {
        name: string = 'Publishing document';

        constructor(
            private document: Document
        ) {}

        drafting(): void {
            this.document.setState(
                new Draft(this.document)
            )        }

        moderating(): void {
            console.log('Cant go to moderation');
        }
    
        publishing(): void {
            console.log('Already published');
        }
    }

    function main() {
        const document = new Document();

        document.drafting();
        document.moderating();
        document.publishing();

    }

    main();
}