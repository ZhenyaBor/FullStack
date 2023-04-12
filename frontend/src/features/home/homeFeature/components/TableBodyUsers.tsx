import { TableCell, Stack, IconButton, TableRow } from "@mui/material";
import { MdClear } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import moment from "moment";
import { User } from "../../interface";
import { MutationFunction } from "@apollo/client";
import { useNavigate } from "react-router-dom";

type Props = User & {
  removeUser: MutationFunction;
  handleOpenModal: () => void;
  setSaveId: (id: number) => void;
};

export const TableBodyUser = ({
  roles,
  id,
  userName,
  email,
  dateCreate,
  removeUser,
  handleOpenModal,
  setSaveId,
}: Props): JSX.Element => {
  const navigate = useNavigate();

  return (
    <TableRow
      onClick={() => {
        navigate(id.toString());
      }}
      sx={{ cursor: "pointer" }}
      hover
      role="checkbox"
      tabIndex={-1}
    >
      <TableCell sx={{ fontSize: 14, padding: "0 16px" }}>{id}</TableCell>
      <TableCell sx={{ fontSize: 14, padding: "0 16px" }}>{userName}</TableCell>
      <TableCell sx={{ fontSize: 14, padding: "0 16px" }}>{email}</TableCell>
      <TableCell sx={{ fontSize: 14, padding: "0 16px" }}>
        {roles.map((role, index) => (
          <Stack key={index} direction="column">
            {role}
          </Stack>
        ))}
      </TableCell>
      <TableCell sx={{ fontSize: 14, padding: "0 16px" }}>
        {moment(dateCreate).format("MM/DD/YYYY-h:mma")}
      </TableCell>
      <TableCell sx={{ padding: "10px 16px" }}>
        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handleOpenModal();
              setSaveId(id);
            }}
          >
            <FaUserEdit />
          </IconButton>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              removeUser({ variables: { id: Number(id) } });
            }}
          >
            <MdClear />
          </IconButton>
        </Stack>
      </TableCell>
    </TableRow>
  );
};
