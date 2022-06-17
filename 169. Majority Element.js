var majorityElement = function(nums) {
    
    let compObj = {};
    let maxNumCount = 0
    let maxNum
    
    for(const num of nums) {
        compObj[num] ? compObj[num]++ : compObj[num] = 1
    }
    
    for(num in compObj) {
        if(compObj[num] > maxNumCount) {
            maxNumCount = compObj[num]
            maxNum = parseInt(num)
        }
    }
    
    return maxNum
    
};