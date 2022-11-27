import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './table.css';
export default function BasicTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="head">
          <TableRow>
            <TableCell className="tableHead">Id</TableCell>
            <TableCell className="tableHead">Name</TableCell>
            <TableCell className="tableHead">Email</TableCell>
            <TableCell className="tableHead">Gender</TableCell>
            <TableCell className="tableHead">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className="data">{row.name}</TableCell>
              <TableCell className="data" >{row.email}</TableCell>
              <TableCell className="data" >{row.gender}</TableCell>
              <TableCell className="data" >{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
