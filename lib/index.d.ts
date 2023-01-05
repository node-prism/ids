export default class ID {
    private static MAX_INT32;
    private static MULTIPLIER;
    static alphabet: string;
    static prime: number;
    static inverse: number;
    static random: number;
    static get base(): number;
    private static shorten;
    private static unshorten;
    static encode: (num: number) => string;
    static decode: (str: string) => number;
}
