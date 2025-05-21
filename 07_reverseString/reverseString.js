const reverseString = function(string) {
    let reversedString = ''
    for(char = string.length - 1; char >= 0; char--){
        reversedString += string[char];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
