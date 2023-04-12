import { useState } from "react";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  Typography,
} from "@mui/material";
import { Loading, MyAlert } from "common/components";
import { useQuery } from "@apollo/client";
import { All_USERS } from "Apollo/users";
import {
  useOpenUpdateModal,
  usePagination,
  useRemoveUser,
  useUpdateUsersForm,
} from "./hooks";
import { TableBodyUser, TableHeaderUser, UpdateModalUser } from "./components";
import { User } from "../interface";

export const HomeFeature = (): JSX.Element => {
  const { open, handleCloseModal, handleOpenModal } = useOpenUpdateModal();
  const { loading, data } = useQuery(All_USERS);
  const { rowsPerPage, page, handleChangePage, handleChangeRowsPerPage } =
    usePagination();
  const { removeUser, showRemove } = useRemoveUser();
  const [saveId, setSaveId] = useState<number>();
  const { formik, showSuccess } = useUpdateUsersForm(saveId, handleCloseModal);

  if (loading) return <Loading />;

  return (
    <>
      {data?.users.length === 0 ? (
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ width: "200px", margin: "auto", mb: 4 }}
        >
          Create a user
        </Typography>
      ) : (
        <>
          <Container maxWidth="xl">
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ width: "200px", margin: "auto", mb: 4 }}
            >
              User List
            </Typography>
            <Paper>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableHeaderUser />
                  </TableHead>
                  <TableBody>
                    {data?.users
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((user: User) => {
                        return (
                          <TableBodyUser
                            key={user.id}
                            {...user}
                            setSaveId={setSaveId}
                            removeUser={removeUser}
                            handleOpenModal={handleOpenModal}
                          />
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data?.users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Container>
          <UpdateModalUser
            open={open}
            handleCloseModal={handleCloseModal}
            formik={formik}
          />
          {showSuccess && <MyAlert title="updated successfully" />}
          {showRemove && <MyAlert title="remove successfully" />}
        </>
      )}
    </>
  );
};
