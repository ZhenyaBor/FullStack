import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import { FormikProvider } from "formik";
import { palette } from "theme";
import { FaUserEdit } from "react-icons/fa";
import { UpdateUserFeature } from "features/UpdateUser";
import { FormikProps } from "formik";

type DefaultValues = {
  userName: string;
  roles: string[];
  email: string;
  firstName: string;
  lastName: string;
};

type Props = {
  open: boolean;
  handleCloseModal: () => void;
  formik: FormikProps<DefaultValues>;
};

export const UpdateModalUser = ({
  open,
  handleCloseModal,
  formik,
}: Props): JSX.Element => (
  <Modal
    open={open}
    onClose={handleCloseModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <>
      <Paper
        sx={{
          width: "400px",
          background: palette.grey[300],
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          color={palette.grey[900]}
          sx={{ width: "200px", margin: "auto", mb: 4 }}
        >
          Update User
        </Typography>
        <FormikProvider value={formik}>
          <Box component="form" onSubmit={formik.handleSubmit}>
            <UpdateUserFeature />
            <Button
              startIcon={<FaUserEdit />}
              variant="contained"
              type="submit"
              sx={{ height: 35, mt: 4 }}
              fullWidth
            >
              <Typography
                variant="button"
                textTransform="initial"
                fontWeight={700}
              >
                Update User
              </Typography>
            </Button>
          </Box>
        </FormikProvider>
      </Paper>
    </>
  </Modal>
);
