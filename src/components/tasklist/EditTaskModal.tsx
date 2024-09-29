// EditTaskModal.tsx
import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { Task } from "../../store/interface.ts"; 

interface EditTaskModalProps {
  open: boolean;
  task: Task | null;
  onClose: () => void;
  onSave: (updatedTask: Task) => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ open, task, onClose, onSave }) => {
  const [taskName, setTaskName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<'Critical' | 'Medium' | 'Low'>("Medium"); // Default to Medium
  const [deadline, setDeadline] = useState<string>("");

  useEffect(() => {
    if (task) {
      setTaskName(task.taskName);
      setDescription(task.description);
      setPriority(task.priority);
      setDeadline(task.deadline.toISOString().substring(0, 10)); // Format the date for input
    }
  }, [task]);

  const handleSave = () => {
    if (task) {
      const updatedTask: Task = { 
        ...task, 
        taskName, 
        description, 
        priority, 
        deadline: new Date(deadline), // Convert back to Date
      };
      onSave(updatedTask);
      onClose(); // Close the modal after saving
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Edit Task
        </Typography>
        <TextField
          label="Task Name"
          fullWidth
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Description"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Priority"
          fullWidth
          select
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'Critical' | 'Medium' | 'Low')}
          margin="normal"
          SelectProps={{
            native: true,
          }}
        >
          <option value="Critical">Critical</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </TextField>
        <TextField
          label="Deadline"
          type="date"
          fullWidth
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" onClick={handleSave} color="primary">
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditTaskModal;
