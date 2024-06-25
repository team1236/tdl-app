import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { formatDateTime } from "../../utils/helper";
function createData(name, appraiser, date, time, status) {
  return { name, appraiser, date, time, status };
}

export default function AdminTableComponent({ data }) {
  const rows = [];

  data?.map((item) => {
    rows.push(
      createData(
        item?.doctorName,
        item?.appraiserName,
        formatDateTime(item?.meetingDate)?.formattedDate,
        formatDateTime(item?.meetingDate)?.formattedTime,
        item?.status
      )
    );
  });
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#64748b", fontSize: "12px" }}>
              Doctor Name
            </TableCell>
            <TableCell
              sx={{ color: "#64748b", fontSize: "12px" }}
              align="right"
            >
              Appraiser/Lead Appraiser
            </TableCell>
            <TableCell
              sx={{ color: "#64748b", fontSize: "12px" }}
              align="right"
            >
              Date&nbsp;
            </TableCell>
            <TableCell
              sx={{ color: "#64748b", fontSize: "12px" }}
              align="right"
            >
              Time&nbsp;
            </TableCell>
            <TableCell
              sx={{ color: "#64748b", fontSize: "12px" }}
              align="right"
            >
              Status&nbsp;
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell
                sx={{ color: "#1E293B", fontSize: "14px" }}
                align="right"
              >
                {row.appraiser}
              </TableCell>
              <TableCell
                sx={{ color: "#1E293B", fontSize: "14px" }}
                align="right"
              >
                {row.date}
              </TableCell>
              <TableCell
                sx={{ color: "#1E293B", fontSize: "14px" }}
                align="right"
              >
                {row.time}
              </TableCell>
              <TableCell
                sx={{ color: "#1E293B", fontSize: "14px" }}
                align="right"
              >
                {row.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
