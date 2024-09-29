// TaskForm.tsx
import React, { useState } from 'react';
import { Box, Button, Typography, Grow, ThemeProvider } from '@mui/material';
import { Task } from '../store/interface';
import { AssignmentTurnedIn } from '@mui/icons-material';
import darkTheme from './taskform/theme'; // Import your theme
import StyledPaper from './taskform/StyledPaper';
import TaskTextField from './taskform/TaskTextField';
import TaskSelect from './taskform/TaskSelect';

interface TaskFormProps {
  onSubmit: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [task, setTask] = useState<Task>({
    id: '',
    taskName: '',
    projectName: '',
    description: '',
    deadline: new Date(),
    priority: 'Medium',
    status: 'PENDING',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>|any
  ) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: name === 'deadline' ? new Date(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(task);
    setTask({
      id: '',
      taskName: '',
      projectName: '',
      description: '',
      deadline: new Date(),
      priority: 'Medium',
      status: 'PENDING',
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <StyledPaper theme={darkTheme}>
        <Typography variant="h4" gutterBottom color="primary" align="center" fontWeight="bold">
          Create New Task
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display="grid" gap={3} gridTemplateColumns="repeat(2, 1fr)">
            <TaskTextField
              label="Task Name"
              name="taskName"
              value={task.taskName}
              onChange={handleChange}
              icon={<AssignmentTurnedIn color="primary" />}
            />
            <TaskTextField
              label="Project Name"
              name="projectName"
              value={task.projectName}
              onChange={handleChange}
              icon={<AssignmentTurnedIn color="primary" />}
            />
            <Grow in={true} timeout={1400}>
              <Box gridColumn="1 / -1">
                <TaskTextField
                  label="Description"
                  name="description"
                  value={task.description}
                  onChange={handleChange}
                  multiline
                  rows={4}
                />
              </Box>
            </Grow>
            <TaskTextField
              label="Deadline"
              name="deadline"
              value={task.deadline.toISOString().split('T')[0]}
              type="date"
              onChange={handleChange}
              icon={<AssignmentTurnedIn color="primary" />}
            />
            <TaskSelect
              label="Priority"
              name="priority"
              value={task.priority}
              onChange={handleChange}
              options={[
                { value: 'Critical', label: 'Critical' },
                { value: 'Medium', label: 'Medium' },
                { value: 'Low', label: 'Low' },
              ]}
            />
            <TaskSelect
              label="Status"
              name="status"
              value={task.status}
              onChange={handleChange}
              options={[
                { value: 'DONE', label: 'Done' },
                { value: 'PENDING', label: 'Pending' },
              ]}
            />
            <Box gridColumn="1 / -1">
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                startIcon={<AssignmentTurnedIn />}
              >
                Create Task
              </Button>
            </Box>
          </Box>
        </form>
      </StyledPaper>
    </ThemeProvider>
  );
};

export default TaskForm;
