import { createTheme } from '@mui/material/styles';

// Custom function for creating transitions
const createTransition = (_props: string | string[], _options?: object) => {
  return `all 300ms ease`;
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#BB86FC',
    },
    secondary: {
      main: '#03DAC6',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
  shape: {
    borderRadius: 12,
  },
  transitions: {
    create: createTransition, // Use the custom transition function
    duration: {
      standard: 300,
    },
  },
});

export default darkTheme;
