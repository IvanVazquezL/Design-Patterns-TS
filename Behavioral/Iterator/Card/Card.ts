namespace Cards {
    class Card {
        name: string;
        value: number;
      
        constructor(name: string, value: number) {
          this.name = name;
          this.value = value;
        }
      }
      
      class CardCollection {
        private cards: Card[] = [];
      
        addCard(card: Card): void {
          this.cards.push(card);
        }
      
        *[Symbol.iterator](): IterableIterator<Card> {
            yield* this.cards;
        }
      
        *getCards(): IterableIterator<Card> {
            for (const card of this.cards) {
              yield card;
            }
          }
      }
            
      function main(): void {
        const deck = new CardCollection();
      
        // Agregar algunas cartas a la colección
        deck.addCard(new Card('As de Corazones', 1));
        deck.addCard(new Card('Rey de Corazones', 13));
        deck.addCard(new Card('Reina de Corazones', 12));
        deck.addCard(new Card('Jota de Corazones', 11));
      
        // Recorrer la colección en orden usando for...of
        console.log('Recorriendo la colección de cartas:');
        for (const card of deck) {
          console.log(`Carta: ${card.name}, Valor: ${card.value}`);
        }
      }
      
      main();
}
