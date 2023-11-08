interface Command {
  execute(currentValue: number): number;
  undo(currentValue: number): number;
}

class Calculator {
  value: number;
  history: Command[];
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command: Command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.value = command!.undo(this.value);
  }
}

class AddCommand implements Command {
  constructor(public numberToAdd: number) {}

  execute(currentValue: number): number {
    return currentValue + this.numberToAdd;
  }
  undo(currentValue: number): number {
    return currentValue - this.numberToAdd;
  }
}
class DivideCommand implements Command {
  constructor(public numberToDivide: number) {}

  execute(currentValue: number): number {
    return currentValue / this.numberToDivide;
  }
  undo(currentValue: number): number {
    return currentValue * this.numberToDivide;
  }
}
class MultiplyCommand implements Command {
  constructor(public numberToDivide: number) {}

  execute(currentValue: number): number {
    return currentValue * this.numberToDivide;
  }
  undo(currentValue: number): number {
    return currentValue / this.numberToDivide;
  }
}

class AddThenDivideThenMultiplyCommand implements Command {
  addCommand: Command;
  divideCommand: Command;
  multiplyCommand: Command;
  constructor(valueToAdd: number, valueToDivide: number, valueToMultiply: number) {
    this.addCommand = new AddCommand(valueToAdd);
    this.divideCommand = new DivideCommand(valueToDivide);
    this.multiplyCommand = new MultiplyCommand(valueToMultiply);
  }

  execute(currentValue: number): number {
    const newValue = this.addCommand.execute(currentValue);
    const newValue2 = this.divideCommand.execute(newValue);
    const finalResult = this.multiplyCommand.execute(newValue2);
    return finalResult;
  }
  undo(currentValue: number): number {
    const newValue = this.multiplyCommand.undo(currentValue);
    const newValue2 = this.divideCommand.undo(newValue);
    const startingValue = this.addCommand.undo(newValue2);
    return startingValue;
  }
}

const calc = new Calculator();
calc.executeCommand(new AddThenDivideThenMultiplyCommand(10, 2, 5));
console.log(calc.value, "after Calculation");
calc.undo();
console.log(calc.value, "after Undo");
