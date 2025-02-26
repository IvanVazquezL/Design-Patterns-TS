namespace Iterators {
    interface Iterator<T> {
        next(): T | null;
        hasNext(): boolean;
        current(): T | null;
    }

    class Pokemon {
        constructor(public name: string, public type: string) {}
    }

    class PokemonCollection {
        private pokemons: Pokemon[] = [];

        addPokemon(pokemon: Pokemon): void {
            this.pokemons.push(pokemon);
        }

        getPokemonAt(index: number): Pokemon | null {
            if (index >= 0 && index < this.pokemons.length) {
                return this.pokemons[index];
            }

            return null;
        }

        getLength(): number {
            return this.pokemons.length;
        }

        createIterator(): PokemonIterator {
            return new PokemonIterator(this);
        }
    }

    class PokemonIterator implements Iterator<Pokemon> {
        constructor(
            private collection: PokemonCollection,
            private position: number = 0
        ) {}

        next(): Pokemon | null {
            if (this.hasNext()) {
                return this.collection.getPokemonAt(this.position++);
            }

            return null;
        }

        hasNext(): boolean {
            return this.position < this.collection.getLength();
        }

        current(): Pokemon | null{
            return this.collection.getPokemonAt(this.position);
        }  
    }

    function main() {
        const pokedex = new PokemonCollection();

        pokedex.addPokemon(new Pokemon('Pikachu', 'Electrico'));
        pokedex.addPokemon(new Pokemon('Charmander', 'Fuego'));
        pokedex.addPokemon(new Pokemon('Squirtle', 'Acuatico'));

        const iterator = pokedex.createIterator();

        while (iterator.hasNext()) {
            const pokemon = iterator.next();

            if (pokemon) {
                console.log(`Pokemon: ${pokemon.name} - ${pokemon.type}`);
            }
        } 
    }

    main();
}