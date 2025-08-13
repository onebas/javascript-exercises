const fibonacci = function(a) {
    if(a<0){
        return "OOPS";
    }
    let first = 0;
    let second = 1;
    for(let i = 0; i<a;i++){
        let temp = first;
        first = first+second;
        second = temp;
    }
    return first;

};

// Do not edit below this line
module.exports = fibonacci;
