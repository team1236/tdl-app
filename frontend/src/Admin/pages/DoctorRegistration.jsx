import React from 'react';
import { TextField, MenuItem, Button, Grid, Box } from '@mui/material';


const roles = ['Doctor', 'Nurse', 'Admin'];
const grades = ['A', 'B', 'C'];
const specialities = ['Cardiology', 'Neurology', 'Pediatrics'];

const DoctorRegistration = () => {
  return (
    <Box className="form-container">
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          {/* Basic Information */}
          <Grid item xs={12}>
            <h2>Basic Information</h2>
          </Grid>
          <Grid item xs={6}>
            <TextField label="First Name" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Last Name" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Email" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Phone" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Date of Birth"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label="Gender"
              fullWidth
              variant="outlined"
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Designated Body" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Designated Body (Recruiter)" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField label="GMC No" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Current Role" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Current Revalidation Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Appraisal Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label="Grade"
              fullWidth
              variant="outlined"
            >
              {grades.map((grade) => (
                <MenuItem key={grade} value={grade}>{grade}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label="Speciality"
              fullWidth
              variant="outlined"
            >
              {specialities.map((speciality) => (
                <MenuItem key={speciality} value={speciality}>{speciality}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Qualification" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Communication Preference"
              fullWidth
              variant="outlined"
            >
              <MenuItem value="Email">Email</MenuItem>
              <MenuItem value="Phone">Phone</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">Submit</Button>
            <Button variant="outlined" color="secondary">Cancel</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default DoctorRegistration;
