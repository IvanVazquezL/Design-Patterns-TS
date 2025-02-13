/**
 * !Instrucciones:
 	1.Completen las Clases de Productos:
    •	ElectricCar debe implementar Vehicle y mostrar el mensaje "Ensamblando un auto eléctrico".
    •	GasCar debe implementar Vehicle y mostrar el mensaje "Ensamblando un auto de combustión".
    •	ElectricEngine debe implementar Engine y mostrar el mensaje "Arrancando motor eléctrico".
    •	GasEngine debe implementar Engine y mostrar el mensaje "Arrancando motor de combustión".

	2.	Completen las Clases de Fábricas:
    •	ElectricVehicleFactory debe crear un ElectricCar y un ElectricEngine.
    •	GasVehicleFactory debe crear un GasCar y un GasEngine.

	3. Prueben el Código:
	  •	Ejecuten el código para asegurarse de que cada fábrica produce el tipo correcto de vehículo y motor.

 */
interface Vehicle {
    assemble(): void;
}

interface Engine {
start(): void;
}
  
class ElectricCar implements Vehicle{
    assemble(): void {
        console.log('Assembling an Electric Car');
    }
}
  
class GasCar implements Vehicle{
    assemble(): void {
        console.log('Assembling a Gas Car');
    }
}
  
class ElectricEngine implements Engine {
    start(): void {
        console.log('Starting up an Electric Engine');
    }
}
  
class GasEngine implements Engine {
    start(): void {
        console.log('Starting up a Gas Engine');
    }
}
    
interface VehicleFactory {
    createVehicle(): Vehicle;
    createEngine(): Engine;
}
  
class ElectricVehicleFactory implements VehicleFactory {
    createVehicle(): Vehicle {
        return new ElectricCar();
    }

    createEngine(): Engine {
        return new ElectricEngine();
    }
}
  
class GasVehicleFactory implements VehicleFactory {
    createVehicle(): Vehicle {
        return new GasCar();
    }

    createEngine(): Engine {
        return new GasEngine();
    }
}

function main(factory: VehicleFactory) {
    const vehicle = factory.createVehicle();
    const engine = factory.createEngine();
  
    vehicle.assemble();
    engine.start();
}
  
console.log('Creating an Electric Vehicle:');
main(new ElectricVehicleFactory());

console.log('\nCreating a Gas Vehicle:');
main(new GasVehicleFactory());