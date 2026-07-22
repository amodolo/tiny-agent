import {describe, it, expect, expectTypeOf} from "vitest";
import { addNumber, getWeather } from "../src/tools";

describe("addNumber tool", () => {
    it("should add two numbers correctly", async () => {
        const result = await addNumber.func({ first: 3, second: 5 });
        expect(result).toBe(8);
    });
});

describe("getWeather tool", () => {
    it("should return a weather string for a valid location", async () => {
        const result = await getWeather.func("Rome");
        expect(result).toBe("The weather in Rome is sunny.");
    });
});

describe("PairNumber type validation", () => {
    it("should validate a valid PairNumber object", () => {
        const validPair = { first: 10, second: 20 };
        expect(() => addNumber.schema.parse(validPair)).not.toThrow();
    });

    it("should throw an error for an invalid PairNumber object", () => {
        const invalidPair = { first: "10", second: 20 }; // first is not a number
        expect(() => addNumber.schema.parse(invalidPair)).toThrow();
    });
});