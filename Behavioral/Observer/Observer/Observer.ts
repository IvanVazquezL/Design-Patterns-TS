namespace Observers {
    interface Observer {
        notify(videoTitle: string): void;
    }

    class YoutubeChannel {
        private subscribers: Observer[] = [];

        constructor(
            private name: string
        ) {}

        subscribe(observer: Observer): void {
            this.subscribers.push(observer);
            console.log('New subscriber');
        }

        unsubscribe(observer: Observer): void {
            this.subscribers = this.subscribers.filter(subscriber => subscriber !== observer);
            console.log('Unsubscribe');
        }

        uploadVideo(videoTitle: string): void {
            for (const subscriber of this.subscribers) {
                subscriber.notify(videoTitle);
            }
        }
    }

    class Subscriber implements Observer {
        constructor(
            private name: string
        ) {}

        notify(videoTitle: string): void {
            console.log(`Username: ${this.name} Video: ${videoTitle}`);
        }
    }

    function main() {
        const channel = new YoutubeChannel('Cooking Living');
        
        const user1 = new Subscriber('Melissa');
        const user2 = new Subscriber('Cesar');

        channel.subscribe(user1);
        channel.subscribe(user2);

        channel.uploadVideo('Raclette')
    }

    main();
}