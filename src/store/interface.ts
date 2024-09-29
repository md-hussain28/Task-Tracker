export interface Task {
  id: string;                      // Unique identifier for the task
  taskName: string;               // The name of the task
  projectName: string;            // The project this task belongs to
  description: string;            // A detailed description of the task
  deadline: Date;                 // The deadline for the task
  priority: 'Critical' | 'Medium' | 'Low'; // Priority level of the task
  status: 'DONE' | 'PENDING';     // Current status of the task
  createdAt?: Date;                // Timestamp when the task was created (optional)
  updatedAt?: Date;                // Timestamp when the task was last updated (optional)
}

export interface TaskStore {
  tasks: Task[];                  // Array of tasks
  addTask: (task: Task) => void;  // Function to add a new task
  editTask: (id: string, updatedTask: Partial<Task>) => void; // Function to edit a task
  deleteTask: (id: string) => void; // Function to delete a task
  markTaskAsDone: (id: string) => void; // Function to mark a task as done
  getSortedTasks?: () => void;     // Function to retrieve sorted tasks
}
