class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    display() {
        if (!this.head) return undefined;
        else {
            let current = this.head;
            while (current) {
                console.log(current.val);
                current = current.next;
            }
        }
        return console.log(`Length: ${this.length}`);
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    }

    pop() {
        if (!this.head) return undefined;
        else {
            let current = this.head,
                newTail = current;
            while (current.next) {
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
        }
    }
}

let sll = new SLL();
sll.push(4);
sll.push(1);
sll.push(16);
sll.display();
