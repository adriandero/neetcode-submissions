class Solution {
    isSameAnagram(maps1, maps2) {
        // if (str1 === str2) return true;
        // if (str1.length !== str2.length) return false;

        // const maps1 = new Map();
        // const maps2 = new Map();

        // for (const char of str1) {
        //     maps1.set(char, (maps1.get(char) || 0) + 1);
        //     maps2.set(char, (maps2.get(char) || 0) + 1);
        // }
        if (maps1.size !== maps2.size) return false;

        for (const [key, val] of maps1) {
            if (maps2.get(key) !== val) return false;
        }

        return true;
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mapArray = [];
        let final = [];

        for (const string of strs) {
            const map = new Map();
            let nw = true;

            for (const char of string) {
                map.set(char, (map.get(char) || 0) + 1);
            }
            for (let i = 0; i < mapArray.length; i++) {
                if (this.isSameAnagram(mapArray[i], map)) {
                    final[i].push(string);
                    nw = false;
                }
            }

            if (nw) {
                mapArray.push(map);
                final.push([string]);
            }
        }

        return final;
    }
}
