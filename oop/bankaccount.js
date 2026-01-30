//BankAccount class
//properties
//- accountNumber
//- accountHolder
//- balance (is default to 0 if it isn't provided)

//methods
//- deposit(amount) - increase the balance by amount
//- withdraw(amount) - decrease the balance by amount

class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amt) {
        if (amt > 0) {
            this.balance += amt;
            console.log(`deposit of $${amt} successful. New balance: $${this.balance}`);
        } else {
            console.log('cant deposit non-positive amount');
        }
    }

    withdraw(amt) {
}