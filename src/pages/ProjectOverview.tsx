// ProjectOverview.tsx
import React from 'react';
import { useTaskStore } from '../store/store.ts';
import { Box, Grid, Typography } from '@mui/material';
import CustomPieChart from '../components/chart/CustomPieChart';
import { Task } from '../store/interface.ts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF00FF'];
type PriorityLevel = 'Critical' | 'Medium' | 'Low';
// Function to get task metrics
const getTaskMetrics = (tasks: Task[]) => {
    const metrics = {
        completed: 0,
        pending: 0,
        priority: { Critical: 0, Medium: 0, Low: 0 } as Record<PriorityLevel, number>,
        project: {} as Record<string, number>,
    };

    tasks.forEach(task => {
        // Count completed and pending tasks
        if (task.status === 'DONE') metrics.completed++;
        else if (task.status === 'PENDING') metrics.pending++;

        // Count tasks by priority
        metrics.priority[task.priority] = (metrics.priority[task.priority] || 0) + 1;

        // Count tasks by project
        metrics.project[task.projectName] = (metrics.project[task.projectName] || 0) + 1;
    });

    return metrics;
};

// Component definition
const ProjectOverview: React.FC = () => {
    const tasks = useTaskStore((state) => state.tasks);
    const metrics = getTaskMetrics(tasks);

    // Prepare data for the pie charts
    const statusData = [
        { name: 'Completed', value: metrics.completed },
        { name: 'Pending', value: metrics.pending },
    ];

    const priorityData = Object.keys(metrics.priority).map(key => ({
        name: key,
        value: metrics.priority[key as PriorityLevel] ,
    }));

    const projectData = Object.keys(metrics.project).map(key => ({
        name: key,
        value: metrics.project[key],
    }));

    return (
        <Box sx={{ padding: 4, backgroundColor: '#121212', minHeight: '100vh' }}>
            <Typography variant="h4" color="white" gutterBottom>
                Project Overview
            </Typography>

            <Typography variant="h6" color="white">
                Total Tasks: {metrics.completed + metrics.pending}
            </Typography>
            <Typography variant="h6" color="white">
                Completed Tasks: {metrics.completed}
            </Typography>
            <Typography variant="h6" color="white">
                Pending Tasks: {metrics.pending}
            </Typography>
            <Typography variant="h6" color="white">
                Critical Tasks: {metrics.priority.Critical}
            </Typography>
            <Typography variant="h6" color="white">
                Medium Priority Tasks: {metrics.priority.Medium}
            </Typography>
            <Typography variant="h6" color="white">
                Low Priority Tasks: {metrics.priority.Low}
            </Typography>

            <Grid container spacing={4} sx={{ marginTop: 2 }}>
                <Grid item xs={12} sm={6}>
                    <CustomPieChart title="Task Completion Status" data={statusData} colors={COLORS} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomPieChart title="Task Priority Distribution" data={priorityData} colors={COLORS} />
                </Grid>
                <Grid item xs={12}>
                    <CustomPieChart title="Tasks Distribution by Project" data={projectData} colors={COLORS} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProjectOverview;
