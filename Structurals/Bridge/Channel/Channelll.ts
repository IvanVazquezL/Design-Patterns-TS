namespace ChanelII {
    interface NotificationChannel {
        send(message: string): void;
    }

    class EmailChannel implements NotificationChannel {
        send(message: string): void {
            console.log(`Enviando correo electrónico: ${message}`);
        }
    }

    class SMSChannel implements NotificationChannel {
        send(message: string): void {
            console.log(`Enviando SMS: ${message}`);
        }
    }

    class PushNotificationChannel implements NotificationChannel {
        send(message: string): void {
            console.log(`Enviando Push: ${message}`);
        }
    }

    abstract class Notification {
        constructor(protected channels: NotificationChannel[]) {}

        abstract notify(message: string) : void;
        abstract addChannel(channel: NotificationChannel): void;
    }

    class AlertNotification extends Notification {
        override notify(message: string): void {
            console.log('\n%cNotificación de Alerta:');
            for (const channel of this.channels) {
                channel.send(message);
            }
        }

        override addChannel(channel: NotificationChannel): void {
            this.channels.push(channel);
        }
    }

    function main() {
        const channels = [
            new EmailChannel(),
            new SMSChannel(),
            new PushNotificationChannel()
        ];

        const alert = new AlertNotification(channels);

        alert.notify('Someone outside of the house');
    }

    main();
}