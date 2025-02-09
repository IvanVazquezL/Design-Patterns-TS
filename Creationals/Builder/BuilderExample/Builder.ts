import { Engine } from "./Engine";

export interface Builder {
    reset(): void;
    setSeats(seats: number): void;
    setEngine(engine: Engine): void;
    setTripComputer(hasTripComputer: boolean): void;
    setGPS(hasGPS: boolean): void;
}