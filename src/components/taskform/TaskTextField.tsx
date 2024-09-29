import React from 'react';
import { TextField, Grow, InputAdornment } from '@mui/material';

interface TaskTextFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  multiline?: boolean;
  rows?: number;
  type?: string;
  icon?: React.ReactNode;
}

const TaskTextField: React.FC<TaskTextFieldProps> = ({
  label,
  name,
  value,
  onChange,
  multiline = false,
  rows = 1,
  type = 'text',
  icon,
}) => (
  <Grow in={true} timeout={1000}>
    <TextField
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      multiline={multiline}
      rows={rows}
      type={type}
      variant="outlined"
      InputProps={{
        startAdornment: icon ? (
          <InputAdornment position="start">{icon}</InputAdornment>
        ) : undefined,
      }}
      // Responsive styles
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '12px', // Customize border radius
        },
        // Adjust font size and padding for different screen sizes
        fontSize: {
          xs: '0.875rem', // 14px for extra-small screens
          sm: '1rem',     // 16px for small screens and up
        },
        padding: {
          xs: '8px 10px', // Adjust padding for mobile
          sm: '12px 14px', // Standard padding for larger screens
        },
      }}
    />
  </Grow>
);

export default TaskTextField;
