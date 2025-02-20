namespace Characters {
    interface Character {
        getDescription(): string;
        getStats(): { attack: number; defense: number };
    }
  
  class BasicCharacter implements Character{
      getDescription(): string {
          return 'Basic Character';
      }

      getStats(): { attack: number; defense: number; } {
          return {
            attack: 10,
            defense: 10
          };
      }
  }
  
  abstract class CharacterDecorator implements Character {
    constructor(protected character: Character) {}
    
    getDescription(): string {
      return this.character.getDescription();
    }
  
    getStats(): { attack: number; defense: number } {
        return this.character.getStats();
    }
  }
  
  class HelmetDecorator extends CharacterDecorator {
    override getDescription(): string {
      return this.character.getDescription() + '\n * con Casco';
    }
  
    override getStats(): { attack: number; defense: number } {
      const stats = this.character.getStats();
      return { attack: stats.attack, defense: stats.defense + 5 };
    }
  }
  
  class ShieldDecorator extends CharacterDecorator {
    override getDescription(): string {
      return this.character.getDescription() + '\n * con Escudo';
    }
  
    override getStats(): { attack: number; defense: number } {
      const stats = this.character.getStats();
      return { attack: stats.attack, defense: stats.defense + 10 };
    }
  }
  
  class SwordDecorator extends CharacterDecorator {
    override getDescription(): string {
      return this.character.getDescription() + '\n * con Espada';
    }
  
    override getStats(): { attack: number; defense: number } {
      const stats = this.character.getStats();
      return { attack: stats.attack + 7, defense: stats.defense };
    }
  }

  class RingDecorator extends CharacterDecorator {
    override getDescription(): string {
        return this.character.getDescription() + '\n * con Anillo';
      }
    
      override getStats(): { attack: number; defense: number } {
        const stats = this.character.getStats();
        return { attack: stats.attack + 3, defense: stats.defense };
      }
  }
  
  function main() {
    let character: Character = new BasicCharacter();
    console.log('\nPersonaje inicial:', character.getDescription());
    console.log('Estadísticas:', character.getStats());
  
    character = new HelmetDecorator(character);
    console.log('\nCon Casco:', character.getDescription());
    console.log('Estadísticas:', character.getStats());
  
    character = new ShieldDecorator(character);
    console.log('\nCon Escudo:', character.getDescription());
    console.log('Estadísticas:', character.getStats());
  
    character = new SwordDecorator(character);
    console.log('\nCon Espada:', character.getDescription());
    console.log('Estadísticas:', character.getStats());
  
    character = new RingDecorator(character);
    console.log('\nCon Anillo:', character.getDescription());
    console.log('Estadísticas:', character.getStats());
  
    console.log('\n\n');
  }
  
  main();
}
