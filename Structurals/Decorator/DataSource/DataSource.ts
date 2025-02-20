interface DataSource {
    writeData(data: string): void;
    readData(): string;
}

class FileDataSource implements DataSource {
    constructor(public filename: string) {}
    
    writeData(data: string): void {
        throw new Error("Method not implemented.");
    }

    readData(): string {
        throw new Error("Method not implemented.");
    }
}

abstract class DataSourceDecorator implements DataSource {
    constructor(private wrapee: DataSource) {}

    writeData(data: string): void {
        this.wrapee.writeData(data);
    }

    readData(): string {
        return this.wrapee.readData();
    }
}

class EncryptorDecorator extends DataSourceDecorator {
    override writeData(data: string): void {
        super.writeData(data);
    }

    override readData(): string {
        throw new Error("Method not implemented.");
    }
}

class CompressionDecorator extends DataSourceDecorator {
    override writeData(data: string): void {
        super.writeData(data);
    }

    override readData(): void {
        throw new Error("Method not implemented.");
    }
}