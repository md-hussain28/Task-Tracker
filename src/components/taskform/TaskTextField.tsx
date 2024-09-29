import React from 'react';
import { TextField, Grow } from '@mui/material';
import { InputAdornment } from '@mui/material';

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
      InputProps={
        icon
          ? {
              startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
            }
          : undefined
      }
    />
  </Grow>
);

export default TaskTextField;
