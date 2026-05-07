class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const values = [];
        for (let i = 0; i < nums.length; i++) {
            values.push([nums[i], i]);
        }
        values.sort((a, b) => a[0] - b[0]);
        
        let i = 0;
        let j = values.length - 1;

        while (i < j) {
            let val1 = values[i][0];
            let val2 = values[j][0];
            let currTotal = val1 + val2;
            if (currTotal === target) {
                return [values[i][1], values[j][1]];
            } else if (currTotal < target) {
                i++;
            } else {
                j--;
            }
        }
    }
}
