import {twoCustomerInputAtStart} from "../helpers/inputs";
import {parseSentences} from "../utils";
import {AUTHOR_TYPE} from "../constants/AuthorType";

describe("Two Customer Mention At Start", () => {
    it('should parse sentence returning array of length 4', function () {
        const input = twoCustomerInputAtStart;
        const parsed = parseSentences(input);
        expect(Array.isArray(parsed)).toBe(true);
        expect(parsed.length).toBe(4);
    });

    it('should have parsed "customer" as type for the first two sentences correctly', function () {
        const input = twoCustomerInputAtStart
        const res = parseSentences(input)
        expect(res[0].type).toBe(AUTHOR_TYPE.Customer)
        expect(res[1].type).toBe(AUTHOR_TYPE.Customer)
    });

    // For kata purposes only
    it('should return a result as kata description', function () {
        const input = twoCustomerInputAtStart
        const res = parseSentences(input)
        expect(res).toEqual([{
            date: '14:24:32',
            mention: '14:24:32 Customer : ',
            sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
            type: 'customer'
        }, {
            date: '14:27:00',
            mention: '14:27:00 Customer : ',
            sentence: 'Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.\n',
            type: 'customer'
        }, {
            date: '14:27:47',
            mention: '14:27:47 Agent : ',
            sentence: 'Vestibulum tempor diam eu leo molestie eleifend.\n',
            type: 'agent'
        }, {
            date: '14:28:28',
            mention: '14:28:28 Customer : ',
            sentence: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
            type: 'customer'
        }])
    });
})