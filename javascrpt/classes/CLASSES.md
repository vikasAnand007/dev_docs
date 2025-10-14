# Class

- Classes are like template for creating Object.
- Classes can be named or anonymous, similar to function expressions.

        class  Class1 { }
        const  Class2  =  class { }


- Classes are NOT hoisted like function declarations, We cannot access class before declare.

### Methods
functions defined in class, it is automatically added to prototype object whenever we create any instance.
### Constructor
this is a method, which runs automatically whenever we create an instance of Class.

        class Class3 {
          constructor() {
            // code inside this will run automatically.
          }
        }

### Getters and Setters
these are methods, which can be used to access/modify the object without invoking the method. [(see example)](https://github.com/vikasAnand007/dev_docs/blob/master/javascrpt/classes/getter-setter/index.js)
### Inheritence (extends)
It allows a class to use properties and methods from parent class. [(see example)](https://github.com/vikasAnand007/dev_docs/blob/master/javascrpt/classes/extends/index.js)

**Super** : It has two purposes [(see example)](https://github.com/vikasAnand007/dev_docs/blob/master/javascrpt/classes/extends/index.js)
1. Call constructor of parent class
2. Access properties and methods of parent class

**Method override**: We can also override parent class methods in extended/inherited class. [(see example)](https://github.com/vikasAnand007/dev_docs/blob/master/javascrpt/classes/extends/index.js)

### Encapsulation (Private fields/methods)
In JavaScript classes, fields and methods are public by default. That means any code outside the class can access or modify them.

To overcome this issue private fields (**# syntex**) are defined.

Any field/method defined with private(#) can be accessed/modified only within the class definition.
 [(see example)](https://github.com/vikasAnand007/dev_docs/blob/master/javascrpt/classes/private/index.js)

- Private fields/methods and not passed to sub class when extended.
- Private fields/methods are not reflected in `Object.Keys()`

### Static fields/methods
Static fields/methods are attached to class itself, NOT to individual instance of class.

`Date.now()` ✅
`const d = Date.now(); d.now()` ❌

 [(see example)](https://github.com/vikasAnand007/dev_docs/blob/master/javascrpt/classes/static/index.js)











