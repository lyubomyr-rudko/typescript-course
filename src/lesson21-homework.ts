class CPU {
    execute(): void {
        console.log('Процесор виконує інструкції');
    }

    stop(): void {
        console.log('Процесор зупинено');
    }
}

class Memory {
    load(): void {
        console.log("Пам'ять завантажена даними");
    }

    clear(): void {
        console.log("Пам'ять очищено");
    }
}

class HardDrive {
    read(): void {
        console.log('Зчитування даних з жорсткого диска');
    }

    write(): void {
        console.log('Запис даних на жорсткий диск');
    }
}

class Computer {
    private cpu: CPU;
    private memory: Memory;
    private hardDrive: HardDrive;

    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    start(): void {
        this.cpu.execute();
        this.memory.load();
        this.hardDrive.read();
        console.log("Комп'ютер увімкнено");
    }

    shutDown(): void {
        this.hardDrive.write();
        this.memory.clear();
        this.cpu.stop();
        console.log("Комп'ютер вимкнено");
    }
}

class ComputerFacade {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    startComputer(): void {
        this.computer.start();
    }

    shutDownComputer(): void {
        this.computer.shutDown();
    }
}

const computerFacade = new ComputerFacade();

computerFacade.startComputer();

computerFacade.shutDownComputer();
