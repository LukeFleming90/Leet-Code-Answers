var twoSum = function(nums, target) {
    
    let compareObj = {};
    
    for(let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i]
        compareObj[currentNumber] = i
    }
    
    for(let i = 0; i < nums.length; i++) {
        let diffNum = target - nums[i]
        if(compareObj[diffNum] && compareObj[diffNum] !== i) {
            return [compareObj[diffNum],i]
        }
    }
    
    return [0,0]
};

// Expected Result [0,1]

console.log(twoSum([2,7,11,15],9))

// Expected Result [1,2]

console.log(twoSum([3,2,4],6))

// Expected Result [0,1]

console.log(twoSum([3,3],6))