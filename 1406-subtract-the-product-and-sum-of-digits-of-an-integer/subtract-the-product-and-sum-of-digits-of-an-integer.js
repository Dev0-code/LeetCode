/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let x = String(n).split("")
    let p = 1
    for(let val of x){
        p*=Number(val)
    }
    let s = 0
    for(let val of x){
        s+=Number(val)
    }
    return Math.floor(p-s)
};