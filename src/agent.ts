import { addNumber, getWeather } from "./tools";
import { ChatOllama } from "@langchain/ollama";
import type { StructuredToolInterface } from "@langchain/core/tools";

const chatOllama: ChatOllama = new ChatOllama({
    model: "qwen3.5:9b",
    baseUrl: "http://localhost:11434",
    think: false,
    temperature: 0
});

export const tools: StructuredToolInterface[] = [addNumber, getWeather];
export const model = chatOllama.bindTools(tools);
