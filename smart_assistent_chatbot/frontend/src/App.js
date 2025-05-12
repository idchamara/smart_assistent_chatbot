import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Container, Paper, Typography, Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import Theme from "./theme/Theme";
import ChatBot from "./components/ChatBot";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.9",
          minHeight: "100vh",
          paddingTop: "20px",
        }}
      >
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ padding: "20px", marginTop: "20px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <SmartToyIcon
                sx={{
                  fontSize: 80,
                  color: "#00796b",
                  marginBottom: "10px",
                }}
              />
              <div style={{ marginLeft: "20px" }}>
                <Typography variant="h4" >
                  Smart Assistant
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  Ask me anything!
                </Typography>
              </div>
            </div>
            <ChatBot />
          </Paper>
          {/* Toast Notification Container */}
          <ToastContainer position="bottom-right" autoClose={5000} />
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
