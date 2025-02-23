import {Filter }from 'bad-words';
const filter = new Filter();

async function checkInappropriate(sentence) {
    // Split the sentence into words and clean up punctuation
    const words = sentence
                    .toLowerCase()
                    .replace(/[^a-z\s]/g, '') // Remove punctuation
                    .split(/\s+/); // Split by whitespace
    // Check for bad words without censoring them
    const foundBadWords = words.filter(word => filter.isProfane(word));
    
    if (foundBadWords.length > 0) {
       return { hasBadWords: true, badWords: foundBadWords, badCount: foundBadWords.length };
    } else {
        return { hasBadWords: false, badWords: [], badCount: 0};
    }
}

module.exports = checkInappropriate