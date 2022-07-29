import {
    getMentionFromSentence,
    getSentenceFromSentence,
    getTimeFromSentence,
    getTypeFromSentence,
    parseSentence, parseSentences
} from "../utils";
import {singleSentenceInput, twoSentenceInput} from "../helpers/inputs";
import {AUTHOR_TYPE} from "../constants/AuthorType";


describe("Single Sentence", ()=>{
    it('should get the time', function () {
        expect(getTimeFromSentence(singleSentenceInput)).toBe("14:24:32");
    });
    it('should get the mention', function () {
        expect(getMentionFromSentence(singleSentenceInput)).toBe("Customer");
    });
    it('should get the sentence', function () {
        expect(getSentenceFromSentence(singleSentenceInput)).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n");
    });
    it('should get the type', function () {
        expect(getTypeFromSentence(singleSentenceInput)).toBe(AUTHOR_TYPE.Customer);
    });
    it('should return a correct data structure for a single sentence', function () {
        expect(parseSentence(singleSentenceInput)).toEqual({
            date: "14:24:32",
            mention: "14:24:32 Customer : ",
            sentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n",
            type: AUTHOR_TYPE.Customer
        });
    });

    // Described in multipleSentences.test.js
    it('should return the data structure inside an array when multiple sentences', function () {
        expect(Array.isArray(parseSentences(twoSentenceInput))).toBe(true);
    });
})