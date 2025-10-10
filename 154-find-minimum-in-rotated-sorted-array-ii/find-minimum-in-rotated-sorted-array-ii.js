/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let x = nums.sort((a,b)=>a-b)
    return Math.floor(x[0])
};