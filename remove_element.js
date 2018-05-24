/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let numsLen = nums.length;
    let index = 0;

    for (let cur = 0; cur < numsLen; cur++) {
        if (nums[cur] == val) {
            continue;
        }

        nums[index] = nums[cur];
        index++;
    }

    return index;
};