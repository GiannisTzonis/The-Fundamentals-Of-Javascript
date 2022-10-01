/*

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false

*/

function XO(str) {
    var x = [];
    var o = [];
    for (var i = 0; i < str.length; i++) { 
        if (str[i].toLowerCase() === 'x') {
          x.push(str[i]);
        } else if (str[i].toLowerCase() === 'o') {
            o.push(str[i]);
        }
    }
    if (x.length == o.length) {
        return true;
    } else {
        return false;
    }
}
