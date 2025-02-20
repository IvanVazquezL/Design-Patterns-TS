class CPU {
  stopOperations(): void {
    console.log('CPU: Deteniendo operaciones.');
  }

  jump(position: number): void {
    console.log(`CPU: Saltando a la posición de memoria ${position}.`);
  }

  execute(): void {
    console.log('CPU: Ejecutando instrucciones.');
  }
}

class HardDrive {
  read(position: number, size: number): string {
    console.log(
      `HardDrive: Leyendo ${size} bytes desde la posición ${position}.`
    );
    return '001010001010100';
  }

  close() {
    console.log('HardDrive: Deteniendo disco duro.');
  }
}

class Memory {
  load(position: number, data: string): void {
    console.log(`Memory: Cargando datos en la posición ${position} ${data}.`);
  }

  free(): void {
    console.log('Memory: Liberando memoria.');
  }
}

class ComputerFacade {
    private cpu: CPU = new CPU();
    private memory: Memory = new Memory();
    private hardDrive: HardDrive = new HardDrive();

  constructor() {}

  startComputer(): void {
    console.log('\n%cIniciando la computadora...');

    this.memory.load(0, this.hardDrive.read(0, 1024));
    this.cpu.jump(0);
    this.cpu.execute();

    console.log('Computadora lista para usar.\n');
  }

  shutDownComputer(): void {
    console.log('\n%cApagando la computadora...');
    console.log('Cerrando procesos y guardando datos...');

    this.cpu.stopOperations();
    this.memory.free();
    this.hardDrive.close();

    console.log('Computadora apagada.\n');
  }
}

function main() {
  const computer = new ComputerFacade();

  computer.startComputer();
  computer.shutDownComputer();
}

main();