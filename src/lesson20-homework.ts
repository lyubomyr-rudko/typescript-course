abstract class AccountCommand {
  protected account:BankAccount;
  protected _amount:number;
  constructor(account:BankAccount,amount:number){
    this.account = account;
    this._amount = amount
  }
  get amount():number{
    return this.amount
  }
  get accountName():string{
    return this.account.name
  }
  abstract execute():void;
}

class Withdraw extends AccountCommand {
  constructor(account:BankAccount,amount:number){
    super(account, amount);
  }
  execute():void {
    this.account.balance -= this.amount;
  }
}

class Income extends AccountCommand {
  constructor(account:BankAccount,amount:number){
    super(account, amount);
  }
  execute() {
    this.account.balance += this.amount;
  }
}

class BankAccount { // Receiver or Target
  balance:number;
  name:string;
  constructor(name:string) {
    this.name = name;
    this.balance = 0;
  }
}

class Bank { // Invoker
  protected commands:AccountCommand[];
  constructor() {
    this.commands = [];
  }

  operation(account:BankAccount, amount:number) {
    const Command = amount < 0 ? Withdraw : Income;
    const command = new Command(account, Math.abs(amount));
    command.execute();
    this.commands.push(command);
  }

  showOperations() {
    const output = [];
    for (const command of this.commands) {
      output.push({
        operation: command.constructor.name,
        account: command.accountName,
        amount: command.amount
      });
    }
    console.table(output);
  }
}

const bank = new Bank();
const account1 = new BankAccount('Ben');
bank.operation(account1, 1000);
bank.operation(account1, -50);
const account2 = new BankAccount('Jon');
bank.operation(account2, 500);
bank.operation(account2, -100);
bank.operation(account2, 150);
bank.showOperations();
console.table([account1, account2]);