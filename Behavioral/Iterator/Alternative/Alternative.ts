namespace Alternative {
  class Pokemon {
    name: string;
    type: string;
  
    constructor(name: string, type: string) {
      this.name = name;
      this.type = type;
    }
  }
  
  // Clase que representa la colección de Pokemons
  class PokemonCollection {
    private pokemons: Pokemon[] = [];
  
    addPokemon(pokemon: Pokemon): void {
      this.pokemons.push(pokemon);
    }
  
    *getPokemons(): IterableIterator<Pokemon> {
      for (const pokemon of this.pokemons) {
        yield pokemon;
      }
    }
    
    *[Symbol.iterator](): IterableIterator<Pokemon> {
      yield* this.pokemons;
    }
  }
  
  // Código Cliente para probar el iterador con función generadora
  
  function main(): void {
    const pokedex = new PokemonCollection();
  
    // Agregar Pokemones a la colección
    pokedex.addPokemon(new Pokemon('Pikachu', 'Eléctrico'));
    pokedex.addPokemon(new Pokemon('Charmander', 'Fuego'));
    pokedex.addPokemon(new Pokemon('Squirtle', 'Agua'));
    pokedex.addPokemon(new Pokemon('Bulbasaur', 'Planta'));
  
    // Recorremos la colección usando for...of, gracias a la función generadora
    console.log('Recorriendo la colección de Pokemons:');
    
    /*
    for (const pokemon of pokedex.getPokemons()) {
      console.log(`Pokémon: ${pokemon.name}, Tipo: ${pokemon.type}`);
    }*/
    
    for (const pokemon of pokedex) {
      console.log(`Pokémon: ${pokemon.name}, Tipo: ${pokemon.type}`);
    }
  }
  
  main();
}
