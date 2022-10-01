/*

Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134

*/

var min = function(list){
    list.sort(function(a, b){return a-b});
    return list[0];
}

var max = function(list){
    list.sort(function(a, b){return b-a});
    return list[0];
}
