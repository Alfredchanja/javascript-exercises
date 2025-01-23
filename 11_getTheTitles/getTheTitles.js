const getTheTitles = function(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].title;
    }
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
