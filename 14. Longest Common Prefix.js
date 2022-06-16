var longestCommonPrefix = function(strs) {
    
    if(strs.length === 1 && /^[A-Za-z]*$/.test(strs[0])) {
        return strs[0]
    }
    
    
    if(strs.length === 1 && !/^[A-Za-z]*$/.test(strs[0])) {
        return ""
    }
    
    
        
    let compObj = {}
    
    for(str of strs) {
        let firstLetter = str[0]
        let secondLetter = str[1]
        let prefix = firstLetter + secondLetter
        if(!compObj[prefix]) {
            compObj[prefix] = 1
        } else {
            compObj[prefix]++
        }
    }
    
    let max = 1
    let maxPrefix = ''
    
    for(prefix in compObj) {
        if(compObj[prefix] > max) {
            max = compObj[prefix]
            maxPrefix = prefix
        }
    }
    
    if(maxPrefix === 'NaN') {
        return ''
    } else {
        return maxPrefix
    }
    
};

console.log(longestCommonPrefix(["",""]))