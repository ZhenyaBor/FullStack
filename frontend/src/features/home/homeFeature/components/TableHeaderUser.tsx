import { TableCell, tableCellClasses, styled, TableRow } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 17,
  },
}));

export const TableHeaderUser = (): JSX.Element => (
  <TableRow>
    <StyledTableCell>ID</StyledTableCell>
    <StyledTableCell align="left">User Name</StyledTableCell>
    <StyledTableCell align="left">Email</StyledTableCell>
    <StyledTableCell align="left">Roles</StyledTableCell>
    <StyledTableCell align="left">Date Added</StyledTableCell>
    <StyledTableCell align="center">Action</StyledTableCell>
  </TableRow>
);
