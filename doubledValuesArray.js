/*

Given an array of integers, return a new array with each value doubled.

*/

function maps(x) {
  let double = [];
  for (let i = 0; i < x.length; i++) {
    double.push(x[i] * 2);
  }
  return double;
}
