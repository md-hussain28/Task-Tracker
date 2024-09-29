import React from "react";
import { useTaskStore } from "../store/store";
import TaskForm from "../components/TaskForm";
import { Task } from "../store/interface";
import {
  Container,
  Typography,
  Box,
  Paper,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { AddTask as AddTaskIcon } from "@mui/icons-material";

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
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundImage: 'linear-gradient(to bottom right, #2C2C2C, #1E1E1E)',
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  // Ensure it takes up full height
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
}));

const AddTask: React.FC = () => {
  const { addTask } = useTaskStore();
  const isMobile = useMediaQuery(darkTheme.breakpoints.down('sm'));

  const handleSubmit = (task: Task) => {
    addTask({ ...task, id: new Date().toISOString() });
    console.log("Task Added:", task);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container 
        maxWidth="md" 
        sx={{ 
          height: '100vh', // Full height of the viewport
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
      >
        <StyledPaper elevation={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexGrow: 1, // Allow Box to take available space
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 4,
              }}
            >
              <AddTaskIcon
                sx={{
                  fontSize: isMobile ? 40 : 60,
                  mr: 2,
                  color: 'primary.main',
                }}
              />
              <Typography
                variant={isMobile ? "h4" : "h3"}
                component="h1"
                gutterBottom
                color="primary"
                fontWeight="bold"
              >
                Add New Task
              </Typography>
            </Box>
            <TaskForm onSubmit={handleSubmit} />
          </Box>
        </StyledPaper>
      </Container>
    </ThemeProvider>
  );
};

export default AddTask;
