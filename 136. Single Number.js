var singleNumber = function(nums) {
    
    let compObj = {};
    let finalNumber
    
    for(const num of nums) {
        compObj[num] ? compObj[num]++ : compObj[num] = 1
    }
    
    for(num in compObj) {
        if(compObj[num] === 1) {
            finalNumber = parseInt(num)
        }
    }
    
    return finalNumber
    
};

singleNumber([4,1,2,1,2])