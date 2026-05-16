class MinStack {
    constructor() {
        this.stack = [];
        this.smallest = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.smallest.length === 0 || val <= this.smallest[this.smallest.length - 1]) {
            this.smallest.push(val);
        }
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.smallest[this.smallest.length - 1] === this.stack[this.stack.length - 1]) {
            this.smallest = this.smallest.slice(0, -1);
        }
        this.stack = this.stack.slice(0, -1);
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.smallest[this.smallest.length - 1];
    }
}
