    class ControlTower {
      private airplanes: Airplane[] = [];
    
      registerAirplane(airplane: Airplane): void {
        this.airplanes.push(airplane);
      }
    
      sendMessage(sender: Airplane, message: string): void {
        const airplanesToReceiveMessage = this.airplanes.filter(airplane => airplane !== sender);
            
        for (const airplane of airplanesToReceiveMessage) {
            airplane.receiveMessage(sender, message);
        }
      }
    
      requestLanding(sender: Airplane): void {
        console.log(`\nTorre de Control: %cPermiso de aterrizaje concedido a ${sender.getId()}`);
        this.sendMessage(sender, `${sender.getId()} está aterrizando.`);
      }
    
      requestTakeoff(sender: Airplane): void {
        console.log(`\nTorre de Control: %cPermiso de despegue concedido a ${sender.getId()}`);
        this.sendMessage(sender, `${sender.getId()} está despegando.`);
      }
    }
    
    class Airplane {
      private id: string;
      private controlTower: ControlTower;
    
      constructor(id: string, controlTower: ControlTower) {
        this.id = id;
        this.controlTower = controlTower;
    
        this.controlTower.registerAirplane(this);
      }
    
      getId(): string {
        return this.id;
      }
    
      requestLanding(): void {
        console.log(`${this.id} solicita permiso para aterrizar.`);
        this.controlTower.requestLanding(this);
      }
    
      requestTakeoff(): void {
        console.log(`${this.id} solicita permiso para despegar.`);
        this.controlTower.requestTakeoff(this);
      }
    
      receiveMessage(sender: Airplane, message: string): void {
        console.log(`${this.id} recibe mensaje de %c${sender.getId()}: "${message}"`);
      }
    }
    
    function main(): void {
      const controlTower = new ControlTower();
    
      const airplane1 = new Airplane('Vuelo 101', controlTower);
      const airplane2 = new Airplane('Vuelo 202', controlTower);
      const airplane3 = new Airplane('Vuelo 303', controlTower);
    
      airplane1.requestLanding();
      airplane2.requestTakeoff();
      airplane3.requestLanding();
    }
    
    main();