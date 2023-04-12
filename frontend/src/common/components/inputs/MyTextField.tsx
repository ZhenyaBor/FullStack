import {
  TextField as TextFieldMui,
  styled,
  TextFieldProps,
} from "@mui/material";

const TextField = styled(TextFieldMui)(() => ({
  "& label.Mui-focused": {
    color: "#000000",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#000000",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
    "& input:-webkit-autofill, & input:-webkit-autofill:focus": {
      transition: "background-color 600000s 0s, color 600000s 0s",
    },
  },
}));

export const MyTextField = (props: TextFieldProps) => <TextField {...props} />;
