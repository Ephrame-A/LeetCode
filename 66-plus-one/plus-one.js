var plusOne = function(digits) {
    
    let myarr = [];
    let result = BigInt(digits.join(''));
    result++;
    let Str = result.toString();
    for (let i = 0; i < Str.length; i++) {
        myarr.push(Number(Str[i]));
    }
    return myarr;
};
