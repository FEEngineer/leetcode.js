/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums === null || nums.length === null || nums.length === 0) {
        return 0;
    }

    let idx = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[idx] = nums[i];
            idx++;
        }
    }

    return idx;
};