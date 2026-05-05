class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const map = new Map();

    for (const s of strs) {
        const count = Array(26).fill(0);
        for (const c of s) {
            let cCode = c.charCodeAt(0);
            let beginCode = "a".charCodeAt(0);
            count[cCode - beginCode] = count[cCode - beginCode] + 1;
        }

        const key = count.join("#");
        if (!map.get(key)) {
            map.set(key, []);
        }

        let mapVal = map.get(key);
        mapVal.push(s)
        map.set(key, mapVal);
    }
    return Array.from(map.values());
}
}
