
function HW_20() {
  interface Command {
    execute(): void;
  }

  class Customer {
    private command: Command;

    constructor(command: Command) {
      this.command = command;
    }

    execute(): void {
      this.command.execute();
    }
  }

  class Account {
    public amount: number;

    constructor() {
      this.amount = 0;
    }

    increase(cost: number): void {
      this.amount += cost;
    }

    decrease(cost: number): void {
      this.amount -= cost;
    }
  }

  class IncreaseCommand implements Command {
    private account: Account;
    private cost: number;

    constructor(account: Account, cost: number) {
      this.account = account;
      this.cost = cost;
    }

    execute(): void {
      this.account.increase(this.cost);
    }
  }

  class DecreaseCommand implements Command {
    private account: Account;
    private cost: number;

    constructor(account: Account, cost: number) {
      this.account = account;
      this.cost = cost;
    }

    execute(): void {
      this.account.decrease(this.cost);
    }
  }

  const account = new Account();
  const increaseCommand = new IncreaseCommand(account, 10);
  const decreaseCommand = new DecreaseCommand(account, 5);

  const customer = new Customer(increaseCommand);
  customer.execute();

  const customer2 = new Customer(decreaseCommand);
  customer2.execute();

  console.log(account.amount);
}

HW_20();