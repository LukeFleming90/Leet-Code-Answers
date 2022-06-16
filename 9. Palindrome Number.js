var isPalindrome = function(x) {

    if(x < 0) {
        return false
    }

    let str = x.toString()

    let reverseNum = str.split("").reverse().join('')

    let finalNum = Number(reverseNum)

    return x === finalNum
    
};


console.log(isPalindrome(121))