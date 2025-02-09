import { Engine } from "./Engine";
import { Builder } from "./Builder";
import { Manual } from "./Manual";

export class ManualBuilder implements Builder{
    private manual: Manual;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.manual = new Manual();
    }

    public setSeats(seats: number): ManualBuilder {
        this.manual.seats = 'It has ' + seats + ' seats';
        return this;
    }

    public setEngine(engine: Engine): ManualBuilder {
        this.manual.engine = 'It has an engine';
        return this;
    }

    public setTripComputer(hasTripComputer: boolean): ManualBuilder {
        this.manual.tripComputer = hasTripComputer ? 'It has tripComputer' : '';
        return this;
    }

    public setGPS(hasGPS: boolean): ManualBuilder {
        this.manual.gps = hasGPS ? 'It has gps': '';
        return this;
    }

    public getResult(): Manual {
        const product = this.manual;
        this.reset();
        return product;
    }
}