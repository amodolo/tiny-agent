import { addNumber, getWeather } from "./tools";
import { createAgent } from "langchain";
import { ChatOllama } from "@langchain/ollama";

export default createAgent({
    model: new ChatOllama({
        model: "qwen3.5:4b",
        baseUrl: "http://localhost:11434",
        think: false,
        temperature: 0,
    }),
    tools: [addNumber, getWeather],
    description: "An agent that can add numbers and get weather information.",
});