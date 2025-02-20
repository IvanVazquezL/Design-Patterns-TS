interface MenuComponent {
  showDetails(indent?: string): void;
}

class MenuItem implements MenuComponent {
  constructor(private name: string, private price: number) {}

  showDetails(indent: string = ''): void {
    console.log(
      `${indent}- ${this.name}: $${this.price.toFixed(2)}`
    );
  }
}

class MenuCategory implements MenuComponent {
    private name: string;
    private items: MenuComponent[];

    constructor(name: string) {
        this.name = name;
        this.items = [];
    }

  add(item: MenuComponent | MenuComponent[]): void {
    if (Array.isArray(item)) {
        this.items.push(...item);
    } else {
        this.items.push(item);
    }
  }

  showDetails(indent: string = ''): void {
    console.log(`${indent}+ ${this.name}`);
    for (const item of this.items) {
        item.showDetails(indent + ' ');
    }
  }
}

function main() {
  const salad = new MenuItem('Ensalada', 5.99);
  const soup = new MenuItem('Sopa de tomate', 4.99);
  const steak = new MenuItem('Bistec', 15.99);
  const soda = new MenuItem('Refresco', 2.5);
  const dessert = new MenuItem('Pastel de chocolate', 6.5);
  const coffee = new MenuItem('Café', 1.99);

  const appetizers = new MenuCategory('Entradas');
  appetizers.add(salad);
  appetizers.add(soup);

  const mainCourse = new MenuCategory('Plato Principal');
  mainCourse.add(steak);

  const beverages = new MenuCategory('Bebidas');
  beverages.add(soda);
  beverages.add(coffee);

  const desserts = new MenuCategory('Postres');
  desserts.add(dessert);

  const mainMenu = new MenuCategory('Menú Principal');
  mainMenu.add([appetizers, beverages, desserts, mainCourse]);
  mainMenu.add(mainCourse);
  mainMenu.add(beverages);
  mainMenu.add(desserts);

  console.log('Menú del Restaurante:');
  mainMenu.showDetails();
}

main();