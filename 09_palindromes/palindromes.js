const palindromes = function (char) {
    char = char.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (let i = 0; i < char.length - 1; i++) {
        if (char[i] !== char[char.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
