export class LocalLogger {
    constructor(private file: string) {}

    writeLog(message: string) {
        console.log(`[${this.file} log] ${message}`);
    }

    writeError(message: string) {
        console.log(`[${this.file} error] ${message}`);
    }

    writeWarning(message: string) {
        console.log(`[${this.file} warning] ${message}`);
    }
}