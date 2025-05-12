const express = require("express");
const fs = require("fs");
const dotenv = require("dotenv");
const cors = require("cors");
const { CohereClient } = require("cohere-ai");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Initialize Cohere client
const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

// Path to the knowledge base
const knowledgeBasePath = "knowledge_base.json";

// Load existing knowledge base or create empty
let knowledgeBase = fs.existsSync(knowledgeBasePath)
  ? JSON.parse(fs.readFileSync(knowledgeBasePath, "utf-8"))
  : {};

// Small talk responses
const smallTalk = {
  hello: "Hello! 👋 How can I help you today?",
  hi: "Hi there! 👋 What can I do for you?",
  "how are you": "I'm just a bot, but I'm doing great! 😊",
  bye: "Goodbye! 👋 Have a great day!",
  thanks: "You're welcome! 😊",
  "good morning": "Good morning! 🌞 Hope you're having a great day!",
  "good night": "Good night! 🌙 Sleep well!",
};

// Match partial keywords
const findAnswer = (question) => {
  const keyword = Object.keys(knowledgeBase).find((key) =>
    question.toLowerCase().includes(key.toLowerCase())
  );
  return keyword ? knowledgeBase[keyword] : null;
};

// Get AI-generated answer from Cohere
async function getCohereAnswer(question) {
  try {
    const response = await cohere.chat({
      message: `You're a helpful tech store assistant. The customer asked: "${question}"`,
      connectors: [{ id: "web-search" }], // optional: uses real-time info
    });

    if (response && response.text) {
      return response.text;
    } else {
      console.error("Unexpected Cohere response:", response);
      return "Sorry, I couldn't get a proper answer from AI.";
    }
  } catch (error) {
    console.error("Cohere API error:", error.message);
    return "Sorry, I'm having trouble finding an answer right now.";
  }
}

// POST /ask — handle customer queries
app.post("/ask", async (req, res) => {
  const question = req.body.question?.toLowerCase().trim();
  if (!question) {
    return res.status(400).json({ error: "Question is required." });
  }

  // 1. Small talk
  if (smallTalk[question]) {
    return res.json({ answer: smallTalk[question], source: "small_talk" });
  }

  // 2. Knowledge base match
  const answer = findAnswer(question);
  if (answer) {
    return res.json({ answer, source: "knowledge_base" });
  }

  // 3. AI fallback via Cohere
  const aiAnswer = await getCohereAnswer(question);
  return res.json({ answer: aiAnswer, source: "cohere_ai" });
});

// POST /teach — learn new knowledge
app.post("/teach", (req, res) => {
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ error: "Question and answer are required." });
  }

  knowledgeBase[question.toLowerCase().trim()] = answer;
  fs.writeFileSync(knowledgeBasePath, JSON.stringify(knowledgeBase, null, 2));

  res.json({ message: "Thanks! I've learned something new! 🎉" });
});

// Start the server
app.listen(8010, () => {
  console.log("🤖 Smart Assistant backend running at http://localhost:8010");
});

// Optional: graceful shutdown & error handling
process.on("SIGINT", () => {
  console.log("🤖 Shutting down...");
  process.exit();
});

process.on("uncaughtException", (err) => {
  console.error("🤖 Uncaught exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("🤖 Unhandled rejection at:", promise, "reason:", reason);
  process.exit(1);
});
