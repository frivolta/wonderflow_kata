import * as R from 'ramda'

import {
    SENTENCES_SPLITTER_REGEXP,
    SINGLE_SENTENCE_REGEXP,
} from '../helpers/regEx'
import {AUTHOR_TYPE} from '../constants/AuthorType'

// Single sentence getters
export const getTimeFromSentence = (sentence) => sentence.match(SINGLE_SENTENCE_REGEXP)?.groups?.time || "00:00:00"
export const getMentionFromSentence = (sentence) => sentence.match(SINGLE_SENTENCE_REGEXP)?.groups?.mention ?? "Customer"
export const getSentenceFromSentence = (sentence) => sentence.match(SINGLE_SENTENCE_REGEXP)?.groups.sentence ?? "No match found"
export const getTypeFromSentence = (sentence) => R.prop(getMentionFromSentence(sentence), AUTHOR_TYPE)


// Sentence parser
// Note: given that the first occurrence is from the customer but
// the second occurrence could be either customer or agent but on step 6 we just have full names but the output is "customer" and "agent" I have to decide one or the other:
// - If we only have full names, we can assume that the first occurrence is from the customer the second from agent and so on (I can check index of the sentence and assign odd or even values)
// - If we only have full names, we can assume that in the database I can match the name with the role (I can add Name: role to AUTHOR_TYPE)
export const parseSentence = (sentence,index) => ({
    date: getTimeFromSentence(sentence),
    mention: `${getTimeFromSentence(sentence)} ${getMentionFromSentence(sentence)} : `,
    sentence: getSentenceFromSentence(sentence),
    type: getTypeFromSentence(sentence) ?? (index % 2 === 0 ? AUTHOR_TYPE.Customer : AUTHOR_TYPE.Agent)
})

export const parseSentences = (sentences) => sentences.match(SENTENCES_SPLITTER_REGEXP).map(parseSentence)
