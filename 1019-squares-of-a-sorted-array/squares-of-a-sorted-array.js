/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let s = []
    for(let i=0;i<nums.length;i++){
        let x = 1;
        x=nums[i]*nums[i];
        s.push(x)
    }
    return s.sort((a,b) => a - b)
};