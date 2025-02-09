import { Builder } from "./Builder";
import { SportEngine } from "./Engine";

export class Director {
    public constructSportsCar(builder: Builder): void {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine(new SportEngine());
        builder.setTripComputer(true);
        builder.setGPS(true);
    }
}