# Task Tracker

A modern task management web application built using **React**, **TypeScript**, **Vite**, and **Material UI (MUI)**. The project supports task creation, editing, and tracking, with state management via **Zustand**, chart visualizations through **Chart.js**, and routing powered by **React Router**.

- **Live Demo**: [Task Tracker Live](https://task-tracker-indol-ten.vercel.app/)
- **Repository**: [GitHub Repository](https://github.com/md-hussain28/Task-Tracker/tree/main)

---

## Features

- **Task Management**: Create, edit, and delete tasks.
- **Charts**: Visualize task data with charts.
- **Responsive UI**: Styled using **Material UI (MUI)** for a sleek, modern look.
- **State Management**: Global state management using **Zustand**.
- **Fast Development**: Developed with **Vite** for fast development and build processes.
- **Routing**: Navigate between different views using **React Router**.

---

## Project Setup

### Requirements:

- **Node.js** (v14.x or later)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/md-hussain28/Task-Tracker.git
   cd Task-Tracker
   npm install
   npm run dev



## Key Components

- **MainLayout**: The root layout that includes the Sidebar and renders content.
- **TaskForm**: Handles task creation and editing through a form.
- **TaskList**: Displays tasks and supports filtering.
- **EditTaskModal**: A modal dialog for editing tasks.
- **CustomPieChart**: Displays task data in a pie chart using Chart.js.
- **Sidebar**: Provides navigation to different sections of the application.

## Design Choices

- **Zustand**: Chosen for state management due to its simplicity and lightweight nature.
- **Material UI (MUI)**: Used for a modern and responsive user interface.
- **Chart.js**: Integrated for creating interactive charts to visualize task progress.
- **Vite**: Used for its fast development server and build times.

## Future Enhancements

- **User Authentication**: Implement user authentication to allow multiple users to manage their own tasks.
- **API Integration**: Move from local state to a backend API for task storage and retrieval.
- **Notifications**: Add a notification system to remind users of due tasks.
