var removeElement = function(nums, val) {
    
    let tempArray = nums
    
    for(let i = tempArray.length - 1; i >= 0; i--) {
        if(tempArray[i] === val) {
            nums.splice(i,1)
        }
    }
        
    return nums.length
    
};

console.log(removeElement([3,2,2,3],3))

console.log(removeElement([0,1,2,2,3,0,4,2],2))