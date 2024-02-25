import { describe, expect, it } from "vitest";
import { capitalize, getParas, getTruncated } from "../utils";

describe("utils", () => {
  describe("capitalize()", () => {
    it("should return the string with the first letter uppercase", () => {
      expect(capitalize("hello")).toBe("Hello");
      expect(capitalize("world")).toBe("World");
      expect(capitalize("")).toBe(""); // Handle empty string
    });

    it("should preserve the rest of the string", () => {
      expect(capitalize("hello world")).toBe("Hello world");
      expect(capitalize("mixedCase")).toBe("MixedCase");
    });

    it("should not modify the original string", () => {
      const originalString = "original";
      capitalize(originalString);
      expect(originalString).toBe("original"); // Still lowercase
    });
  });

  describe("getTruncated()", () => {
    const text = "This is a text sample";

    it("should truncate and trim text accurately at the word boundary and add default ellipsis", () => {
      const expectedText = "This is a text...";
      expect(getTruncated(text, text.length - 1)).toBe(expectedText);
      expect(getTruncated("  " + text, text.length - 1)).toBe(expectedText);
    });

    it("should add custom ellipsis", () => {
      const customEllipsis = "___";
      const expectedText = "This is a text" + customEllipsis;
      expect(getTruncated(text, text.length - 1, customEllipsis)).toBe(
        expectedText
      );
    });

    it("should truncate the first word if it's longer that limit", () => {
      const longFirstWord = "Mewmeeeew a cat says";
      const maxLength = 3;
      const expectedText = "Mew...";
      expect(getTruncated(longFirstWord, maxLength)).toBe(expectedText);
    });

    it("should return full text if it fits within the limit", () => {
      expect(getTruncated(text, text.length + 1)).toBe(text);
    });

    it("should handle empty strings and limit <= zero", () => {
      expect(getTruncated("", 20)).toBe("");
      expect(getTruncated(text, -1)).toBe(text);
    });
  });

  describe("getParas()", () => {
    it("should split text into paragraphs using the provided line break character", () => {
      expect(getParas("Para1.\r\nPara2.")).toEqual(["Para1.", "Para2."]);
    });

    it("should handle empty string and line break only cases", () => {
      expect(getParas("")).toEqual([""]);
      expect(getParas("\r\n")).toEqual(["", ""]);
    });

    it("should handle text without line breaks as a single paragraph", () => {
      expect(getParas("No line breaks here")).toEqual(["No line breaks here"]);
    });

    it("should accept optional line break character argument", () => {
      expect(
        getParas(
          "Line1<-custom-line-break->Line2<-custom-line-break->Line3",
          "<-custom-line-break->"
        )
      ).toEqual(["Line1", "Line2", "Line3"]);
    });
  });
});
