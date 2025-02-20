namespace Documents {
    interface Document {
        displayContent(user: User): void;
      }
      
      class ConfidentialDocument implements Document {
          constructor(private content: string) {}
      
          displayContent(): void {
              console.log(`Contenido del documento: \n${this.content}\n`);
          }
      }
      
      class DocumentProxy implements Document {      
        constructor(
            private document: ConfidentialDocument,
            private mustHaveRoles: string[]
        ) {}
      
        displayContent(user: User): void {
            if (this.mustHaveRoles.includes(user.getRole())) {
                console.log(this.document.displayContent());
            } else {
                console.log(`Access Denied ${user.getName()}`);
            }
        }
      }
      
      class User {
        private name: string;
        private role: 'admin' | 'user';
      
        constructor(name: string, role: 'admin' | 'user') {
          this.name = name;
          this.role = role;
        }
      
        getName(): string {
          return this.name;
        }
      
        getRole(): string {
          return this.role;
        }
      }
            
      function main() {
        const confidentialDoc = new ConfidentialDocument(
          'Este es el contenido confidencial del documento.'
        );
        const proxy = new DocumentProxy(confidentialDoc, ['admin']);
      
        const user1 = new User('Juan', 'user');
        const user2 = new User('Ana', 'admin');
      
        console.log('Intento de acceso del usuario 1:');
        proxy.displayContent(user1); // Debería denegar el acceso
      
        console.log('\nIntento de acceso del usuario 2:');
        proxy.displayContent(user2); // Debería permitir el acceso
      }
      
      main();
}
