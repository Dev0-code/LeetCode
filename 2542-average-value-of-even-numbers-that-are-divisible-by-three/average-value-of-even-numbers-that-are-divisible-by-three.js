/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let e = nums.filter(n=>n%2==0 && n%3==0)
    if(e.length === 0) return 0
    s=e.reduce((a,b)=>a+b,0)
    return Math.floor(s/e.length)
};