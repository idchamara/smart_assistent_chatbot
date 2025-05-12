
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { toast } from "react-toastify";
import SampleQuestions from "./SampleQuestions";
import QuestionInput from "./QuestionInput";
import AboutDialog from "./AboutDialog";

const ChatBot = () => {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [aboutOpen, setAboutOpen] = useState(false);
  const bottomRef = useRef(null); // For scrolling

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleSubmit = async () => {
    if (!question.trim()) {
      toast.error("Please enter a question.");
      return;
    }

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { type: "user", text: question },
    ]);

    try {
      const response = await axios.post("http://localhost:8010/ask", {
        question,
      });

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { type: "bot", text: response.data.answer },
      ]);

      setQuestion("");
    } catch (error) {
      console.error("Error asking question:", error);
      toast.error("An error occurred while fetching the answer.");
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      {/* About Button */}
      <Box display="flex" justifyContent="flex-end" mb={1}>
        <IconButton onClick={() => setAboutOpen(true)} aria-label="About">
          <InfoIcon color="primary" />
        </IconButton>
      </Box>

      {/* Chat List */}
      <List sx={{ maxHeight: 340, overflowY: "auto" }}>
        {chatHistory.map((message, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              justifyContent:
                message.type === "user" ? "flex-start" : "flex-end",
            }}
          >
            <ListItemText
              primary={message.text}
              sx={{
                backgroundColor:
                  message.type === "user" ? "#f1f1f1" : "#e1f7d5",
                borderRadius: "5px",
                padding: "10px",
                margin: "5px 0",
                maxWidth: "70%",
                textWrap: "wrap",
                wordWrap: "break-word",
                animation: "popup 0.3s ease-in-out",
                "@keyframes popup": {
                  from: { opacity: 0, transform: "scale(0.95)" },
                  to: { opacity: 1, transform: "scale(1)" },
                },
              }}
            />
          </ListItem>
        ))}
        <div ref={bottomRef} />
      </List>

      <QuestionInput
        question={question}
        setQuestion={setQuestion}
        handleSubmit={handleSubmit}
      />
      <SampleQuestions setQuestion={setQuestion} />

      {/* About Dialog */}
      <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </Box>
  );
};

export default ChatBot;
