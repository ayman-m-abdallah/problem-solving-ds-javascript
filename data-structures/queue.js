class Queue {
    constructor() {
        this.elements = []
    }

    enqueue(element) {
        if (this.isFull()) {
            throw new Error(`Queue overflow: maximum size of ${this.getMaxSize()} exceeded`)
        }
        this.elements.push(element)
    }

    dequeue() {
        const element = this.elements.shift()
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

module.exports.Queue = Queue
