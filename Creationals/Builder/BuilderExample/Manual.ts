export class Manual {
    public engine: string;
    public seats: string;
    public gps: string;
    public tripComputer: string;

    public displayInfo(): string {
        return `
        === Car Manual ===
        Engine: ${this.engine}
        GPS: ${this.gps ? "Enabled" : "Not Installed"}
        Trip Computer: ${this.tripComputer ? "Installed" : "Not Installed"}
        Seats: ${this.seats ?? "Not Specified"}
        `;
    }
}