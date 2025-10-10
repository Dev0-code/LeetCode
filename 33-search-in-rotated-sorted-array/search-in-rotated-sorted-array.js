/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for(let val in nums){
        if(nums[val] == target){
            return Math.floor(val)
        }
    }
    return Math.floor(-1)
};