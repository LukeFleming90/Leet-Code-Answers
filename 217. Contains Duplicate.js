var containsDuplicate = function(nums) {
    
    let compareObj = {};
    
    for(const num of nums) {
        compareObj[num] ? compareObj[num]++ : compareObj[num] = 1
    }
    
    for(const num in compareObj) {
        if(compareObj[num] > 1) {
            return true
        }
    }
    
    return false
    
};