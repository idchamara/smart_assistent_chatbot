import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

const AboutDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>User Manual – Smart Assistant Chatbot</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Welcome to Smart Assistant! 💬<br /><br />
          ✅ You can ask product questions like:
          <ul>
            <li>"I want to buy a smartphone under $1000"</li>
            <li>"What are the best laptops you sell?"</li>
            <li>"Do you offer warranty?"</li>
          </ul>
          ✅ The chatbot supports small talk (hi, thanks, how are you)<br />
          ✅ You can teach it new answers using the feedback prompt<br />
          ✅ All tech info is either from our knowledge base or powered by AI<br />
          <br />
          Enjoy chatting! 🤖
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AboutDialog;
