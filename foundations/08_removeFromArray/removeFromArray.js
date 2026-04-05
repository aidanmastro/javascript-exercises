const removeFromArray = function(array, ...valuesToRemove) {
    
    return array.filter(val => !valuesToRemove.includes(val));
};

removeFromArray([1,2,3,4], 2, 3); // returns [1,4]

// Do not edit below this line
module.exports = removeFromArray;
