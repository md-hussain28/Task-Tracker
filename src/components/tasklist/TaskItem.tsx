import React from 'react';
import {
  ListItem,
  ListItemText,
  Collapse,
  Typography,
  Chip,
  Paper,
  IconButton,
  Divider,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Task } from '../../store/interface';

interface TaskItemProps {
  task: Task;
  open: boolean;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onMarkAsDone: () => void;
  status:string
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  open,
  onToggle,
  onEdit,
  onDelete,
  onMarkAsDone,
  status
}) => {
  const timeLeft = Math.max(0, task.deadline.getTime() - new Date().getTime());
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  return (
    <div>
      <ListItem
        onClick={onToggle}
        style={{
          backgroundColor: "#424242",
          marginBottom: "10px",
          borderRadius: "5px",
          color: "#ffffff",
          padding: "10px",
          transition: "0.3s",
          cursor: "pointer",
        }}
      >
        <ListItemText
          primary={<Typography style={{ fontWeight: 'bold', color: "#ffffff" }}>{task.taskName}</Typography>}
          secondary={<Typography style={{ color: "#bdbdbd" }}>Project: {task.projectName}</Typography>}
        />
        <Box display="flex" alignItems="center" style={{ color: "#ffffff" }}>
          <Typography variant="body2" style={{ marginRight: '10px', color: "#ffeb3b" }}>
            {daysLeft}d {hoursLeft}h
          </Typography>
          <IconButton edge="end" aria-label="expand" size="small">
            <ExpandMoreIcon style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
              color: "#ffffff"
            }} />
          </IconButton>
          <IconButton edge="end" aria-label="mark as done" size="small" onClick={onMarkAsDone} style={{ color: "#76ff03" }}>
            {status=="PENDING"?"Mark as Done":"Done"}
          </IconButton>
          <IconButton edge="end" aria-label="edit" size="small" onClick={onEdit} style={{ color: "#ffffff" }}>
            Edit
          </IconButton>
          <IconButton edge="end" aria-label="delete" size="small" onClick={onDelete} style={{ color: "#ffffff" }}>
            Delete
          </IconButton>
        </Box>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Paper elevation={1} style={{
          padding: "20px",
          marginBottom: "10px",
          backgroundColor: "#303030",
          color: "#ffffff",
          borderRadius: "5px",
        }}>
          <Typography variant="h6" style={{ marginBottom: '10px', color: "#ff9800" }}>
            <strong>Description</strong>
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px', color: "#bdbdbd", lineHeight: 1.5 }}>
            {task.description}
          </Typography>
          <Typography variant="body2" style={{ marginBottom: '10px', color: "#90caf9" }}>
            <strong>Deadline:</strong> {task.deadline.toLocaleDateString()}
          </Typography>
          <Typography variant="body2" style={{ marginBottom: '10px', color: "#76ff03" }}>
            <strong>Time Remaining:</strong> {daysLeft}d {hoursLeft}h
          </Typography>
          <Box display="flex" justifyContent="flex-start">
            <Chip
              label={task.priority}
              color={task.priority === "Critical" ? "error" : task.priority === "Medium" ? "warning" : "success"}
              style={{ marginRight: "10px", marginTop: '5px' }}
            />
            <Chip
              label={task.status}
              color={task.status === "DONE" ? "success" : "default"}
              style={{ marginTop: '5px' }}
            />
          </Box>
        </Paper>
      </Collapse>
      <Divider style={{ backgroundColor: "#bdbdbd" }} />
    </div>
  );
};

export default TaskItem;
