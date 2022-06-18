var isAnagram = function(s, t) {
    
    if(s.length !== t.length) {
        return false
    }
    
    let sObj = {};
    let tObj = {};
    
    for(const letter of s) {
        sObj[letter] ? sObj[letter]++ : sObj[letter] = 1
    }
    
    for(const letter of t) {
        tObj[letter] ? tObj[letter]++ : tObj[letter] = 1
    }
    
    for(const key in sObj) {
        if(sObj[key] !== tObj[key]) {
            return false
        }
    }
    
    return true
    
};