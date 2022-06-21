var missingNumber = function(nums) {
    
    let compObject = {};
    let maxNum = nums.length
    let missingNumber
    
    for(const num of nums) {
        compObject[num] ? compObject[num]++ : compObject[num] = 1
    }
    
    for(let i = 0; i <= nums.length; i++) {
        if(!compObject[i]) {
            missingNumber = i
        }
    }
    
    return missingNumber
    
};