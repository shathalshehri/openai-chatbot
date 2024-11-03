// Load required modules
const express = require("express");
const OpenAI = require("openai");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
app.use(express.json()); // Parse JSON bodies

// Initialize the OpenAI API client with your API key from .env file
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Define the endpoint for generating AI responses
app.post("/getResponse", async (req, res) => {
    const userPrompt = req.body.userPrompt; // Extract user prompt from request body
    console.log(`Me: ${userPrompt}`); // Log user prompt for debugging

    try {
        // Call OpenAI API to generate a response
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userPrompt }],
            max_tokens: 100, // Adjust the token limit as needed
        });

        // Log and send the AI's response
        const aiResponse = response.choices[0].message.content;
        console.log(`AI Response: ${aiResponse}`);
        res.json({ response: aiResponse }); // Send response back to the client
    } catch (error) {
        console.error("Error:", error); // Log any errors
        res.status(500).json({ error: "An error occurred while processing your request." });
    }
});

// Start the server
const PORT = process.env.PORT || 3000; // Use the port from the environment or default to 3000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`); // Log server start
});
