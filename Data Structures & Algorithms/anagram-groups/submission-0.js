class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const values = {};

        for (let s of strs) {
            const sortedS = s.split("").sort().join("");
            if (!values[sortedS]) {
                values[sortedS] = [s];
            } else {
                values[sortedS].push(s);
            }
        }
        return Object.values(values);
    }
}
