// src/pages/AddTask.tsx
import React from "react";
import { useTaskStore } from "../store/store.ts";
import TaskForm from "../components/TaskForm.tsx";
import { Task } from "../store/interface.ts";


const AddTask: React.FC = () => {
  const { addTask } = useTaskStore();
  const handleSubmit = (task: Task) => {
    addTask({ ...task, id: new Date().toISOString() });
    console.log("Task Added:", task);
  };
  return (
    <>
      <h1>Add Task Page</h1>
      <TaskForm onSubmit={handleSubmit} />
    </>
  );
};

export default AddTask;
