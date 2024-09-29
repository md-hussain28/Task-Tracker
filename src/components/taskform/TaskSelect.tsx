import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, Grow, SelectChangeEvent } from '@mui/material';

interface TaskSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void; // Updated type
  options: { value: string; label: string }[];
}

const TaskSelect: React.FC<TaskSelectProps> = ({ label, name, value, onChange, options }) => (
  <Grow in={true} timeout={1200}>
    <FormControl fullWidth variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select name={name} value={value} onChange={onChange} label={label}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grow>
);

export default TaskSelect;
