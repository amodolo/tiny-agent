import agent from "./agent";

const messages = ["What's the weather in Rome?", "What is 17 + 38?"];

async function main() {
    messages.forEach(async (message) => {
        const result = await agent.invoke({
            messages: [
                {
                    role: "user",
                    content: message
                }
            ]
        });
        console.log("User message:", message);
        result.messages.at(-1)?.content &&
            console.log("Agent response:", result.messages.at(-1)?.content);
    });
}

main().catch((error) => {
    console.error(error);
    return;
});
