import React from "react";
import { TextField, MenuItem, Button, Grid, Box } from "@mui/material";
import "../styles/DoctorRegister.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const roles = ["Doctor", "Nurse", "Admin"];
const grades = ["A", "B", "C"];
const specialities = ["Cardiology", "Neurology", "Pediatrics"];

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const DoctorRegistration = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="#6366f1"
      href="/"
      onClick={handleClick}
    >
      Doctor
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="#6366f1"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Registration
    </Link>,
  ];
  return (
    <div>
      <div className="breadcrumb">
          <Stack spacing={0.5}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        <div className="breadcrumb-text">Doctor Registration</div>
      </div>
      <div className="doctor-register-form-container">
        <Box className="form-container">
          <form noValidate autoComplete="off">
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <div className="form-title">Basic Information</div>
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
                <TextField select label="Gender" fullWidth variant="outlined">
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Designated Body"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Designated Body (Recruiter)"
                  fullWidth
                  variant="outlined"
                />
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
                <TextField select label="Grade" fullWidth variant="outlined">
                  {grades.map((grade) => (
                    <MenuItem key={grade} value={grade}>
                      {grade}
                    </MenuItem>
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
                    <MenuItem key={speciality} value={speciality}>
                      {speciality}
                    </MenuItem>
                  ))}
                </TextField>
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
                <TextField label="Qualification" fullWidth variant="outlined" />
              </Grid>

              <Grid item xs={12} className="button-container">
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ fontSize: "14px", color: "#1e293b" }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ fontSize: "14px", backgroundColor: "#0A62C9" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default DoctorRegistration;
