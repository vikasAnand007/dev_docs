// Class getter/setter example -----

class Creature {
    constructor(lCount, hCount) {
        this.legs = lCount;
        this.hands = hCount
    }

    // simple method
    getDetail() {
        return `Creature has ${this.hands} hands and ${this.legs} legs.`
    }

    // getter
    get limbs() {
        return this.legs + this.hands
    }
    // setter
    set setHands(num) {
        this.hands = num
    }
    set setLegs(num) {
        this.legs = num
    }
}

// USAGE ---
const creature = new Creature(4, 0)
console.log(creature.getDetail())
console.log(creature.limbs)

creature.setHands = 2
creature.setLegs = 4

console.log(creature.limbs)