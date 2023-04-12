import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { FormikProvider } from "formik";
import { palette } from "theme";
import { useAddUsersForm } from "../hooks";
import { FormUser } from "./components";
import { ImUserPlus } from "react-icons/im";

export const AddUserFeature = (): JSX.Element => {
  const formik = useAddUsersForm();

  return (
    <>
      <Typography
        variant="h3"
        fontWeight={700}
        sx={{ width: "200px", margin: "0 auto" }}
      >
        Creation User
      </Typography>

      <Stack sx={{ maxWidth: "400px", margin: "0 auto", mt: "20px" }}>
        <Paper
          sx={{ background: palette.grey[300], p: 5, borderRadius: "8px" }}
        >
          <FormikProvider value={formik}>
            <Box component="form" onSubmit={formik.handleSubmit}>
              <FormUser />

              <Button
                startIcon={<ImUserPlus />}
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
                  Add User
                </Typography>
              </Button>
            </Box>
          </FormikProvider>
        </Paper>
      </Stack>
    </>
  );
};
