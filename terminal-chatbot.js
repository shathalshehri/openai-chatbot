const readline = require("readline");
const OpenAI = require("openai");
require("dotenv").config(); // Load your OpenAI API key from the .env file

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Welcome to the Terminal Chatbot! Type 'exit' to quit.\n");

const askQuestion = () => {
    rl.question("You: ", async (userPrompt) => {
        if (userPrompt.toLowerCase() === "exit") {
            console.log("Goodbye!");
            rl.close();
            return;
        }

        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userPrompt }],
                max_tokens: 100,
            });

            console.log(`AI: ${response.choices[0].message.content}\n`);
        } catch (error) {
            console.error("Error:", error.message);
        }

        askQuestion();
    });
};

askQuestion();
