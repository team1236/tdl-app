import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import {
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "../styles/DataTable.css";
import FilterSidebar from "./FilterBarComponent";
const columns = [
  {
    field: "doctorName",
    headerName: "Doctor Name",
    width: 150,
    valueGetter: (value, row) => `${row.firstname || ""} ${row.lastname || ""}`,
  },
  {
    field: "gmcNo",
    headerName: "GMC No.",
    width: 150,
    type: "number",
  },
  {
    field: "phonenumber",
    headerName: "Phone",
    type: "number",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    type: "number",
    width: 200,
  },
  {
    field: "appraisalDate",
    headerName: "Last Appraisal Date",
    width: 150,
  },
  {
    field: "revalidationDate",
    headerName: "Current Revalidation Date",
    width: 150,
  },
  {
    field: "designatedBody",
    headerName: "Designated Body Org",
    width: 150,
  },
  {
    field: "registeredBy",
    headerName: "Registered By",
    width: 150,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: () => <button>Edit</button>,
  },
];

const rows = [
  {
    _id: "621f92279879330009015a4c",
    firstname: "Mirza Farooq",
    lastname: "Baig",
    phonenumber: "07463716111",
    designatedBody: "Emergency Department Staffing Ltd",
    designatedBodyId: "61e14655f8e66f000a4d8189",
    email: "docfarooqbaig@yahoo.com",
    gmcNo: "7321512",
    revalidationDate: 1818720000000,
    appraisalDate: 1653868800000,
    isEnabled: true,
    registeredBy: "admin",
    appraisalStatus: "black",
    revalidationStatus: null,
    __typename: "Doctor",
  },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const CustomFab = styled(Fab)({
  backgroundColor: "#DC2626",
  "&:hover": {
    backgroundColor: "#B91C1C",
  },
});
const CustomFilterFab = styled(Fab)({
  backgroundColor: "#0A62C9",
  "&:hover": {
    backgroundColor: "#084A9E",
  },
});

export default function DataTable() {
  const [pageSize, setPageSize] = React.useState(10);
  const [searchText, setSearchText] = React.useState("");
  const [filteredRows, setFilteredRows] = React.useState(rows);
  const [filterOpen, setFilterOpen] = React.useState(false);

  const handleFilterOpen = () => {
    setFilterOpen(true);
  };

  const handleFilterClose = () => {
    setFilterOpen(false);
  };
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchText(value);

    const filtered = rows.filter((row) => {
      return (
        row.firstname.toLowerCase().includes(value.toLowerCase()) ||
        row.lastname.toLowerCase().includes(value.toLowerCase()) ||
        row.email.toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredRows(filtered);
  };

  return (
    <>
      <div className="sub-header-data">
        <div
          style={{
            fontSize: "32px",
            fontWeight: "600",
            marginLeft: "10px",
            color: "#1e293b",
          }}
        >
          Doctors List
        </div>
        <div className="button-position">
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginRight: "15%",
            }}
          >
            <img
              src="/search.svg"
              style={{
                height: "24px",
                position: "absolute",
                left: "30px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              style={{
                width: "100%",
                marginLeft: "25px",
                marginTop: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
                border: "#1E1E1E solid 1px",
                outline: "none",
                height: "30px",
                fontSize: "16px",
                paddingLeft: "40px",
              }}
              value={searchText}
              onChange={handleSearchChange}
              placeholder="Search"
            />
          </div>
          <Tooltip title="Doctor Registration" arrow>
            <div className="doctor-regiter-button">
              <button className="dotor-register-btn">
                <AddIcon /> Doctor Registration
              </button>
            </div>
          </Tooltip>
          <Tooltip title="Export" arrow>
            <CustomFab size="medium" aria-label="add">
              <img src="/export.svg" style={{ height: "24px" }} />
            </CustomFab>
          </Tooltip>
          <Tooltip title="Filter" arrow>
            <CustomFilterFab size="medium" aria-label="add" onClick={handleFilterOpen}>
              <img
                src="/filter.svg"
                style={{ height: "24px" }}
                alt="filter icon"
              />
            </CustomFilterFab>
          </Tooltip>
          <FilterSidebar open={filterOpen} onClose={handleFilterClose} />
        </div>
      </div>

      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[10, 20, 50, 100, 150, 200, 500]}
          getRowId={(row) => row._id}
          checkboxSelection
          disableRowSelectionOnClick
        />
        {/* <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="page-size-select-label">Rows per page</InputLabel>
        <Select
          labelId="page-size-select-label"
          value={pageSize}
          label="Rows per page"
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 50, 100, 150, 200, 500].map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
      </Box>
    </>
  );
}
