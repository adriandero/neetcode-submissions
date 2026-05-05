class Solution {

    calculate(tokens, stack) {

    }

    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for(let i = 0; i < tokens.length; i++) {

                if(tokens[i] === "+") {
                    const b = stack.pop();
                    const a = stack.pop();

                    stack.push(a + b);
                }
                else if(tokens[i] === "-") {
                    const b = stack.pop();
                    const a = stack.pop();


                    stack.push(a - b);
                }
                else if(tokens[i] === "*") {
                    const b = stack.pop();
                    const a = stack.pop();                    

                    stack.push(a * b);
                }
                else if(tokens[i] === "/") {
                    const b = stack.pop();
                    const a = stack.pop();                    

                    stack.push(Math.trunc(a / b));
                }
                else {
                    stack.push(parseInt(tokens[i]))
                }

                console.log(stack)
        }
        return stack.pop();
    }
}
