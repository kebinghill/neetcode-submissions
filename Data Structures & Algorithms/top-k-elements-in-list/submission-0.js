class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
     const count = {};
     for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
     }

     const arr = Object.entries(count).map(([num, freq]) => [
        freq,
        parseInt(num),
     ]).sort((a, b) => b[0] - a[0]);

     const values = arr.splice(0, k).map(([freq, num]) => num);

     return values;
     

    }
}
