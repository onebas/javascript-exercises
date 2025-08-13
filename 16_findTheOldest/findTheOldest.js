const findTheOldest = function(a) {
    a.sort((a, b)=>{
            const now = new Date();
            if(!(Object.keys(a).includes("yearOfDeath"))){
                a.yearOfDeath = now.getFullYear();
            }
            else if(!(Object.keys(b).includes("yearOfDeath"))){
                b.yearOfDeath = now.getFullYear();           
            }
            return (b.yearOfDeath-b.yearOfBirth)-(a.yearOfDeath-a.yearOfBirth);
        }
    )
    return a[0];
};

// Do not edit below this line
module.exports = findTheOldest;
