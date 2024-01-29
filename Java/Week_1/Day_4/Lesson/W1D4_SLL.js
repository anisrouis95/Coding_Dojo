class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head == null;
    }

    addToFront(someNode) {
        if (this.head === null) {
            this.head = someNode;
        } else {
            someNode.next = this.head;
            this.head = someNode;
        }
    }

    addDataToFront(data) {
        var newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    read() {
        var runner = this.head;
        while (runner != null) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    contains(value) {
        var runner = this.head;
        while (runner) {
            if (runner.data === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    removeFromFront() {
        if (this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        return removed.data;
    }

    insertToBack(data) {
        var newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            var runner = this.head;
            while (runner.next !== null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }

    removeFromBack() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.next === null) {
            this.head = null;
            return this;
        }
        var runner = this.head;
        while (runner.next.next !== null) {
            runner = runner.next;
        }
        runner.next = null;
        return this;
    }

    printNthToLast(n) {
        if (n <= 0 || this.head === null) {
            console.log("Invalid value of N or empty list.");
            return;
        }

        var firstPointer = this.head;
        var secondPointer = this.head;

        // Move secondPointer n nodes ahead
        for (let i = 0; i < n; i++) {
            if (secondPointer === null) {
                console.log("List is not long enough.");
                return;
            }
            secondPointer = secondPointer.next;
        }

        // Move both pointers until secondPointer reaches the end
        while (secondPointer !== null) {
            firstPointer = firstPointer.next;
            secondPointer = secondPointer.next;
        }

        console.log(`Nth to the last node data: ${firstPointer.data}`);
    }
}

// Example usage:
var myCoolList = new SLL();
myCoolList.addDataToFront(33);
myCoolList.addDataToFront(11);
myCoolList.addDataToFront(100);
myCoolList.insertToBack(55);
myCoolList.insertToBack(77);

console.log(myCoolList);
myCoolList.read();

// Print data of node Nth to the last
myCoolList.printNthToLast(2);
