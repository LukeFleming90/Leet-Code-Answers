var plusOne = function(digits) {
    
    let joinedNumber = BigInt(digits.join(''))
    let plusOne = joinedNumber + 1n
    let stringNum = plusOne.toString()
    let finalArray = []
    for(let i = 0; i < stringNum.length; i++) {
        let currNum = parseInt(stringNum[i])
        finalArray.push(currNum)
    }
    
    return finalArray
    
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))