/*

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"

*/

function doubleChar(str) {
    return [...str].map(s => s.repeat(2)).join('')
}
