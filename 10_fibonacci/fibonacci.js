const fibonacci = function(num) {
    let fib = 0;

    if (num < 0) {
        return "OOPS";
    } else if (typeof num === "string"){
        num = Number(num);
    }

    let a = 1, b = 1;
    for (let i = 0; i <= num; i++) {
        if (i === 0) {
            fib = 0;
        } else if (i === 1) {
            fib = 1;
        } else {
            fib = b;
            b = a + b;
            a = fib;
        }
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
