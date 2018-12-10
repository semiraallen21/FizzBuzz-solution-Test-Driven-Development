'use strict';

module.exports = {
    of
};


function of(number) {
    var result = "";

    if (number == 0 ){
        return 0
    }

    if (number % 3 === 0) {
        result += "Fizz";
    }
    if (number % 5 === 0) {
        result += "Buzz";
    }
    if (result == "") {
        return number;
    }
    return result;


}