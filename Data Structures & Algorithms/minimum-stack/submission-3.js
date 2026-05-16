class MinStack {
    constructor() {
        this.stack = [];
        this.smallest = [];

        this.stackLength = 0;
        this.smallestLength = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        console.log(val)
        if (this.smallestLength === 0 || val <= this.smallest[this.smallestLength - 1]) {
            this.smallest[this.smallestLength] = val;
        console.log(val)
            
            this.smallestLength++;
        }
        this.stack[this.stackLength] = val;
        this.stackLength++;
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.smallest[this.smallestLength - 1] === this.stack[this.stackLength - 1]) {
            this.smallestLength--;
        }
        this.stackLength--;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stackLength - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.smallest[this.smallestLength - 1];
    }
}
