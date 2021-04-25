class Stack {
    constructor() {
        this.elements = []
    }

    push(element) {
        if (this.isFull()) {
            throw new Error(`Stack overflow: maximum size of ${this.getMaxSize()} exceeded`)
        }
        this.elements.push(element)
    }

    pop() {
        const element = this.elements.pop()
        if (!element) return null
        return element
    }

    getElements() {
        return this.elements
    }

    getMaxSize() {
        return 100
    }

    getSize() {
        return this.elements.length
    }

    isFull() {
        return this.getSize() === this.getMaxSize()
    }
}

module.exports.Stack = Stack
