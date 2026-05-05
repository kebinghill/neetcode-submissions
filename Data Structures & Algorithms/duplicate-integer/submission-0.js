class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let checked = [];
        for (let i = 0; i < nums.length; i++) {
            if (checked.length === 0) {
                checked.push(nums[i])
            } else if (checked.includes(nums[i])) {
                return true;
            }
            checked.push(nums[i])
        }
        return false;
    }
}
