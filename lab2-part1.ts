class CheckingsAccount {

    private initialBalance:number;
    private ownerName:string;

    constructor(balance:number, name:string) {
        this.initialBalance = balance;
        this.ownerName = name;
    }

    deposit(amount:number) {
        this.initialBalance += amount;
    }

    withdraw(amount:number) {
        this.initialBalance = this.initialBalance - amount;
    }

    checkBalance() {
        console.log(this.initialBalance + " " + this.ownerName)
    }
}

let account:CheckingsAccount = new CheckingsAccount(100, "Bob");
account.deposit(100);
account.checkBalance;