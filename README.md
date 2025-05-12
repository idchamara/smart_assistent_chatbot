# 🤖 Smart Assistant Chatbot – Electronics Shop Support Bot

🤖 Smart Assistant Chatbot is an AI-powered support system for an electronics store. It helps customers find devices based on budget, answers product-related questions, and supports self-learning using a JSON knowledge base. Built with Node.js, React, and Cohere API.

## ✨ Features

- 🧠 **AI-Powered Recommendations** using Cohere API
- 💬 **Natural Conversation Flow** with small talk support
- 📚 **Learn & Store Custom Answers** via `teach` endpoint
- 🔍 **Keyword Matching** using JSON-based knowledge base
- 💻 **Modern Frontend** built with React + Material UI
- 📘 **About Dialog** showing user instructions

---

## 🧰 Technologies Used

| Stack        | Tech                      |
|--------------|---------------------------|
| Frontend     | React, Material UI, Axios, Toastify |
| Backend      | Node.js, Express          |
| AI/NLP       | Cohere API                |
| Storage      | JSON file (`knowledge_base.json`) |

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/smart-assistant-chatbot
cd smart-assistant-chatbot
```

### 2. Set Up the Backend

```bash
cd smart_assistant_backend
npm install
```

Create a `.env` file:

```
COHERE_API_KEY=your_cohere_api_key_here
```

Start the server:

```bash
node server.js
```

> The backend will run at: `http://localhost:8010`

### 3. Set Up the Frontend

```bash
cd smart_assistant_frontend
npm install
npm start
```

> The frontend will run at: `http://localhost:3000`

---

## 📘 Sample Questions to Try

- “I want to buy a smartphone under $1000”
- “Do you sell laptops for gaming?”
- “What is your warranty policy?”
- “Hi” / “Thanks” / “Good night”

---

## 💡 Future Improvements

- Add product catalog filtering by brand or specs
- Add speech-to-text support
- Store chat history with timestamps

---

## 📄 License

This project is for educational use under the [MIT License](LICENSE).
