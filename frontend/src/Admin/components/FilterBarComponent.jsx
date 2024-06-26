import React from 'react';
import { Drawer, IconButton, FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/FilterSidebar.css';

const FilterSidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div className="filter-sidebar">
        <div className="filter-header">
          <h2>Filter</h2>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <FormControl fullWidth className="filter-form-control">
          <InputLabel>Select Designated Body</InputLabel>
          <Select>
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Medsol Health">Medsol Health</MenuItem>
            <MenuItem value="Emergen">Emergen</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth className="filter-form-control">
          <InputLabel>Registered By</InputLabel>
          <Select>
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="User">User</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          className="filter-form-control"
          label="Appraisal Date"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          fullWidth
          className="filter-form-control"
          label="Revalidation Date"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
        <Button variant="contained" color="primary" className="filter-button">
          Apply Filter
        </Button>
        <Button variant="outlined" color="secondary" className="filter-button">
          Reset
        </Button>
      </div>
    </Drawer>
  );
};

export default FilterSidebar;
