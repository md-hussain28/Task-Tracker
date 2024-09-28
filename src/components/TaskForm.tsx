// src/components/TaskForm.tsx
import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { Task } from '../store/interface'; // Adjust the import path accordingly

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
    priority: 'Medium', // Default priority
    status: 'PENDING', // Default status
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    }); // Reset form after submission
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: '20px auto' }}>
      <Typography variant="h4" gutterBottom>
        Create Task
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="taskName"
              label="Task Name"
              variant="outlined"
              value={task.taskName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="projectName"
              label="Project Name"
              variant="outlined"
              value={task.projectName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="description"
              label="Description"
              variant="outlined"
              value={task.description}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="deadline"
              label="Deadline"
              type="date"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={task.deadline.toISOString().substring(0, 10)} // Format date
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              name="priority"
              label="Priority"
              variant="outlined"
              value={task.priority}
              onChange={handleChange}
              required
            >
              <MenuItem value="Critical">Critical</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              name="status"
              label="Status"
              variant="outlined"
              value={task.status}
              onChange={handleChange}
              required
            >
              <MenuItem value="DONE">DONE</MenuItem>
              <MenuItem value="PENDING">PENDING</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Task
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default TaskForm;
