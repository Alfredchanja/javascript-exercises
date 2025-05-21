const leapYears = function(year) {
    // Not all years that are divisible by 4 are divisible by 400.
    // If the year is either divisible by 4 or 400 it is a leap year.
    // Not all years that are divisible by 100 are leap years.
    if (year % 4 !== 0 || year % 400 !== 0 && year % 100 === 0) {
        return false;
    } else {
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
