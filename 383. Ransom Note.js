var canConstruct = function(ransomNote, magazine) {
    
    let ransomObj = {};
    let magazineObj = {};
    
    for(const letter of ransomNote) {
        ransomObj[letter] ? ransomObj[letter]++ : ransomObj[letter] = 1
    }
    
    for(const letter of magazine) {
        magazineObj[letter] ? magazineObj[letter]++ : magazineObj[letter] = 1
    }
    
    for(const letter in ransomObj) {
        
        if(!magazineObj[letter]) {
            return false
        }
        
        if(ransomObj[letter] > magazineObj[letter]) {
            return false
        }
    }
    
    return true
    
};