// src/components/MainLayout.tsx
import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar'

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box
                sx={{
                    width: '250px',
                    bgcolor: '#f0f0f0',
                    minHeight: '100vh',
                }}
            >
                <Sidebar />
            </Box>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
                {children}
            </Box>
        </Box>
    );
};

export default MainLayout;
