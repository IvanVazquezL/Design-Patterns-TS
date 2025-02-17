interface Ability {
    use(): void;
}

class SwordAttack implements Ability {
    use(): void {
        console.log('Sword Attack!');
    } 
}

class MagicSpell implements Ability {
    use(): void {
        console.log('Magic Spell!');
    }
}

class AxeAttack implements Ability {
    use(): void {
        console.log('Axe Attack!');
    }
}

abstract class Character {
    constructor(protected ability: Ability) {}

    setAbility(ability: Ability): void {
        this.ability = ability;
    }

    abstract performAbility(): void;
}

class Warrior extends Character {
    performAbility(): void {
        console.log('The Warrior prepares its attack');
        this.ability.use();
    }
}

class Mage extends Character {
    performAbility(): void {
        console.log('The Mage prepares its attack');
        this.ability.use();
    }
}

function main() {
    const swordAttack = new SwordAttack();
    const warrior = new Warrior(swordAttack);
    warrior.performAbility();

    const axeAttack = new AxeAttack();
    warrior.setAbility(axeAttack);
    warrior.performAbility();
}

main();