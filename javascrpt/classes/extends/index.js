// Class inheritance, super, method overriding example -----

// BASE class ---
class Creature {
    constructor(lCount, hCount) {
        this.legs = lCount;
        this.hands = hCount
    }

    getDetail() {
        return `hands:${this.hands} , legs:${this.legs}`
    }
    get limbs() {
        return this.legs + this.hands
    }
    set setHands(num) {
        this.hands = num
    }
    set setLegs(num) {
        this.legs = num
    }
}

// EXTENDED/INHERITED class ---

class Human extends Creature {
  constructor(gender, age) {
    // calling parent constructor
    super(2, 2)
    this.gender = gender;
    this.age = age;
  }

  // Method override
  // accessing parent class method using super.
  getDetail() {
    return `${super.getDetail()}, gender:${this.gender}, age:${this.age}`
  }
}
class Man extends Human {
  constructor(name, age) {
    super("male", age);
    this.name = name
  }

  // Method override
  getDetails() {
    return {
      status: true,
      comment: `${super.getDetail()}, name:${this.name}`,
      data: this
    }
  }
}

const man = new Man("Vikas", 12)
console.log(man.getDetails())

