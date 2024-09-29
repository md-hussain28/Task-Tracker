// CustomPieChart.tsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Box, Typography } from '@mui/material';

interface CustomPieChartProps {
    title: string;                // Title for the chart
    data: { name: string; value: number }[]; // Data for the pie chart
    colors: string[];             // Array of colors for the pie sections
    width?: number;               // Optional width
    height?: number;              // Optional height
}

const CustomPieChart: React.FC<CustomPieChartProps> = ({ title, data, colors, width = 400, height = 300 }) => {
    return (
        <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h6" sx={{ color: '#BB86FC', marginBottom: 2 }}>
                {title}
            </Typography>
            <PieChart width={width} height={height}>
                <Pie 
                    data={data} 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={100} 
                    fill="#8884d8" 
                    label 
                    dataKey="value" // Specify the dataKey here
                >
                    {data.map((_, index) => (  // Use '_' to indicate unused variable
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </Box>
    );
};

export default CustomPieChart;
