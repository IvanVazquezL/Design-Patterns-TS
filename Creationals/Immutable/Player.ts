 class Player {
   constructor(
        readonly name: string, 
        readonly score: number, 
        readonly level: number
    ) {}
 
   copyWith({ name, score, level }: Partial<Player>): Player {
        return new Player(
            name ?? this.name,
            score ?? this.score,
            level ?? this.level
        );
   }
 
   displayState(): void {
     console.log(`\nJugador: ${this.name}`);
     console.log(`Puntaje: ${this.score}`);
     console.log(`Nivel: ${this.level}`);
   }
 }
 
 function main() {
   let player = new Player('Carlos', 0, 1);
   console.log('Estado inicial:');
   player.displayState();
 
   player = player.copyWith({ score: 10 });
   console.log('\nDespués de incrementar el puntaje:');
   player.displayState();
 
   player = player.copyWith({ level: 2 });
   console.log('\nDespués de subir de nivel:');
   player.displayState();
 
   player = player.copyWith({ name: 'Carlos Pro' });
   console.log('\nDespués de cambiar el nombre:');
   player.displayState();
 }
 
 main();