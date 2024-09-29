// src/components/MultiSelect.tsx
import React from "react";
import { Chip, InputLabel, MenuItem, Select, SelectChangeEvent, FormControl } from "@mui/material";

interface MultipleSelectChipProps {
  label: string;
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}

const MultipleSelectChip: React.FC<MultipleSelectChipProps> = ({
  label,
  options,
  selectedOptions,
  onChange,
}) => {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    onChange(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl style={{ minWidth: 200 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={selectedOptions}
        onChange={handleChange}
        renderValue={(selected) => (
          <div>
            {selected.map((value) => (
              <Chip key={value} label={value} style={{ marginRight: "5px" }} />
            ))}
          </div>
        )}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleSelectChip;
