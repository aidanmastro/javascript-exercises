const palindromes = function (str) {

    let reversed = "";

    for (let i = 0; i < str.length; i++){
        
        reversed += str[str.length - 1 - i];
    }

    return str === reversed;
};



// Do not edit below this line
module.exports = palindromes;
