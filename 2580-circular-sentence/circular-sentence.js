/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
  
   let result = []
    for(let i=0; i<sentence.length; i++){
        if(sentence[i]===' '){
          result.push((sentence[i-1]===sentence[i+1]));
           
        }
    result.push(sentence[0]===sentence[sentence.length-1]);
           
        }
        return !result.includes(false)
    }
