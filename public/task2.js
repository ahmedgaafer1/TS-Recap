"use strict";
function recievearr(arr) {
    let sum = 0;
    let concat = "";
    let numbers = [];
    let strings = [];
    arr.forEach((i) => {
        if (typeof i === "number") {
            sum += i;
            numbers.push(i);
        }
        else if (typeof i === "string") {
            concat += i;
            strings.push(i);
        }
    }); //end of foreach
    if (numbers.length === arr.length) {
        return sum;
    }
    if (strings.length === arr.length) {
        return concat;
    }
    return numbers.sort((a, b) => a - b);
}
// for checking
console.log(recievearr([1, 2, 3, 4]));
// kan momkn nst5dem filter and reduce and sort
