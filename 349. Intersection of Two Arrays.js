var intersection = function(nums1, nums2) {
    
    let numsOneObj = {};
    let numsTwoObj = {};
    let finalArray = [];
    
    for(const num of nums1) {
        numsOneObj[num] ? numsOneObj[num]++ : numsOneObj[num] = 1
    }
    
    for(const num of nums2) {
        numsTwoObj[num] ? numsTwoObj[num]++ : numsTwoObj[num] = 1
    }
    
    for(const num in numsOneObj) {
        let currentNumber = parseInt(num)
        if(numsTwoObj[num] && numsTwoObj[num] >= 1) {
            finalArray.push(currentNumber)
        }
    }
    
    return finalArray;
    
};