const leapYears = function(year) {

    let isLeapYear = false;

    if (year % 4 === 0) 
    {
        if (year % 100 === 0) 
        {
            if (year % 400 === 0) 
            {
                isLeapYear = true; // divisible by 400 > leap year
            }
        } 
        else 
        {
            isLeapYear = true; // divisible by 4, not by 100 > leap year
        }
    }

    return isLeapYear;
};
leapYears(2000); // is a leap year: returns true
leapYears(1985); // is not a leap year: returns false

// Do not edit below this line
module.exports = leapYears;
