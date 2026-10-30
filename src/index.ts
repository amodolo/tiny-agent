import { HumanMessage } from "@langchain/core/messages";
import type { BaseMessage } from "@langchain/core/messages";
import { model, tools } from "./agent";

async function main() {
    const messages: BaseMessage[] = [
        new HumanMessage({ content: "Use add_numbers to calculate 17 + 38." }),
        new HumanMessage({ content: "What's the weather in London." })
    ];

    while (true) {
        const response = await model.invoke(messages);
        console.log("Model response:", response);

        if (!response.tool_calls?.length) {
            console.log(response.content);
            break;
        }

        for (const toolCall of response.tool_calls) {
            const tool = tools.find((tool) => tool.name === toolCall.name);

            if (!tool) {
                throw new Error(`Tool sconosciuto: ${toolCall.name}`);
            }

            const response = await tool.invoke(toolCall);
            console.log("Tool response:", response);
            messages.push(response);
        }
    }
}

main().catch(console.error);
