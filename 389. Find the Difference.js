var findTheDifference = function(s, t) {
    
    if(s.length === 0) {
        return t
    }
    
    let objOne = {};
    let objTwo = {};
    let finalLetter
    
    for(const letter of s) {
        objOne[letter] ? objOne[letter]++ : objOne[letter] = 1
    }
    
    for(const letter of t) {
        objTwo[letter] ? objTwo[letter]++ : objTwo[letter] = 1
    }
    
    for(const key in objTwo) {
        
        if(!objOne[key]) {
            finalLetter = key
        }
        
        if(objOne[key] !== objTwo[key]) {
            finalLetter = key
        }
        
    }
    
    return finalLetter
    
};