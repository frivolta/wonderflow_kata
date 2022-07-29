import {fullName} from "../helpers/inputs";
import {parseSentences} from "../utils";

describe("Full name", () => {
    it('should return sentences with full names', function () {
        const input = fullName
        const res = parseSentences(input);
        expect(res.length).toBe(2);
        expect(res).toEqual([{
            date: '14:24:32',
            mention: '14:24:32 Luca Galasso : ',
            sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            type: 'customer'
        }, {
            date: '14:26:15',
            mention: '14:26:15 Emanuele Querzola : ',
            sentence: 'I received the package, ut blandit lectus.',
            type: 'agent'
        }])
    });
})