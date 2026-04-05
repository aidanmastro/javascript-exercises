const reverseString = function(text) {

    const reversedArray = [];

    for(let i = text.length - 1; i >= 0; i--) {

        reversedArray.push(text.charAt(i));
    }

    let reversedString = reversedArray.join('');

    return reversedString;
};

reverseString("peak");

// Do not edit below this line
module.exports = reverseString;
