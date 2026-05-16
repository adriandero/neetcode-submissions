class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const pairs = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        for (const br of s) {
            if (br in pairs) {
                let top = stack.pop();

                if (top !== pairs[br]) return false;
            } else {
                stack.push(br);
            }
        }

        return stack.length === 0;
    }
}

/**
 * ()[]
 * {()}{[]}[]
 * {(})
 *
 * if you have a open bracket, and try to find your closing bracket - in between should always be an even number of char
 *
 * so you could brute force it like that - go through the array, if there is a open bracket, go through the rest of the aray, to find your closing bracket and count if the number inbetween is even
 * wait, nevermind - i think this is a possible case where this would break: {((}
 *
 * open bracket -> closed bracket
 * is a bracket currently open, if yes -> you can only add a open bracket to it or, that corresponding closing bracket
 * so you can have a stack, that has the latest bracket and if the next pracket is a closing bracket check if it is the corresponding one - if not flase, if yes, pop the stack of the bracket you just checked
 * should be O(n)
 * -
 * -
 * -
 * -
 * -
 */
