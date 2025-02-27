namespace Mediator {
    class User {
        constructor(
            private username: string,
            private chatRoom: ChatRoom
        ) {
            chatRoom.addUser(this);
        }

        sendMessage(message: string): void {
            console.log(`${this.username}: ${message}`);
            this.chatRoom.sendMessage(this, message);
        }

        receiveMessage(sender: User, message: string): void {
            console.log(`${sender.username}: ${message}`);
        }
    }
    
    class ChatRoom {
        constructor(
            public title: string,
            private users: User[] = []
        ) {}

        addUser(user: User): void {
            this.users.push(user);
        }

        sendMessage(sender: User, message: string): void {
            const usersToSend = this.users.filter(user => user !== sender);
            
            for (const user of usersToSend) {
                user.receiveMessage(sender, message);
            }
        }
    }

    function main() {
        const chatRoom = new ChatRoom('Group');

        const user1 = new User('Ivan', chatRoom);
        const user2 = new User('Val', chatRoom);
        const user3 = new User('Remi', chatRoom);

        user1.sendMessage('Hola a todos!');
    }

    main();
}