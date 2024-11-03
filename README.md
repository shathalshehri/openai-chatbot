# OpenAI Chatbot

## Description
This project is a simple chatbot built using Node.js and the OpenAI API. The goal is to show you how to create a basic chatbot that can answer questions. This guide will take you through every step of the process, even if you have no prior experience.

## Table of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [How to Use the Chatbot](#how-to-use-the-chatbot)
- [Testing the Chatbot](#testing-the-chatbot)
- [Future Improvements](#future-improvements)

## Project Overview
In this project, you will:
- Set up a basic Node.js application using Express.
- Integrate the OpenAI API to generate responses for a chatbot.
- Create a simple API endpoint that accepts user input and returns generated responses.

## Prerequisites
Before you start, make sure you have the following:
1. A computer (Windows, macOS, or Linux).
2. Internet access to download software and packages.
3. A text editor (like Visual Studio Code, Notepad++, or even Notepad).
4. A web browser (like Chrome, Firefox, or Safari).

## Technologies Used
- **Node.js**: A platform for running JavaScript code outside of a web browser.
- **npm**: A package manager for Node.js that helps install libraries and tools.
- **Express.js**: A framework for building web applications in Node.js.
- **OpenAI API**: A service that provides AI-generated responses.
- **Postman**: A tool for testing APIs easily.

## Setup Instructions

### Step 1: Install Node.js
1. Go to the [Node.js website](https://nodejs.org/).
2. Download the **LTS version** (recommended for most users).
3. Run the installer and follow the instructions to install Node.js. Make sure to check the box that says **"Add to PATH"** during installation.

### Step 2: Verify Node.js Installation
1. Open your command prompt (Windows) or terminal (macOS/Linux).
2. Type the following command and press Enter:
    ```bash
    node -v
    ```
   You should see a version number if Node.js is installed correctly.

3. Next, check if npm (Node Package Manager) is installed by running:
    ```bash
    npm -v
    ```
   You should see a version number for npm as well.

### Step 3: Create the Project Folder
1. Open your command prompt or terminal.
2. Navigate to the directory where you want to create the project folder using the `cd` command. For example:
    ```bash
    cd Desktop
    ```
3. Create a new folder named `openai-chatbot` by running:
    ```bash
    mkdir openai-chatbot
    ```
4. Change into the newly created directory:
    ```bash
    cd openai-chatbot
    ```

### Step 4: Initialize the Project
1. Inside the `openai-chatbot` folder, run the following command to create a `package.json` file:
    ```bash
    npm init -y
    ```
   This will set up a basic Node.js project.

### Step 5: Install Project Dependencies
1. Install the required libraries by running:
    ```bash
    npm install express dotenv axios
    ```
   This command will download and install `express`, `dotenv`, and `axios`, which are necessary for your project.

### Step 6: Create the Main File
1. In the `openai-chatbot` folder, create a new file named `chatbot.js`. You can do this using a text editor or by running:
    ```bash
    touch chatbot.js
    ```

### Step 7: Add Chatbot Code
1. Open the `chatbot.js` file in your text editor and add the following code:

```javascript 
    
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
// Input validation
    if (!userPrompt || typeof userPrompt !== "string") {
        return res.status(400).json({ error: "Invalid input." });
    }

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
```


### Step 8: Create a .env File
1. In the `openai-chatbot` folder, create a new file named `.env`. 
   - Windows: Right-click in the folder, choose New > Text Document, and rename it to `.env` (make sure to remove the .txt extension).
   - macOS/Linux: Open the terminal and run:
     ```bash
     touch .env
     ```

2. Open the `.env` file in your text editor and add your OpenAI API key like this:
    ```bash
    OPENAI_API_KEY=your_api_key_here
    ```
   Replace `your_api_key_here` with your actual OpenAI API key. You can get an API key by signing up at OpenAI.

3. Save the `.env` file.

### Step 9: Start the Server
1. In your terminal, make sure you are in the `openai-chatbot` project folder.
2. Start the server by running:
    ```bash
    node chatbot.js
    ```
3. If everything is set up correctly, you should see:
    ```bash
    Server started on port 3000
    ```

### Step 10: How to Use the Chatbot
1. Open Postman (or any similar API testing tool).
2. Send a POST request to `http://localhost:3000/getResponse`.
3. In the Body section, add a JSON payload like:
    ```json
    {
        "userPrompt": "Can you write an essay about OpenAI?"
    }
    ```
4. Click **Send** to receive a response from the chatbot.

### Step 11: Testing the Chatbot
Use Postman to send different questions to the chatbot. You can try asking questions like:
- "What is OpenAI?"
- "Can you summarize the history of AI?"
- "Tell me a joke."

## Future Improvements
- **User Interface:** Build a web-based UI for easier interaction.
- **Enhanced Responses:** Add more complexity to responses or provide options for different response styles.
- **Extended Commands:** Integrate other OpenAI functionalities, such as image generation or completion with different models.

# Important Notes
- Make sure your OpenAI API key is kept secure and not shared publicly.
- This chatbot is a basic implementation; consider adding error handling and user validation for production use.
- To stop the server, use `CTRL + C` in your terminal.

