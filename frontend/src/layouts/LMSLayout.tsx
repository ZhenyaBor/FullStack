import { Box, Stack } from "@mui/material";
import { Header, Footer } from "features";
import { Outlet } from "react-router-dom";
import { palette } from "theme";

export const LMSLayout = () => (
  <Stack direction="column">
    <Header />
    <Box
      component="main"
      sx={{
        width: `100%`,
        flexGrow: 1,
        minHeight: "calc(100vh - 140px)",
        backgroundColor: palette.bodyBackground.main,
        mt: "68px",
        px: 4,
        pt: 3,
        pb: 6,
      }}
    >
      <Outlet />
    </Box>
    <Footer />
  </Stack>
);
