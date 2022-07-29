import {parseSentences} from "./utils";
import {
    fullName,
    ignoreExtraDates,
    singleSentenceInput,
    twoCustomerInputAtStart,
    twoSentenceInput
} from "./helpers/inputs";

// Step 1: Single sentence input
console.log(parseSentences(singleSentenceInput));

// Step 2: Two sentence input
console.log(parseSentences(twoSentenceInput));

// Step 3: Two customer input at start
console.log(parseSentences(twoCustomerInputAtStart));

// Step 4: Ignore extra dates
console.log(parseSentences(ignoreExtraDates));

// Step 5: Full name
console.log(parseSentences(fullName));