class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.length = 0;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (val < current.val)
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    search(val) {
        if (!this.root) return false;
        else {
            let current = this.root,
                found = false;
            while (current && !found) {
                if (val < current.val) {
                    current = current.left;
                } else if (val > current.val) {
                    current = current.right;
                } else {
                    found = true;
                }
            }
            if (!found) return undefined;
            return current;
        }
    }
}

let tree = new BST();
console.log(tree.insert(5));
console.log(tree.insert(3));
console.log(tree.insert(8));
console.log(tree.insert(10));
console.log(tree.search(5));
