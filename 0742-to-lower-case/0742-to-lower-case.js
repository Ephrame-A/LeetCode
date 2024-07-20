/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let res = "";
    for(i=0; i<s.length; i++){
        let num = s.charCodeAt(i);
if(num> 64 && num < 91) res+=String.fromCharCode(num + 32);
else {
    res = s.toLowerCase();
    break;
}
    }
    return res;
};