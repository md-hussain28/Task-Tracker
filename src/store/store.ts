import { create } from 'zustand'
import {Task,TaskStore} from './interface'


export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
    editTask: (id: string, updatedTask: Partial<Task>) => set((state) => ({
        tasks: state.tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)),
    })),
    deleteTask: (id: string) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
    
}));