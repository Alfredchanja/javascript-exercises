const sumAll = function(num1, num2) {
    let sumOfAll = 0;

    if (num1 < 1 || num2 < 1 || num1 !== Math.floor(num1) || num2 !== Math.floor(num2)){
        return 'ERROR';
    }else if(typeof num1 !== "number" || typeof num2 !== "number" ||
        !Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR';
    } else if (num1 > num2) {
        for(let i = num1; i >= num2 ; i--){
            sumOfAll += i
        }
    }else {
        for( let i = num1; i < num2 + 1; i++){
            sumOfAll += i;
        }
    }

    return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;
