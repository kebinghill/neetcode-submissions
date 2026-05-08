class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const nonChar = [" ", "?", "!", "#", "&", "@", "'", ",", ".", ":"];
        let newStr = '';
        for (let c of s) {
            if (!nonChar.includes(c)) {
                newStr += c.toLowerCase();
            }
        }
        return newStr === newStr.split('').reverse().join('');
    }
}
