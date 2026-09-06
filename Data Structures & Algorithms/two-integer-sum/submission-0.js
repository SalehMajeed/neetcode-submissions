class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const cache = new Map();
        for (const index in nums) {
            const val = nums[index];
            const cal = target - val;
            if (cache.has(cal)) {
                return [cache.get(cal), +index];
            }
            cache.set(val, +index);
        }
        return [];
    }
}
