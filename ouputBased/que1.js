// Que: How can I identify words within a given string that contain repeated characters using JavaScript?
// Input String: "hello world too many repeated characters here"

function findWordsWithRepeatedCharacters(str) {
    // split string into words
    const words = str.split(' ');

    // Array to store words with repeated characters
    const wordsWithRepeatedChars = [];

    // Iterate over each word
    words.forEach(word => {
        // Convert the word to lowercase for case-insensitive comparison
        const lowercaseWord = word.toLowerCase();

        // Object to store character frequency
        const charFrequency = {};

        // Flag to check if the word has repeated characters
        let hasRepeatedChars = false;

        // Iterate over each character in the word
        for (let i = 0; i < lowercaseWord.length; i++) {
            const char = lowercaseWord[i];

            // Increment the character frequency count
            charFrequency[char] = (charFrequency[char] || 0) + 1;

            console.log(charFrequency);

            // If the frequency of the character  is greater than 1, it's repeated
            if(charFrequency[char] >  1) {
                hasRepeatedChars = true;
                break; // No need to continue checking if we've found repeated characters
            }
        }

        // If the word has repeated characters, add it to the result array
        if(hasRepeatedChars) {
            wordsWithRepeatedChars.push(word);
        }
    })

    return wordsWithRepeatedChars
}

const str = "hello world too many repeated characters here";
const wordsWithRepeatedChars = findWordsWithRepeatedCharacters(str);
console.log("Words with repeated characters:", wordsWithRepeatedChars);


// Notes:
// The || (logical OR) operator in JavaScript returns the first operand if it's truthy, otherwise, it returns the second operand. So, (charFrequency[char] || 0) checks if charFrequency[char] is truthy. If it's truthy (i.e., it has a value other than 0, null, undefined, etc.), then it uses that value. If it's falsy (i.e., it's 0, null, undefined, etc.), then it uses 0 as a fallback value.