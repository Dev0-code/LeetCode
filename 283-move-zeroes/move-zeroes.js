/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pos = 0;    // where the next non-zero should go

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // swap nums[i] with nums[pos]
            let temp = nums[pos];
            nums[pos] = nums[i];
            nums[i] = temp;
            pos++;
        }
    }

};