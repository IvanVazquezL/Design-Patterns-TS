import { Builder } from "./Builder";
import { Car } from "./Car";
import { Engine } from "./Engine";

export class CarBuilder implements Builder{
    private car: Car;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.car = new Car();
    }

    public setSeats(seats: number): CarBuilder {
        this.car.seats = seats;
        return this;
    }

    public setEngine(engine: Engine): CarBuilder {
        this.car.engine = engine;
        return this;
    }

    public setTripComputer(hasTripComputer: boolean): CarBuilder {
        this.car.tripComputer = hasTripComputer ? 'has Trip Computer' : '';
        return this;
    }

    public setGPS(hasGPS: boolean): CarBuilder {
        this.car.gps = hasGPS ? 'has GPS' : '';
        return this;
    }

    public getResult(): Car {
        const product = this.car
        this.reset();
        return product;
    }
}
