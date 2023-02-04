import { describe, expect } from "manten";
import ID from "../src";

describe("ids", async ({ test }) => {
  test("encodes as expected", () => {
    const encoded = ID.encode(12389125);
    expect(encoded).toBe("7rYTs_");
  });

  test("decodes as expected", () => {
    const decoded = ID.decode("7rYTs_");
    expect(decoded).toBe(12389125);
  });

  test("changing the alphabet is effective", () => {
    ID.alphabet = "GZwBHpfWybgQ5d_2mM-jh84K69tqYknx7LN3zvDrcSJVRPXsCFT";
    expect(ID.encode(12389125)).toBe("phsV8T");
    expect(ID.decode("phsV8T")).toBe(12389125);
  });
});

