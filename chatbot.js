// Load required modules
const readline = require("readline"); // For interactive terminal input
const OpenAI = require("openai");
require("dotenv").config(); // Load environment variables from .env file

// Initialize the OpenAI API client with your API key from .env file
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Create a readline interface for user interaction
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to get AI response
async function getAIResponse(userPrompt) {
    try {
        // Call OpenAI API to generate a response
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userPrompt }],
            max_tokens: 100, // Adjust the token limit as needed
        });

        // Extract and return the AI's response
        return response.choices[0].message.content.trim();
    } catch (error) {
        console.error("Error:", error.message); // Log any errors
        return "An error occurred while processing your request.";
    }
}

// Function to handle chat interactions
function handleChat() {
    rl.question("You: ", async (userPrompt) => {
        if (userPrompt.toLowerCase() === "exit") {
            console.log("Goodbye!");
            rl.close(); // Close the readline interface
            return;
        }

        // Get AI's response and display it
        const aiResponse = await getAIResponse(userPrompt);
        console.log(`AI: ${aiResponse}\n`);

        // Continue the chat
        handleChat();
    });
}

// Start the chat with a single welcome message
console.log("Welcome to your interactive AI chat! Type 'exit' to quit.\n");
handleChat();

