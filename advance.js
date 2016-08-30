//Classes  node4,5 strict mode.  node 6

class Task {
    constructor(name) {
        this.name = name;
    }

    toString() {
        if (this.name === "ajay") {
            console.log(`Hey this is ${this.name}!! and i am in If condition`)
        } else {
            console.log(`Hey this is ${this.name}`)
        }

    }
}

var t1 = new Task("ajay");
var t2 = new Task("pawan");
t1.toString();
t2.toString();


//Extend and super   node4,5 strict mode.  node 6 inheritence and polymorphism

class Urgent extends Task {
    constructor(name) {
        super("!" + name + "!");
    }
    toString() {
        if (this.name === "!ajay!") {
            return "Urgent Task" + super.toString();
        }
    }
}

var urgentTask =  new Urgent("ajay");
urgentTask.toString();
