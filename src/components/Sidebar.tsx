// src/components/Sidebar.tsx
import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div style={{ width: 250 }}>
            <List>
                <ListItem>
                    <Link to="/add-task" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemText primary="Add Task" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/task-list" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemText primary="Task List" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/project-overview" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemText primary="Project Overview" />
                    </Link>
                </ListItem>
            </List>
            <Divider />
        </div>
    );
};

export default Sidebar;
