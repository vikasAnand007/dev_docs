// Static fields/methods

class Circle {
    // static field ---
    static pi = 3.141592653589793;
    constructor(radius) {
        this.radius = radius;
    }

    // static method ---
    static area(radius) {
        return this.pi * radius * radius;
    }

    // general method ---
    getArea() {
        console.log(this.pi) // undefined (because when instance is created, value of pi is not attached to instance prototype)
        console.log(Circle.pi) // 3.141592653589793

        return Circle.pi * this.radius * this.radius;
    }
}

// Usage ---
console.log(Circle.pi)
console.log(Circle.area(2))

const myCircle = new Circle(2)

// INVALID code ----
// console.log(myCircle.pi)
// console.log(myCircle.area(3))

// CORRECT code ----
console.log(myCircle.getArea())