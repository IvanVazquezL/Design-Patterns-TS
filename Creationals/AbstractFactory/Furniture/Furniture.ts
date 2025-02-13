interface Chair {
    hasLegs(): boolean;
    sitOn(): void;
}

interface Sofa {
    hasLegs(): boolean;
    sitOn(): void; 
}

interface Table {
    hasLegs(): boolean;
    use(): void;
}

class ArtDecoChair implements Chair {
    hasLegs(): boolean {
        return true;
    }

    sitOn(): void {
        console.log('Sitting on an Art Deco chair');
    }
}

class VictorianChair implements Chair {
    hasLegs(): boolean {
        return true;
    }

    sitOn(): void {
        console.log('Sitting on a Victorian chair');
    }
}

class ModernChair implements Chair {
    hasLegs(): boolean {
        return false;
    }

    sitOn(): void {
        console.log('Sitting on a Modern chair');
    }
}

class ArtDecoSofa implements Sofa {
    hasLegs(): boolean {
        return true;
    }

    sitOn(): void {
        console.log('Sitting on an Art Deco chair');
    }
}

class VictorianSofa implements Sofa {
    hasLegs(): boolean {
        return true;
    }

    sitOn(): void {
        console.log('Sitting on a Victorian sofa');
    }
}

class ModernSofa implements Sofa {
    hasLegs(): boolean {
        return false;
    }

    sitOn(): void {
        console.log('Sitting on a Modern sofa');
    }
}

class ArtDecoTable implements Table {
    hasLegs(): boolean {
        return true;
    }

    use(): void {
        console.log('Using an Art Deco Table');
    }
}

class VictorianTable implements Table {
    hasLegs(): boolean {
        return true;
    }

    use(): void {
        console.log('Using a Victorian Table');
    }
}

class ModernTable implements Table {
    hasLegs(): boolean {
        return false;
    }

    use(): void {
        console.log('Using a Modern Table');
    }
}

interface FurnitureFactory {
    createChair(): Chair;
    createSofa(): Sofa;
    createTable(): Table;
}

class ArtDecoFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new ArtDecoChair();
    }

    createSofa(): Sofa {
        return new ArtDecoSofa();
    }

    createTable(): Table {
        return new ArtDecoTable();
    }
}

class VictorianFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new VictorianChair();
    }

    createSofa(): Sofa {
        return new VictorianSofa();
    }

    createTable(): Table {
        return new VictorianTable();
    }
}

class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new ModernChair();
    }

    createSofa(): Sofa {
        return new ModernSofa();
    }

    createTable(): Table {
        return new ModernTable();
    }
}

function main(factory: FurnitureFactory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();
    const table = factory.createTable();

    chair.sitOn();
    sofa.sitOn();
    table.use();
}

main(new VictorianFurnitureFactory());