import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const QuestionInput = ({ question, setQuestion, handleSubmit }) => {
  return (
    <Box sx={{ marginTop: '20px' }}>
      <TextField
        label="Ask a question"
        fullWidth
        multiline 
        maxRows={2}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        sx={{ marginBottom: '10px' }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        Ask
      </Button>
    </Box>
  );
};

export default QuestionInput;
