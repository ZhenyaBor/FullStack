import { FocusEvent, ReactNode } from "react";
import {
  Select as SelectMui,
  styled,
  FormControl,
  InputLabel,
  FormHelperText,
  OutlinedInput,
  SelectChangeEvent,
} from "@mui/material";

const Select = styled(SelectMui)(() => ({
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffffff",
  },
  "&:hover .MuiOutlinedInput-notchedOutline ": {
    borderColor: "#ffffff",
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "1px solid #000000",
  },
}));

type Props = {
  title: string;
  name: string;
  value: any;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  error: any;
  messageError: any;
  children: ReactNode;
};

export const SelectPrimary = ({
  title,
  name,
  value,
  onChange,
  onBlur,
  error,
  messageError,
  children,
}: Props): JSX.Element => {
  return (
    <FormControl>
      <InputLabel sx={{ "&.Mui-focused": { color: "black" } }}>
        {title}
      </InputLabel>
      <Select
        multiple
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        input={<OutlinedInput label="Name" />}
        error={error}
      >
        {children}
      </Select>
      <FormHelperText sx={{ color: "red" }}>{messageError}</FormHelperText>
    </FormControl>
  );
};
