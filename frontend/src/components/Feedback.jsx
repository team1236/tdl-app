import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Feedback = ({ feedback_form_graph }) => {
  const [appraisal, setAppraisal] = React.useState("");
  const [filter, setFilter] = React.useState("");

  const handleChangeAppraisal = (event) => {
    setAppraisal(event.target.value);
  };
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const chartData =
    feedback_form_graph &&
    feedback_form_graph?.categories?.map((category, index) => {
      const dataPoint = { name: category };
      feedback_form_graph &&
        feedback_form_graph?.series?.forEach((serie) => {
          dataPoint[serie?.name] = serie?.data[index];
        });
      return dataPoint;
    });

  return (
    <section className="admin-feedback">
      <div className="admin-feedback-select">
        <div className="admin-common-font">Feedbacks</div>
        <div className="admin-feedback-select-sub">
          <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Appraisal Year
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={appraisal}
                label="Appraisal Year"
                onChange={handleChangeAppraisal}
              >
                <MenuItem value={10}>2024/2025</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filter}
                label="Type Filter"
                onChange={handleChangeFilter}
              >
                <MenuItem value={10}>Patient</MenuItem>
                <MenuItem value={20}>Colleague</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className="admin-feedback-chart">
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 150 }}
            fontSize={12}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" layout="horizontal" align="center"/>
            {feedback_form_graph &&
              feedback_form_graph?.series?.map((serie, index) => (
                <Bar key={index} dataKey={serie?.name} fill={serie?.color} />
              ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Feedback;
