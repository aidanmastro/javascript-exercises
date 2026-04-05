const sumAll = function(num1, num2) 
{
    let lowValue = 0;
    let highValue = 0;
    let sum = 0;

    if (!Number.isInteger(num1) || !Number.isInteger(num2))
    {
        return "ERROR";
    } 

    if (max < 0 || num2 < 0)
    {
        return "ERROR";
    }

    // Figure out which number is biggest
    if (num1 > num2) 
    {
        lowValue = num2;
        highValue = num1;
    }
    else 
    {
        lowValue = num1;
        highValue = num2;
    }

    for (let i = lowValue; i <= highValue; i++)
    {
        sum += i;
    }

    return sum;
};

sumAll(1, 4) 

// Do not edit below this line
module.exports = sumAll;
