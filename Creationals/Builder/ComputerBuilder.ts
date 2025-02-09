class Computer {
    public cpu: string;
    public memory: string;
    public storage: string;
    public gpu?: string;

    public displayConfiguration(): string {
        return `CPU: ${this.cpu}, Memory: ${this.memory}, Storage: ${this.storage}, GPU: ${this.gpu}`;
    }
}

class ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    public setCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    public setMemory(memory: string): ComputerBuilder {
        this.computer.memory = memory;
        return this;
    }

    public setStorage(storage: string): ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    public setGPU(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    public build(): Computer {
        return this.computer;
    }
}

function main() {
    const computer = new ComputerBuilder()
        .setCPU('Intel i7')
        .setMemory('16GB')
        .setStorage('1TB')
        .setGPU('Nvidia RTX 2080')
        .build();

    console.log(computer.displayConfiguration());
}

main();