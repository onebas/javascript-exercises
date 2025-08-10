const leapYears = function(year) {
    leap=true;
    if(year%4==0){
        if(year%100==0){
            if(!(year%400==0)){
                leap=false;
            }
        }
    }
    else{
        leap=false;
    }
    return leap;
};

// Do not edit below this line
module.exports = leapYears;
