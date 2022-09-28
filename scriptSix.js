/* 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
*/

function highAndLow(numbers){
    var temp = numbers.split(' ');
    temp.sort(function(a,b){return a-b; });
    return  temp[temp.length-1] + ' ' + temp[0];
  }