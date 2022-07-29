// Thank god for RegExp101.com
export const TIME_SPLITTER_REGEXP = new RegExp(/\d{2}:\d{2}:\d{2}/g)
export const SINGLE_SENTENCE_REGEXP = new RegExp(/(?<time>\d{2}:\d{2}:\d{2}) (?<mention>.+) : (?<sentence>.+)$/ms)
export const SENTENCES_SPLITTER_REGEXP = new RegExp( /(?<sentence>\d{2}:\d{2}:\d{2} .+? : .+?\.\n?)/g)
