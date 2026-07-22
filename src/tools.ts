import { tool } from "langchain";
import { z } from "zod";

type PairNumber = {
    first: number;
    second: number;
};

const PairNumberSchema = z.object({
    first: z.number().describe("The first number to add"),
    second: z.number().describe("The second number to add"),
});

export const addNumber = tool(
    (input: PairNumber): number => input.first + input.second,
    {
        name: "add_numbers",
        description: "Add two numbers",
        schema: PairNumberSchema,
    },
);

export const getWeather = tool(
    async (location: string): Promise<string> => {
        // Simulate fetching weather data for the given location
        return `The weather in ${location} is sunny.`;
    },
    {
        name: "get_weather",
        description: "Get the current weather for a given location",
        schema: z.string().describe("The location to get the weather for"),
    },
);
