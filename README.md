# OpenAI Chatbot

## Description
This project demonstrates two implementations of a chatbot using the OpenAI API: one for terminal interaction and the other as a web-based API. The guide walks through setting up and running both implementations, even if you are a beginner.

## Table of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Terminal Chatbot](#terminal-chatbot)
  - [Web API Chatbot](#web-api-chatbot)
- [Testing the Chatbots](#testing-the-chatbots)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Important Notes](#important-notes)

---

## Project Overview
In this project, you will:
1. Learn to create a terminal-based chatbot.
2. Build a web-based chatbot using Node.js and Express.
3. Integrate the OpenAI API for AI-generated responses.
4. Test both implementations for hands-on experience.

---

## Prerequisites
Before starting, ensure you have:
1. A computer (Windows, macOS, or Linux).
2. Node.js installed (with npm).
3. An OpenAI API key.
4. A text editor like Visual Studio Code.
5. Postman for testing the web-based chatbot.

---

## Technologies Used
- **Node.js**: JavaScript runtime for building applications.
- **Express.js**: Web application framework for Node.js.
- **OpenAI API**: Provides AI-generated responses.
- **dotenv**: Handles environment variables securely.
- **Postman**: API testing tool.

---

## Setup Instructions

### Terminal Chatbot
1. Navigate to the project repository:  
   [Terminal Chatbot Code](https://github.com/shathalshehri/openai-chatbot/blob/main/terminal-chatbot.js).
2. Follow these steps:
   - Install dependencies:
     ```bash
     npm install dotenv openai readline-sync
     ```
   - Create a `.env` file in the project directory:
     ```bash
     OPENAI_API_KEY=your_api_key_here
     ```
   - Run the terminal chatbot:
     ```bash
     node terminal-chatbot.js
     ```

3. Interact with the chatbot directly in your terminal by typing prompts.

---

### Web API Chatbot
1. Navigate to the project repository:  
   [Web API Chatbot Code](https://github.com/shathalshehri/openai-chatbot/blob/main/chatbot.js).
2. Follow these steps:
   - Install dependencies:
     ```bash
     npm install express dotenv axios
     ```
   - Create a `.env` file in the project directory:
     ```bash
     OPENAI_API_KEY=your_api_key_here
     ```
   - Start the server:
     ```bash
     node chatbot.js
     ```
   - Test the API endpoint using Postman:
     - Send a POST request to `http://localhost:3000/getResponse`.
     - Include a JSON payload:
       ```json
       {
           "userPrompt": "Can you summarize the history of AI?"
       }
       ```

---

## Testing the Chatbots
### Terminal Chatbot
- Use the terminal to interact with the chatbot by entering various questions or commands.

### Web API Chatbot
- Test using Postman or any API testing tool. 
- Example request and response flow:
  - Request:
    ```json
    {
        "userPrompt": "What is OpenAI?"
    }
    ```
  - Response:
    ```json
    {
        "response": "OpenAI is an AI research lab..."
    }
    ```

---

## Screenshots
### Terminal Chatbot 
![Terminal Chatbot Screenshot](https://github.com/shathalshehri/openai-chatbot/blob/main/Screenshot-Terminal.png)

### Web API Chatbot 
![Postman Screenshot](https://github.com/shathalshehri/openai-chatbot/blob/main/screenshot(POSTMAN).png)

---

## Future Improvements
1. **Add a User Interface**: Build a web interface for the API chatbot.
2. **Enhanced Features**: Integrate OpenAI image generation or embeddings.
3. **Error Handling**: Improve input validation and error responses.

---

## Important Notes
- Keep your OpenAI API key secure in the `.env` file.
- Both implementations are basic and can be extended further.
- Stop the server using `CTRL + C` in the terminal.
- The `terminal-chatbot.js` code supports multiple languages! For example, it can understand and respond in Arabic. Simply type your prompts in any supported language, and the chatbot will interpret and reply without requiring additional configuration.  
  As a native Arabic speaker, I’ve included a screenshot demonstrating the chatbot in Arabic:  
  ![Terminal Chatbot Screenshot](https://github.com/shathalshehri/openai-chatbot/blob/main/Screenshot-Terminal-Ar.png)

