/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let x =s.trim().split(" ")
    return Math.floor(x[x.length-1].length)
}