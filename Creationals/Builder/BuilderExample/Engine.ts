export class Engine {
    private horsepower: number;
    private fuelType: string;
    private turbocharged: boolean;

    constructor(horsepower: number, fuelType: string, turbocharged: boolean) {
        this.horsepower = horsepower;
        this.fuelType = fuelType;
        this.turbocharged = turbocharged;
    }

    public getEngineSpecs(): string {
        return `
        === Engine Specifications ===
        Horsepower: ${this.horsepower} HP
        Fuel Type: ${this.fuelType}
        Turbocharged: ${this.turbocharged ? "Yes" : "No"}
        `;
    }
}

export class SportEngine extends Engine {
    constructor() {
        super(500, "Petrol", true);
    }
}

class EconomyEngine extends Engine {
    constructor() {
        super(150, "Petrol", false);
    }
}

class ElectricEngine extends Engine {
    constructor() {
        super(300, "Electric", false);
    }
}