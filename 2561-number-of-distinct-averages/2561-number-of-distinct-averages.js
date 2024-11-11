/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    let arr = [...nums.sort((a,b)=>a-b)]
    let aveArr = []
    while(arr.length > 0){
        let min = arr[0], max = arr[arr.length-1];
        let res = (min+max)/2;
       
        if(!aveArr.includes(res)){
            aveArr.push(res)}
        arr.pop();
        arr.shift();
       
    }
return (aveArr.length);
};