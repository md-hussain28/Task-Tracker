// TaskList.tsx
import React, { useState } from "react";
import { useTaskStore } from "../store/store";
import MultipleSelectChip from "../components/tasklist/MultiSelect";
import { List, Paper, Typography, Fade, TextField } from "@mui/material";
import TaskItem from "../components/tasklist/TaskItem"; 
import EditTaskModal from "../components/tasklist/EditTaskModal"; 
import { Task } from "../store/interface";
import SearchIcon from '@mui/icons-material/Search';

const TaskList: React.FC = () => {
  const { tasks, editTask, deleteTask, markTaskAsDone } = useTaskStore();
  const [openTask, setOpenTask] = useState<string | null>(null);
  const [selectedPriority, setSelectedPriority] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<string[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [query, setQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const projectOptions = Array.from(new Set(tasks.map(task => task.projectName)));
  const priorityOptions = ["Critical", "Medium", "Low"];
  const statusOptions = ["DONE", "PENDING"];

  const handleToggle = (taskId: string) => {
    setOpenTask(openTask === taskId ? null : taskId);
  };

  // Filter tasks
  const filteredTasks = tasks
    .filter((task) => {
      const matchesPriority = selectedPriority.length === 0 || selectedPriority.includes(task.priority);
      const matchesStatus = selectedStatus.length === 0 || selectedStatus.includes(task.status);
      const matchesProject = selectedProject.length === 0 || selectedProject.includes(task.projectName);
      const lowercasedQuery = query.toLowerCase();
      const matchesQuery = (
        task.taskName.toLowerCase().includes(lowercasedQuery) ||
        task.description.toLowerCase().includes(lowercasedQuery) ||
        task.id.toLowerCase().includes(lowercasedQuery)
      );
      return matchesPriority && matchesStatus && matchesProject && matchesQuery;
    })
    .sort((a, b) => {
      if (a.status === "DONE" && b.status === "PENDING") return 1;
      if (a.status === "PENDING" && b.status === "DONE") return -1;
      return 0;
    });

  const handleEditOpen = (task: Task) => {
    setTaskToEdit(task);
    setEditModalOpen(true);
  };

  const handleEditSave = (updatedTask: Task) => {
    editTask(updatedTask.id, updatedTask);
  };

  const handleDelete = (taskId: string) => {
    deleteTask(taskId);
  };

  const handleMarkAsDone = (taskId: string) => {
    markTaskAsDone(taskId);
  };

  return (
    <>
      <Fade in={true} timeout={100}>
        <Paper elevation={3} style={{ padding: "20px", maxWidth: "900px", margin: "20px auto", backgroundColor: "#1e1e1e", borderRadius: "8px" }}>
          <Typography variant="h4" align="center" gutterBottom style={{ color: "#e0e0e0" }}>
            Task List
          </Typography>
          
          {/* Search Input */}
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
            <SearchIcon style={{ color: "#e0e0e0", marginRight: "8px" }} />
            <TextField
              variant="outlined"
              placeholder="Search tasks..."
              value={query}
              onChange={handleSearchChange}
              style={{ flex: 1, backgroundColor: "#2e2e2e", color: "#fff" }}
              InputProps={{
                style: {
                  color: '#fff',
                },
              }}
              InputLabelProps={{
                style: {
                  color: '#e0e0e0',
                },
              }}
            />
          </div>

          {/* Filters Section */}
          <div style={{ marginBottom: "20px", display: "flex", gap: "20px" }}>
            <MultipleSelectChip label="Priority" options={priorityOptions} selectedOptions={selectedPriority} onChange={setSelectedPriority} />
            <MultipleSelectChip label="Status" options={statusOptions} selectedOptions={selectedStatus} onChange={setSelectedStatus} />
            <MultipleSelectChip label="Project" options={projectOptions} selectedOptions={selectedProject} onChange={setSelectedProject} />
          </div>

          {/* Task List */}
          <List>
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                open={openTask === task.id}
                onToggle={() => handleToggle(task.id)}
                onEdit={() => handleEditOpen(task)}
                onDelete={() => handleDelete(task.id)}
                onMarkAsDone={() => handleMarkAsDone(task.id)}
                status={task.status}
              />
            ))}
          </List>

          {/* Edit Task Modal */}
          <EditTaskModal
            open={editModalOpen}
            task={taskToEdit}
            onClose={() => setEditModalOpen(false)}
            onSave={handleEditSave}
          />
        </Paper>
      </Fade>
    </>
  );
};

export default TaskList;
