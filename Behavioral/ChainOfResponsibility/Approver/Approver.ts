namespace Approvers {
    interface Approver {
        setNext(approver: Approver): Approver;
        approveRequest(amount: number): void;
      }
      
      abstract class BaseApprover implements Approver {
        private nextApprover: Approver | null = null;
      
        setNext(approver: Approver): Approver {
          this.nextApprover = approver;
          return approver;
        }
      
        abstract approveRequest(amount: number): void;
      
        protected next(amount: number): void {
          if (this.nextApprover) {
            this.nextApprover.approveRequest(amount);
            return;
          } 
          
          console.log('Solicitud no pudo ser aprobada.');
        }
      }
            
      class Supervisor extends BaseApprover {
        override approveRequest(amount: number): void {
          if (amount <= 1000) {
            console.log('Approved');
            return;
          }

          console.log('Passing to next Approver');
          this.next(amount);
        }
      }
      
      class Manager extends BaseApprover {      
        override approveRequest(amount: number): void {
          if (amount <= 5000) {
            console.log('Approved');
            return;
          }

          console.log('Passing to next Approver');
          this.next(amount);        
        }
      }
      
      class Director extends BaseApprover {
        override approveRequest(amount: number): void {
            console.log('Approved');
            return;      
        }
      }
            
      function main() {
        const supervisor = new Supervisor();
        const manager = new Manager();
        const director = new Director();
      
        // Configurar la cadena de responsabilidad
        supervisor.setNext(manager).setNext(director);
      
        // Probar diferentes solicitudes de compra
        console.log('Solicitud de compra de $500:');
        supervisor.approveRequest(500);
      
        console.log('\nSolicitud de compra de $3000:');
        supervisor.approveRequest(3000);
      
        console.log('\nSolicitud de compra de $7000:');
        supervisor.approveRequest(7000);
      }
      
      main();
}
