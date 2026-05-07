class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let keyMap = new Map();
        let finalArray = [];

        for (const str of strs) {
            let keyArray = new Array(26).fill(0);

            for (const char of str) {
                keyArray[char.charCodeAt(0) - 97]++;
            }

            const key = keyArray.join("#");

            if (!keyMap.has(key)) {
                keyMap.set(key, keyMap.size);
                finalArray.push([]);
            }

            finalArray[keyMap.get(key)].push(str);
        }

        return finalArray;
    }
}
