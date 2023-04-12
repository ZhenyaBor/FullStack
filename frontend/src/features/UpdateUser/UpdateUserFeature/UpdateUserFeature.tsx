import { InputAdornment, MenuItem, Stack } from "@mui/material";
import { MyTextField, SelectPrimary } from "common/components";
import { useFormikContext } from "formik";
import { MdMode } from "react-icons/md";

export const UpdateUserFeature = (): JSX.Element => {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext<any>();

  return (
    <Stack direction="column" spacing={4}>
      <MyTextField
        label="E-mail:"
        placeholder="E-mail"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MdMode />
            </InputAdornment>
          ),
        }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        name="email"
        error={!!touched.email && !!errors.email}
        helperText={touched.email && errors.email && String(errors.email)}
      />

      <MyTextField
        label="User Name:"
        placeholder="User Name"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MdMode />
            </InputAdornment>
          ),
        }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.userName}
        name="userName"
        error={!!touched.userName && !!errors.userName}
        helperText={
          touched.userName && errors.userName && String(errors.userName)
        }
      />

      <MyTextField
        label="First Name:"
        placeholder="First Name"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MdMode />
            </InputAdornment>
          ),
        }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        name="firstName"
        error={!!touched.firstName && !!errors.firstName}
        helperText={
          touched.firstName && errors.firstName && String(errors.firstName)
        }
      />

      <MyTextField
        label="Last Name"
        placeholder="Last Name"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MdMode />
            </InputAdornment>
          ),
        }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name="lastName"
        error={!!touched.lastName && !!errors.lastName}
        helperText={
          touched.lastName && errors.lastName && String(errors.lastName)
        }
      />

      <SelectPrimary
        title="Roles"
        name="roles"
        value={values.roles}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!touched.roles && !!errors.roles}
        messageError={touched.roles && errors.roles && String(errors.roles)}
      >
        {["Admin", "Super Admin", "Staff"].map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </SelectPrimary>
    </Stack>
  );
};
