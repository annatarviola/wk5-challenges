let vowelCount = 0

function hasMoreVowels(word) { 
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === 'a' || word.charAt(i) === 'e' || word.charAt(i) === 'i' || word.charAt(i) === 'o' || word.charAt(i) === 'u') {
            vowelCount++
        }
    }

    if (vowelCount > (word.length / 2)) {
        return true
    } else {
        return false
    }
}

console.log(hasMoreVowels(`graph`))