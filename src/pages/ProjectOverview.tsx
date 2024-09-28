// src/pages/ProjectOverview.tsx
import React from "react";
import { useTaskStore } from "../store/store"; // import task store
import { CircularProgress, Typography, Box, Grid, Paper } from "@mui/material";
import { Doughnut } from "react-chartjs-2"; // Pie chart component from react-chartjs-2
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; 

ChartJS.register(ArcElement, Tooltip, Legend);

const ProjectOverview: React.FC = () => {
  const { tasks } = useTaskStore();

  // Helper function to get task stats
  const getStats = () => {
    const doneTasks = tasks.filter((task) => task.status === "DONE").length;
    const pendingTasks = tasks.filter((task) => task.status === "PENDING").length;
    const criticalTasks = tasks.filter((task) => task.priority === "Critical").length;
    const mediumTasks = tasks.filter((task) => task.priority === "Medium").length;
    const lowTasks = tasks.filter((task) => task.priority === "Low").length;

    const totalTasks = tasks.length;
    const completedPercentage = totalTasks ? (doneTasks / totalTasks) * 100 : 0;

    return {
      doneTasks,
      pendingTasks,
      criticalTasks,
      mediumTasks,
      lowTasks,
      totalTasks,
      completedPercentage,
    };
  };

  const stats = getStats();

  // Pie chart data for status breakdown
  const statusData = {
    labels: ["Done", "Pending"],
    datasets: [
      {
        label: "# of Tasks",
        data: [stats.doneTasks, stats.pendingTasks],
        backgroundColor: ["#4caf50", "#f44336"],
        borderColor: ["#fff"],
        borderWidth: 1,
      },
    ],
  };

  // Pie chart data for priority breakdown
  const priorityData = {
    labels: ["Critical", "Medium", "Low"],
    datasets: [
      {
        label: "# of Tasks",
        data: [stats.criticalTasks, stats.mediumTasks, stats.lowTasks],
        backgroundColor: ["#f44336", "#ff9800", "#4caf50"],
        borderColor: ["#fff"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Project Overview
      </Typography>

      {/* Circular progress for completed percentage */}
      <Grid container justifyContent="center">
        <Box position="relative" display="inline-flex" margin="20px">
          <CircularProgress
            variant="determinate"
            value={stats.completedPercentage}
            size={100}
            thickness={4}
            color="primary"
          />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="caption" component="div" color="textSecondary">
              {`${Math.round(stats.completedPercentage)}%`}
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Status breakdown pie chart */}
      <Grid container spacing={2} justifyContent="center" marginTop={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6" align="center">
              Status Breakdown
            </Typography>
            <Doughnut data={statusData} />
          </Paper>
        </Grid>

        {/* Priority breakdown pie chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6" align="center">
              Priority Breakdown
            </Typography>
            <Doughnut data={priorityData} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectOverview;
