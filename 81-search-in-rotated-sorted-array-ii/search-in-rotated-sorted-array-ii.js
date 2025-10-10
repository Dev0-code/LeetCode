/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    for(let val in nums){
        if(nums[val] == target){
            return true
        }
    }
    return false
};