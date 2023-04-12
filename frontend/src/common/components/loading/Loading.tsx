import { CircularProgress, Stack, Box } from "@mui/material";

export const Loading = (): JSX.Element => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={6}
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Box>...loading</Box>
      <CircularProgress size={100} color="inherit" />
    </Stack>
  );
};
