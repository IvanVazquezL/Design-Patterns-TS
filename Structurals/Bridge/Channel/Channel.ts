namespace Notifications {
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
        constructor(protected channel: NotificationChannel) {}

        abstract notify(message: string) : void;
        abstract setChannel(channel: NotificationChannel): void;
    }

    class AlertNotification extends Notification {
        notify(message: string): void {
            console.log('\n%cNotificación de Alerta:');
            this.channel.send(message);
        }

        setChannel(channel: NotificationChannel): void {
            this.channel = channel;
        }
    }

    class ReminderNotification extends Notification {
        notify(message: string): void {
            console.log('\n%cNotificación de Recordatorio:');
            this.channel.send(message);
        }

        setChannel(channel: NotificationChannel): void {
            this.channel = channel;
        }
    }

    class PushNotification extends Notification {
        override notify(message: string): void {
            console.log('\n%cNotificación de Push:');
            this.channel.send(message);
        }

        override setChannel(channel: NotificationChannel): void {
            this.channel = channel;
        }
    }

    function main() {
        const alert = new AlertNotification(new EmailChannel());

        alert.notify('Alerta de seguridad: Se ha detectado un acceso no autorizado.');

        alert.setChannel(new SMSChannel());
        alert.notify('Alerta de seguridad: Se ha detectado un acceso no autorizado.');

        const reminder = new ReminderNotification(new SMSChannel());
        reminder.notify(
            'Recordatorio: Tu cita con el médico es mañana a las 10:00 a.m.'
        );

        reminder.setChannel(new PushNotificationChannel());
        reminder.notify(
            'Recordatorio: Tu cita con el médico es mañana a las 10:00 a.m.'
        );

        const push = new PushNotification(new PushNotificationChannel());
        push.notify('Nueva actualización disponible. Haz clic para instalar.');
    }

    main();
}