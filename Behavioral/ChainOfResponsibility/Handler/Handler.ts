namespace Handlers {
    interface Handler {
        setNext(handler: Handler): Handler;
        handle(request: string): void;
    }

    abstract class BaseHandler implements Handler {
        private nextHandler?: Handler;

        setNext(handler: Handler): Handler {
            this.nextHandler = handler;
            return handler;
        }

        handle(request: string): void {
            if (this.nextHandler) {
                this.nextHandler.handle(request);
            }
        }  
    }

    class BasicSupport extends BaseHandler {
        override handle(request: string): void {
            if (request === 'Basic') {
                console.log('Basic Support');
                return;
            }

            console.log('Basic Support: Passing to advanced support');
            super.handle(request);
        }
    }

    class AdvancedSupport extends BaseHandler {
        override handle(request: string): void {
            if (request === 'Advanced') {
                console.log('Advanced Support');
                return;
            }

            console.log('Advanced Support: Passing to expert support');
            super.handle(request);
        }
    }

    class ExpertSupport extends BaseHandler {
        override handle(request: string): void {
            if (request === 'Expert') {
                console.log('Expert Support');
                return;
            }

            console.log('Expert Support: Nothing else to do');
        }
    }

    function main() {
        const expertSupport = new ExpertSupport();
        const advancedSupport = new AdvancedSupport();
        const basicSupport = new BasicSupport();
        basicSupport
            .setNext(advancedSupport)
            .setNext(expertSupport);
        basicSupport.handle('boom!');
    }

    main();
}