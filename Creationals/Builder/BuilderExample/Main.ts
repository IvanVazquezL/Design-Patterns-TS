import { Director } from "./Director";
import { CarBuilder } from "./CarBuilder";
import { ManualBuilder } from "./ManualBuilder";


function main() {
    const director = new Director();

    const carBuilder = new CarBuilder();
    director.constructSportsCar(carBuilder);
    const car = carBuilder.getResult();
    console.log(car.displayInfo())

    const manualBuilder = new ManualBuilder();
    director.constructSportsCar(manualBuilder);

    // The final product is often retrieved from a builder
    // object since the director isn't aware of and not
    // dependent on concrete builders and products.
    const manual = manualBuilder.getResult();
    console.log(manual.displayInfo())
}

main();