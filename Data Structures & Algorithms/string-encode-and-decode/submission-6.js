class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let finalStr = "";
        const separator = " #+`";

        for (const str of strs) {
            finalStr += str + separator;
        }

        return finalStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let finalStrArr = [""];
        const separator = " #+`";
        let tempSepVal = "";
        let sepIdx = 0;
        const sepLength = 3;

        for (const char of str) {
            if (sepIdx > 0 && sepIdx < sepLength && char !== separator[sepIdx]) {
                finalStrArr[finalStrArr.length - 1] += separator.slice(0, sepIdx);
                sepIdx = 0;
            }
            if (char !== separator[sepIdx]) {
                finalStrArr[finalStrArr.length - 1] += char;
                continue;
            }
            if (char === separator[sepIdx] && sepIdx === sepLength) {
                sepIdx = 0;
                finalStrArr.push("");
                continue;
            }
            sepIdx++;
        }

        finalStrArr.pop();

        return finalStrArr;
    }
}
