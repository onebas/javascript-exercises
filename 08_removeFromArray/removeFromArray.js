const removeFromArray = function(arr, ...args) {
    let tempArr = [];
    for(let num of arr){
        if(!(args.includes(num))){
            tempArr.push(num);
        }
    }
    return tempArr;
};

// Do not edit below this line
module.exports = removeFromArray;
