import long from "long";

export default class ID {
  private static MAX_INT32 = 2_147_483_647;
  private static MULTIPLIER = 4_294_967_296;

  public static alphabet: string = "23456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_";
  public static prime: number = 1_125_812_041;
  public static inverse: number = 348_986_105;
  public static random: number = 998_048_641;

  public static get base(): number {
    return ID.alphabet.length;
  }

  private static shorten(id: number): string {
    let result = "";

    while (id > 0) {
      result = ID.alphabet[id % ID.base] + result;
      id = Math.floor(id / ID.base);
    }

    return result;
  }

  private static unshorten(str: string): number {
    let result = 0;

    for (let i = 0; i < str.length; i++) {
      result = result * ID.base + ID.alphabet.indexOf(str[i]);
    }

    return result;
  }

  public static encode = (num: number): string => {
    if (num > ID.MAX_INT32) {
      throw new Error(`Number (${num}) is too large to encode. MAX_INT32 is ${ID.MAX_INT32}`);
    }

    const n: long = long.fromInt(num);

    return ID.shorten(
      n
        .multiply(ID.prime)
        .and(long.fromInt(ID.MAX_INT32))
        .xor(ID.random)
        .toInt(),
    );
  };

  public static decode = (str: string): number => {
    const n: long = long.fromInt(ID.unshorten(str));

    return n
      .xor(ID.random)
      .multiply(ID.inverse)
      .and(long.fromInt(ID.MAX_INT32))
      .toInt();
  };
}
