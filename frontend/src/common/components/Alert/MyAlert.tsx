import { Alert, Typography } from "@mui/material";

type Props = {
  title: string;
};

export const MyAlert = ({ title }: Props): JSX.Element => (
  <Alert
    severity="success"
    sx={{
      background: "#d4fad8",
      mt: 5,
      width: "50%",
    }}
  >
    <Typography variant="h6" fontWeight={700}>
      {title}
    </Typography>
  </Alert>
);
