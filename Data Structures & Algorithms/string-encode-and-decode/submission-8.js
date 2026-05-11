class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let finalStr = "";

        for (const str of strs) {
            finalStr += str.length + "#" + str;
        }

        return finalStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let finalStrArr = [];

        let tempWrdLgth = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] >= "0" && str[i] <= "9") tempWrdLgth += str[i];
            if (str[i] === "#") {
                finalStrArr.push(str.slice(i + 1, i + 1 + Number(tempWrdLgth)));
                i += Number(tempWrdLgth);
                tempWrdLgth = "";
            }
        }

        return finalStrArr;
    }
}
