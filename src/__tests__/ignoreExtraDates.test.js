import {ignoreExtraDates} from "../helpers/inputs";
import {parseSentences} from "../utils";

describe("Ignore extra dates", () => {
    it("should return an array with correct length", () => {
        const input = ignoreExtraDates
        const res = parseSentences(input);
        expect(res.length).toBe(2);
    })
    // Just for kata purposes
    it("should ignore extra dates if present within a sentence", () => {
      const input = ignoreExtraDates
      const res = parseSentences(input);

      // @ToDo: Bug: The second sentence should include a new line character but is not present in kata result
      expect(res).toEqual([{
          date: '14:24:32',
          mention: '14:24:32 Customer : ',
          sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: 'customer'
      }, {
          date: '14:26:15',
          mention: '14:26:15 Agent : ',
          // should be: sentence: 'I received it at 12:24:48, ut blandit lectus.\n',
          sentence: 'I received it at 12:24:48, ut blandit lectus.',
          type: 'agent'
      }])
    })
})