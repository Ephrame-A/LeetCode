/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let res = "";
    for(i=0; i<s.length; i++){
        let num = s.charCodeAt(i);
num> 64 && num < 91 ? res+=String.fromCharCode(num + 32) : res+=String.fromCharCode(num);
    }
    return res;
};