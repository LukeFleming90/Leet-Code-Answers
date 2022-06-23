var firstUniqChar = function(s) {
    
    let letterObject = {};
    
    for(const letter of s) {
        letterObject[letter] ? letterObject[letter]++ : letterObject[letter] = 1
    }
    
    for(let i = 0; i < s.length; i++) {
        let currentLetter = s[i]
        if(letterObject[currentLetter] === 1) {
            return i
        }
    }
    
    return -1
    
};