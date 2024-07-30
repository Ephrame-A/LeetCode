/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let result = true;
   for(let i=0; i<s.length-1; i++){
    if(s.charAt(i)==='b' && s.charAt(i+1)==='a'){
    result = false;
    break;
    }
    else result = true
   }
  return result 
};