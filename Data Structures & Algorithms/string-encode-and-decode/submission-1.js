class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let finalString = "";
        for(const s of strs) {
            finalString = finalString + s + "%#";
        }
        return finalString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const finalStrArr = []
        let strToAdd = "";
        for(let i = 0; i-2 < str.length; i++) {
            if(str[i] === "%" && str[i+1] === "#") {
                finalStrArr.push(strToAdd);
                strToAdd = "";
                i++
            } else {
                strToAdd = strToAdd + str[i]
            }
        }
        return finalStrArr;
    }
}
