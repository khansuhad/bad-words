
# No Bad Words - Inappropriate Word Checker

A simple and lightweight npm package to check for inappropriate words (bad words) in a sentence or paragraph. It detects if any words from a predefined list of bad words are present and returns the list of bad words along with their count.

## Installation

To install the package, run the following command in your terminal:

```bash
npm install @suhadahmodkhan/no-bad-words
```
## Usage
### Importing the Package
First, import the checkInappropriate function from the package in your JavaScript or TypeScript file:

```javascript
import checkInappropriate from "@suhadahmodkhan/no-bad-words";
```
### Checking for Inappropriate Words
The checkInappropriate function checks if a sentence or paragraph contains any inappropriate words. It returns a promise that resolves to an object containing the list of bad words found and their count.

## Example 1: Basic Usage
```javascript
import checkInappropriate from "@suhadahmodkhan/no-bad-words";

const Check = () => {
  const checkWords = async () => {
    const check = await checkInappropriate("This is a bad sentence with some inappropriate words.");
    console.log(check);
  };

  checkWords();
};

export default Check;
```
### Example 2: Handling the Result
The checkInappropriate function returns an object with the following structure:

```javascript

{
  hasBadWords: true, // or false if no bad words are found
  badWords: ["bad", "inappropriate"], // list of bad words found
  count: 2 // number of bad words found
}
```
You can handle the result as follows:

```javascript

import checkInappropriate from "@suhadahmodkhan/no-bad-words";

const checkSentence = async (sentence) => {
  const result = await checkInappropriate(sentence);

  if (result.hasBadWords) {
    console.log(`Bad words found: ${result.badWords.join(", ")}`);
    console.log(`Total bad words: ${result.count}`);
  } else {
    console.log("No bad words found.");
  }
};

checkSentence("This is a clean sentence.");
```
### Example 3: Using in a React Component
You can also use this package in a React component to check for inappropriate words in user input:

```javascript

import React, { useState } from "react";
import checkInappropriate from "@suhadahmodkhan/no-bad-words";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    const checkResult = await checkInappropriate(input);
    setResult(checkResult);
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your text here..."
      />
      <button onClick={handleCheck}>Check for Bad Words</button>

      {result && (
        <div>
          {result.hasBadWords ? (
            <p>
              Bad words found: {result.badWords.join(", ")} (Count: {result.count})
            </p>
          ) : (
            <p>No bad words found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
```
## API Reference
checkInappropriate(sentence: string): Promise<{ hasBadWords: boolean, badWords: string[], count: number }>
sentence: The sentence or paragraph to check for inappropriate words.

Returns: A promise that resolves to an object with the following properties:

hasBadWords: A boolean indicating whether bad words were found.

badWords: An array of bad words found in the sentence.

count: The total number of bad words found.