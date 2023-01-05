import long from "long";
export default class ID {
    static MAX_INT32 = 2147483647;
    static MULTIPLIER = 4294967296;
    static alphabet = "23456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_";
    static prime = 1125812041;
    static inverse = 348986105;
    static random = 998048641;
    static get base() {
        return ID.alphabet.length;
    }
    static shorten(id) {
        let result = "";
        while (id > 0) {
            result = ID.alphabet[id % ID.base] + result;
            id = Math.floor(id / ID.base);
        }
        return result;
    }
    static unshorten(str) {
        let result = 0;
        for (let i = 0; i < str.length; i++) {
            result = result * ID.base + ID.alphabet.indexOf(str[i]);
        }
        return result;
    }
    static encode = function (num) {
        if (num > ID.MAX_INT32) {
            throw new Error(`Number (${num}) is too large to encode. MAX_INT32 is ${ID.MAX_INT32}`);
        }
        let n = long.fromInt(num);
        return ID.shorten(n
            .multiply(ID.prime)
            .and(long.fromInt(ID.MAX_INT32))
            .xor(ID.random)
            .toInt());
    };
    static decode = function (str) {
        let n = long.fromInt(ID.unshorten(str));
        return n
            .xor(ID.random)
            .multiply(ID.inverse)
            .and(long.fromInt(ID.MAX_INT32))
            .toInt();
    };
}
