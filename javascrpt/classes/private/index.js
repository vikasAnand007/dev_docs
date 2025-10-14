// Encapsulation - private fields/methods ---


class Account {
    // private field --
    #balance = 0
    constructor(name, initialAmt) {
        this.name = name;
        this.#balance = initialAmt
    }

    get getBalance() {
        return this.#balance
    }

    // private method ---
    #changeBalance(newBalance) {
        this.#balance = newBalance
    }

    deposite(amt) {
        if (amt <= 0) {
            console.log("Invalid amount.");
            return;
        }
        this.#changeBalance(this.#balance + amt);
        console.log(amt, " Credited.");
    }

    withdraw(amt) {
        if (amt > this.#balance) {
            console.log("Insufficient balance.");
            return;
        }
        this.#changeBalance(this.#balance - amt);
        console.log(amt, " Debited.");
    }

}

const account = new Account("Vikas", 100);
console.log(account) // { name: 'Vikas' }
console.log(account.getBalance)
account.deposite(100)
account.withdraw(40)
console.log(account.getBalance)

// try to access private fields/methods directly throws error---
// console.log(account.#balance)
// account.#changeBalance(200)

// On extending the class --------------------
class SbiAccount extends Account {
    constructor(name) {
        super(name, 0)
    }

    doImpsTransaction(amt) {
        // INVALID CODE ---- this will throw error, we cannot access private fields of parent class in child class
        // const curentBalance = super.#balance 

        // CORRECT CODE ----
        const curentBalance = super.getBalance()
        if (amt > curentBalance) {
            console.log("Insufficient balance.");
            return;
        }

        // INVALID CODE ---- this will throw error, we cannot access private method of parent class in child class
        // super.#changeBalance(curentBalance - amt); 

        // CORRECT CODE ----
        super.withdraw(amt)
    }
}