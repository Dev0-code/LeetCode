/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n<=0) return false
    for(let i=0;Math.pow(3,i)<=n;i++){
        if(n === Math.pow(3,i)){
            return true
        }
    }
    return false
};