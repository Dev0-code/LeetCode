/**
 * @param {number} x
 * @return {number} s
 */
var reverse = function(x) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    let neg = x < 0 ? -1 : 1;
    let s = Math.abs(x).toString().split("").reverse().join("")
    if (s > INT_MAX || s < INT_MIN) return 0;

    return x < 0 ? Number(s)*neg : Number(s)
};