import React, { useState } from "react";
import { useTaskStore } from "../store/store";
import MultipleSelectChip from "../components/MultiSelect";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
  Chip,
  Divider,
  Paper,
  Fade,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TaskList: React.FC = () => {
  const { tasks } = useTaskStore();
  const [openTask, setOpenTask] = useState<string | null>(null);
  const [selectedPriority, setSelectedPriority] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<string[]>([]);

  // Get unique project names from tasks
  const projectOptions = Array.from(new Set(tasks.map(task => task.projectName)));
  
  const priorityOptions = ["Critical", "Medium", "Low"];
  const statusOptions = ["DONE", "PENDING"];

  const handleToggle = (taskId: string) => {
    setOpenTask(openTask === taskId ? null : taskId);
  };

  // Filter tasks based on selected priority, status, and project
  const filteredTasks = tasks.filter((task) => {
    const matchesPriority =
      selectedPriority.length === 0 || selectedPriority.includes(task.priority);
    const matchesStatus =
      selectedStatus.length === 0 || selectedStatus.includes(task.status);
    const matchesProject =
      selectedProject.length === 0 || selectedProject.includes(task.projectName);
    return matchesPriority && matchesStatus && matchesProject;
  });

  return (
    <Fade in={true} timeout={1000}>
      <Paper
        elevation={3}
        style={{ padding: "20px", maxWidth: "900px", margin: "20px auto" }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ color: "#1976d2" }}
        >
          Task List
        </Typography>

        {/* Filters Section */}
        <div style={{ marginBottom: "20px", display: "flex", gap: "20px" }}>
          <MultipleSelectChip
            label="Priority"
            options={priorityOptions}
            selectedOptions={selectedPriority}
            onChange={setSelectedPriority}
          />
          <MultipleSelectChip
            label="Status"
            options={statusOptions}
            selectedOptions={selectedStatus}
            onChange={setSelectedStatus}
          />
          <MultipleSelectChip
            label="Project"
            options={projectOptions}
            selectedOptions={selectedProject}
            onChange={setSelectedProject}
          />
        </div>

        {/* Task List */}
        <List>
          {filteredTasks.map((task) => (
            <div key={task.id}>
              <ListItem
                onClick={() => handleToggle(task.id)}
                style={{
                  backgroundColor: "#f5f5f5",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease",
                }}
                component="li"
              >
                <ListItemText
                  primary={task.taskName}
                  secondary={`Project: ${task.projectName}`}
                />
                <IconButton
                  edge="end"
                  aria-label="expand"
                  size="small"
                  style={{ color: "#1976d2" }}
                >
                  <ExpandMoreIcon
                    style={{
                      transform:
                        openTask === task.id ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </IconButton>
              </ListItem>
              <Collapse in={openTask === task.id} timeout="auto" unmountOnExit>
                <Paper elevation={1} style={{ padding: "10px", marginBottom: "10px" }}>
                  <Typography variant="body1">
                    <strong>Description:</strong> {task.description}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Deadline:</strong>{" "}
                    {task.deadline.toLocaleDateString()}
                  </Typography>
                  <Chip
                    label={task.priority}
                    color={
                      task.priority === "Critical"
                        ? "error"
                        : task.priority === "Medium"
                        ? "warning"
                        : "success"
                    }
                    style={{ marginRight: "5px" }}
                  />
                  <Chip
                    label={task.status}
                    color={task.status === "DONE" ? "success" : "default"}
                  />
                </Paper>
              </Collapse>
              <Divider />
            </div>
          ))}
        </List>
      </Paper>
    </Fade>
  );
};

export default TaskList;
