var moveZeroes = function(nums) {
    
    let tempArray = nums
    let zeroCount = 0;
    
    for(let i = tempArray.length; i >= 0; i--) {
        let currentNumber = tempArray[i]
        if(currentNumber === 0) {
            tempArray.splice(i,1)
            zeroCount++
        }
    }
    
    for(let i = 1; i <= zeroCount; i++) {
        tempArray.push(0)
    }
    
};