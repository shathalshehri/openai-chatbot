# OpenAI Chatbot

## Description
This project is a simple chatbot built using Node.js and the OpenAI API. The goal is to show you how to create a basic chatbot that can answer questions. This guide will take you through every step of the process, even if you have no prior experience.

## Table of Contents
- [What You Will Learn](#what-you-will-learn)
- [Prerequisites](#prerequisites)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [How to Use the Chatbot](#how-to-use-the-chatbot)
- [Testing the Chatbot](#testing-the-chatbot)
- [Future Improvements](#future-improvements)

## What You Will Learn
- How to install Node.js and npm (Node Package Manager).
- How to set up a basic Node.js application.
- How to use the OpenAI API to generate responses.
- How to send requests to the chatbot and receive responses.

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

### Step 3: Download the Project

1. Click on the green "Code" button on the repository page.
2. Copy the URL provided (it should look like https://github.com/yourusername/openai-chatbot.git).
3. Open your command prompt or terminal.
4. Navigate to the folder where you want to save the project using the cd command (e.g., cd Desktop).
5. Clone the repository by typing the following command and pressing Enter:

  ```bash
 git clone https://github.com/shathalshehri/openai-chatbot.git
 ```

### Step 4: Navigate to the Project Folder
1. Change to the project directory by typing:

```bash
 cd openai-chatbot
```

### Step 5: Install Project Dependencies
1. In the project folder, install the required libraries by running:

```bash
npm install
```

This command will download and install all the necessary packages for the project.
### Step 6: Create a .env File
1. In the project folder, create a new file named .env.
- Windows: Right-click in the folder, choose New > Text Document, and rename it to .env (make sure to remove the .txt extension).
- macOS/Linux: Open the terminal and run:

```bash
touch .env
```

2. Open the .env file in your text editor and add your OpenAI API key like this:

```bash
 OPENAI_API_KEY=your_api_key_here
```

Replace your_api_key_here with your actual OpenAI API key. You can get an API key by signing up at OpenAI.

3. Save the .env File.

### Step 7: Start the Server
1. In your terminal, make sure you are in the project folder.
2. Start the server by running:

```bash
node app.js
```

3. If everything is set up correctly, you should see:

```bash
Server started on port 3000
```

### Step 8: How to Use the Chatbot
1. Open Postman (or any similar API testing tool).
2. Send a POST request to http://localhost:3000/getResponse.
3. In the Body section, add a JSON payload like:

```bash
    {
    "userPrompt": "Can you write an essay about OpenAI?"
}
```

4. Click Send to receive a response from the chatbot.

### Step 9: Testing the Chatbot

Use Postman to send different questions to the chatbot. You can try asking questions like:

- "What is OpenAI?"
- "Can you summarize the history of AI?"
- "Tell me a joke."
  
### Future Improvements
**- User Interface:** Build a web-based UI for easier interaction.

**- Enhanced Responses:** Add more complexity to responses or provide options for different response styles.

**- Extended Commands:** Integrate other OpenAI functionalities, such as image generation or completion with different models.

