var isPalindrome = function(s) {
    
    let newWord = ''
    
    for(let i = 0; i < s.length; i++) {
        if(/^[A-Za-z0-9]*$/.test(s[i])) {
            let char = s[i].toLowerCase()
            newWord += char
        }
    }
    
    let reverseWord = newWord.split('').reverse().join('')
    
    return newWord === reverseWord
    
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

console.log(isPalindrome("race a car"));