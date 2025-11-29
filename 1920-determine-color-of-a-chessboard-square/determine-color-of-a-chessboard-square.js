/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let s = coordinates.split("")
    let x = 0
    if(s[0] == "a") x = 1
    else if(s[0] == "b") x = 2
    else if(s[0] == "c") x = 3
    else if(s[0] == "d") x = 4
    else if(s[0] == "e") x = 5
    else if(s[0] == "f") x = 6
    else if(s[0] == "g") x = 7
    else x = 8

    return (x + Number(s[1])) % 2 !== 0
};