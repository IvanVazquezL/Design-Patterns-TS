namespace Notifications {
    interface Notification {
        send(message: string): void;
    }
    
    class BasicNotification implements Notification {
        send(message: string): void {
            console.log(`Sending basic notification: ${message}`);
        }
    }

    abstract class NotificationDecorator implements Notification {
        constructor(protected notification: Notification) {}

        send(message: string): void {
            this.notification.send(message);
        }
    }

    class EmailDecorator extends NotificationDecorator {
        private sendEmail(message: string) {
            console.log(`Sending notification by email: ${message}`);
        }
        override send(message: string): void {
            super.send(message);
            this.sendEmail(message);
        }
    }

    class SMSDecorator extends NotificationDecorator {
        private sendSMS(message: string) {
            console.log(`Sending notification by SMS: ${message}`);
        }
        override send(message: string): void {
            super.send(message);
            this.sendSMS(message);
        }
    }

    function main() {
        let notification: Notification = new BasicNotification();
        notification = new EmailDecorator(notification);
        notification = new SMSDecorator(notification);
        notification.send('System Alert!');
    }

    main();
}
