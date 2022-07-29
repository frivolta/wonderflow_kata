import {twoSentenceInput} from "../helpers/inputs";
import {parseSentences} from "../utils";
import {AUTHOR_TYPE} from "../constants/AuthorType";

describe("Two Sentences", ()=>{
    it('should parse two sentences and return a correct data structure in an array list', function () {
        const input = twoSentenceInput;
        const parsed = parseSentences(input);
        expect(Array.isArray(parsed)).toBe(true);
        expect(parsed.length).toBe(2);
        expect(parsed[0]).toHaveProperty('date', '14:24:32');
        expect(parsed[0]).toHaveProperty('mention', '14:24:32 Customer : ');
        expect(parsed[0]).toHaveProperty('sentence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n');
        expect(parsed[0]).toHaveProperty('type', AUTHOR_TYPE.Customer);
    });
    it('should return exact result with mocked data', function () {
        const input = twoSentenceInput;
        const parsed = parseSentences(input);
        expect(parsed).toEqual([
            {
                date: "14:24:32",
                mention: "14:24:32 Customer : ",
                sentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n",
                type: AUTHOR_TYPE.Customer
            },
            {
                date: "14:26:15",
                mention: "14:26:15 Agent : ",
                sentence: "Aliquam non cursus erat, ut blandit lectus.",
                type: AUTHOR_TYPE.Agent
            }
        ]);
    });
})
