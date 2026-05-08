class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let maxProfit = 0;

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                let curProf = prices[r] - prices[l];
                maxProfit = Math.max(curProf, maxProfit);
            } else if (prices[l] > prices[r]) {
                l = r;
            }
            r++
        }
        return maxProfit;
    }
}
