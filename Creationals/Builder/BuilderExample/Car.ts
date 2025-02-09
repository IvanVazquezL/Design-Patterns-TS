import { Engine } from "./Engine";

export class Car {
    public engine: Engine;
    public seats: number;
    public gps: string;
    public tripComputer: string;

    public displayInfo(): string {
        return `
        === Car Specifications ===
        Engine: ${this.engine ? this.engine.getEngineSpecs() : "None"}
        GPS: ${this.gps ? "Enabled" : "Not Installed"}
        Trip Computer: ${this.tripComputer ? "Installed" : "Not Installed"}
        Seats: ${this.seats ?? "Not Specified"}
        `;
    }
}