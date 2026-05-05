class Solution {

    invertBracket(bracket) {
        if(bracket === "(") return ")";
        if(bracket === "{") return "}";
        if(bracket === "[") return "]";
        return;
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const arr = []
        const openBracketSet = new Set();
        openBracketSet.add("(");
        openBracketSet.add("{");
        openBracketSet.add("[");

        for(let i = 0; i < s.length; i++) {
            if(openBracketSet.has(s[i])) {
                arr.push(s[i]);
                continue;
            }

            if(this.invertBracket(arr[arr.length-1]) !== s[i]) {
                return false;
            }
            arr.pop();
        }


        if( arr.length === 0) return true;

        return false;

    }
}
