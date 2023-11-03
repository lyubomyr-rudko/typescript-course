class Character {
    constructor(
        public name: string,
        public level: number,
        public health: number,
        public mana: number
    ) {}

    attack(target: Character, damage: number, spell?: string): void {
        if (this.health <= 0) {
            console.log(
                `${
                    this.name
                } мабудь не помітив, що він вже відправився на той світ і намагається ${
                    spell ? 'промовляти свої заклинання' : 'махати мечем'
                }`
            );
        } else if (target.health <= 0) {
            console.log(
                `${this.name} напевно побачив привида ${target.name} і через страх розпочав його атакувати`
            );
        } else {
            console.log(
                `${this.name} атакує ${target.name}а${
                    spell ? `, використовуючи спел ${spell},` : ''
                } і завдає ${damage} шкоди.`
            );

            target.takeDamage(damage);
        }
    }

    takeDamage(damage: number): void {
        this.health -= damage;
        if (this.health <= 0) {
            console.log(`${this.name} був знищений.`);
        }
    }

    heal(amount: number): void {
        const amountManaRequired = amount * 5;
        if (this.mana < amountManaRequired) {
            console.log(
                `У ${this.name}а недостатньо мани для відновлення здоров'я (необхідно: ${amountManaRequired}, в наявності: ${this.mana})`
            );
        } else {
            this.mana -= amountManaRequired;
            this.health += amount;
            console.log(`${this.name} відновив ${amount} здоров'я.`);
        }
    }

    restoreMana(amount: number): void {
        this.mana += amount;
        console.log(`${this.name} відновив ${amount} мани.`);
    }
}

class Mage extends Character {
    constructor(name: string, level: number) {
        super(name, level, 100, 150);
    }

    castSpell(target: Character, spellName: string, damage: number): void {
        if (this.mana >= damage) {
            this.mana -= damage;

            this.attack(target, damage, spellName);
        } else {
            console.log(
                `у ${this.name}а немає достатньої мани для кастування спела.`
            );
        }
    }
}

class Warrior extends Character {
    constructor(name: string, level: number) {
        super(name, level, 200, 50);
    }

    performAttack(target: Character): void {
        const damage = this.level * 10;
        this.attack(target, damage);
    }
}

const mage = new Mage('Маг', 10);
const warrior = new Warrior('Воїн', 12);

mage.castSpell(warrior, 'Вогнянна стріла', 30);
mage.heal(10);
mage.castSpell(warrior, 'Вогнянна стріла', 30);
mage.heal(10);
warrior.performAttack(mage);
mage.castSpell(warrior, 'Вогнянна стріла', 30);
warrior.performAttack(mage);
