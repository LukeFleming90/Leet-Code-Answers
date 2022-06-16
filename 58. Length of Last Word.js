var lengthOfLastWord = function(s) {
    
    let wordArray = s.split(" ")
    let finalWordArray = []
    
    let lastWord = ''
    let lastWordLength = 0
    
    for(let i = 0; i < wordArray.length; i++) {
        let currentWord = wordArray[i]
        if(currentWord.trim()) {
            finalWordArray.push(currentWord)
        }
    }
    
    
        
    return finalWordArray[finalWordArray.length - 1].length
    
};

console.log(lengthOfLastWord('Hello World'))

console.log(lengthOfLastWord('   fly me   to   the moon  '))

console.log(lengthOfLastWord('luffy is still joyboy'))