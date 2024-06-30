/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
   

    const rom = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let num = 0;

    for (i=0; i < s.length; i++){
        const fir = rom[s[i]];
        const next = rom[s[i+1]];

        if (fir < next){
            num += next - fir
            i++
        } else {
            num += fir
        }
    }

    return num; 

};