// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import AddTask from './pages/AddTask';
import TaskList from './pages/TaskList';
import ProjectOverview from './pages/ProjectOverview';

const App: React.FC = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    
                    <Route path="/add-task" element={<AddTask />} />
                    <Route path="/task-list" element={<TaskList />} />
                    <Route path="/project-overview" element={<ProjectOverview />} />
                    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                </Routes>
            </MainLayout>
        </Router>
    );
};
 
export default App;
