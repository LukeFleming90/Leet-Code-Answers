var longestPalindrome = function(s) {
    
    let total = 0;
    let max = '';
    
    if(s.length === 1) {
        return 1
    }
    
    let letterObj = {};
    
    for(const letter of s) {
        letterObj[letter] ? letterObj[letter]++ : letterObj[letter] = 1
    }
    
    if(Object.keys(letterObj).length === 1) {
        count = Object.values(letterObj)
        return count[0]
    }
    
    for(const letter in letterObj) {
        
        if(letterObj[letter] % 2 === 0) {
            total += letterObj[letter]
        }
        
        if(letterObj[letter] % 2 === 1 && letterObj[letter] > max) {
            max = letter
        }
        
    }
    
    for(const letter in letterObj) {
        
        if(letterObj[letter] % 2 === 1 && letter !== max) {
            total += letterObj[letter] - 1
        }
        
        if(letter === max) {
            total += letterObj[letter]
        }
        
    }
    
    return total;
    
};

console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))