import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#00796b', // Custom primary color
    },
    secondary: {
      main: '#f44336', // Custom secondary color
    },
    background: {
      default: '#fafafa', // Default background color
    },
    text: {
      primary: '#333', // Text color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none', // Disable all caps for buttons
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff', // Paper background color
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Paper shadow
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded corners for buttons
          padding: '10px 20px', // Button padding
        },
      },
    },
  },
});

export default Theme;
