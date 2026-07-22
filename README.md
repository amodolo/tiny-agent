# Tiny Agent

Tiny Agent is a minimal LangChain-based agent example that runs locally with Ollama. It exposes two simple tools:

- `add_numbers`: adds two numeric values
- `get_weather`: returns a demo weather response for a location

The sample entry point in `src/index.ts` sends a couple of example prompts to the agent and prints the responses.

## Features

- Local AI agent powered by `@langchain/ollama`
- Tool-calling example with LangChain
- Minimal TypeScript setup
- Vitest tests for the built-in tools

## Prerequisites

Before running the project, make sure you have:

- Node.js and npm installed
- Ollama installed and running locally
- The model `qwen3.5:4b` available in Ollama

## Installation

```bash
npm install
ollama pull qwen3.5:4b
```

## Running the example

Start Ollama if it is not already running:

```bash
ollama serve
```

Then run the demo:

```bash
npm run dev
```

You can also build and run the compiled version:

```bash
npm run build
npm start
```

## Testing

Run the test suite with:

```bash
npm test
```

## Project structure

- `src/agent.ts` - creates the agent and registers the tools
- `src/tools.ts` - defines the available tools
- `src/index.ts` - example usage of the agent
- `tests/` - Vitest test files
