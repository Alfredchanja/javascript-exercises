const removeFromArray = function(arr, value, ...arg){
    // Combines values and multiple optional arguments into one list.
    const valuesToRemove = [value, ...arg];

    // Loops through the list of the values to be removed.
    for (let i = 0; i < valuesToRemove.length; i++){
        let val = valuesToRemove[i];
        let index = arr.indexOf(val);

        // Removes all occurrences of the value in 'arr.' 
        while (index > -1){
            arr.splice(index, 1);
            index = arr.indexOf(val);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
