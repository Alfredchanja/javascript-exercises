const findTheOldest = function(objArr) {
    let oldest = objArr[0];
    let age = 0;
    for (let i = 0; i < objArr.length; i++) {
        let birthYear = objArr[i].yearOfBirth;
        let deathYear = objArr[i].yearOfDeath || new Date().getFullYear();

        age = deathYear - birthYear;
        objArr[i].age = age;

        if (objArr[i].age > oldest.age) {
            oldest = objArr[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
