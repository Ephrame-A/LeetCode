var plusOne = function(digits) {
    let result;
    let myarr = [];
    result = BigInt(digits.join(''));
    result++;
    let resultStr = result.toString();
    for (let i = 0; i < resultStr.length; i++) {
        myarr.push(Number(resultStr[i]));
    }
    return myarr;
};
