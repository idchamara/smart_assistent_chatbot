import React from 'react';
import { Button, Box, Typography } from '@mui/material';

const SampleQuestions = ({ setQuestion }) => {
  const sampleQuestions = [
    "What are the best laptops you have?",
    "What's the price of iPhone 14 Pro?",
    "Do you have gaming laptops?",
    "Can I return a device?",
    "What are your store hours?",
    "Do you offer installment plans?"
  ];

  return (
    <Box sx={{ marginTop: '20px' }}>
      <Typography variant="h6">Try asking one of these:</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' ,marginTop: '10px'}}>
        {sampleQuestions.map((question, index) => (
          <Button
            key={index}
            variant="outlined"
            onClick={() => setQuestion(question)}  // Set question when clicked
          >
            {question}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default SampleQuestions;
