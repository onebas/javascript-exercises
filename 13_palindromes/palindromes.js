const palindromes = function (a) {
    a = a.toLowerCase().split("").filter((val)=>val.match(/[0-9a-z]/));
    let b = a.join()
    let c = a.reverse().join();


    return b === c;
};

// Do not edit below this line
module.exports = palindromes;
