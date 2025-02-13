interface Button {
    paint(): void;
}

interface Checkbox {
    paint(): void;
}

class WinButton implements Button {
    paint(): void {
        console.log('Painting WinButton');
    }
}

class MacButton implements Button {
    paint(): void {
        console.log('Painting MacButton');
    }
}

class WinCheckbox implements Checkbox {
    paint(): void {
        console.log('Painting WinCheckbox');
    }
}

class MacCheckbox implements Checkbox {
    paint(): void {
        console.log('Painting MacCheckbox');
    }
}

interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

class WinFactory implements GUIFactory {
    createButton(): Button {
        return new WinButton();
    }

    createCheckbox(): Checkbox {
        return new WinCheckbox();
    }
}

class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    }

    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

function main(factory: GUIFactory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    button.paint();
    checkbox.paint();
}

main(new WinFactory());
 
