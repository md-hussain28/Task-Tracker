export interface Task {
    id: string;
    taskName: string;
    projectName: string;
    description: string;
    deadline: Date;
    priority: 'Critical' | 'Medium' | 'Low';
    status: 'DONE' | 'PENDING';
  }
  
  export interface TaskStore {
    tasks: Task[];
    addTask: (task: Task) => void;
    editTask: (id: string, updatedTask: Partial<Task>) => void;
    deleteTask: (id: string) => void;
   
  }