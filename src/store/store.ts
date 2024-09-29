import { create } from 'zustand';
import { Task, TaskStore } from './interface';

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [], // Initialize an empty array of tasks

    // Function to add a new task
    addTask: (task: Task) => set((state) => ({
        tasks: [...state.tasks, { ...task, createdAt: new Date(), updatedAt: new Date() }]
    })),

    // Function to edit an existing task
    editTask: (id: string, updatedTask: Partial<Task>) => set((state) => ({
        tasks: state.tasks.map((task) => 
            task.id === id ? { ...task, ...updatedTask, updatedAt: new Date() } : task
        ),
    })),

    // Function to delete a task
    deleteTask: (id: string) => set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id)
    })),

    // Function to mark a task as done
    markTaskAsDone: (id: string) => set((state) => ({
        tasks: state.tasks.map((task) => 
            task.id === id ? { ...task, status: 'DONE', updatedAt: new Date() } : task
        ),
    })),

    // Function to retrieve sorted tasks (optional, sorted by deadline)
    getSortedTasks: () => set((state) => ({
        tasks: [...state.tasks].sort((a, b) => {
            return a.deadline.getTime() - b.deadline.getTime();
        }),
    })),
}));
