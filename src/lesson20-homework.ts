interface Command {
    execute(): void;
}

class Character {
    constructor(private char: string) {
        this.char = char;
    }

    attack(): void {
        console.log(`${this.char} атакує!`);
    }

    defend(): void {
        console.log(`${this.char} захищається!`);
    }
}

class AttackCommand implements Command {
    constructor(private receiver: Character) {
        this.receiver = receiver;
    }

    execute(): void {
        this.receiver.attack();
    }
}

class DefendCommand implements Command {
    constructor(private receiver: Character) {
        this.receiver = receiver;
    }

    execute(): void {
        this.receiver.defend();
    }
}

class Controller {
    private command: Command | undefined;

    setCommand(command: Command): void {
        this.command = command;
    }

    performAction(): void {
        if (this.command) {
            this.command.execute();
        }
    }
}

const hero = new Character('Герой');
const monster = new Character('Монстр');
const heroAttackCommand = new AttackCommand(hero);
const monsterAttackCommand = new AttackCommand(monster);
const heroDefendCommand = new DefendCommand(hero);
const monsterdefendCommand = new DefendCommand(monster);

const heroController = new Controller();
const monsterController = new Controller();

heroController.setCommand(heroAttackCommand);
monsterController.setCommand(monsterdefendCommand);

heroController.performAction();
monsterController.performAction();

monsterController.setCommand(monsterAttackCommand);
heroController.setCommand(heroDefendCommand);

monsterController.performAction();
heroController.performAction();
