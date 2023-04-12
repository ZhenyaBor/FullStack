import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { All_USERS, UPDATE_USER } from "Apollo/users";

type DefaultValues = {
  userName: string;
  roles: string[];
  email: string;
  firstName: string;
  lastName: string;
};

const defaultValues: Omit<DefaultValues, "organizations"> = {
  userName: "",
  email: "",
  roles: [],
  firstName: "",
  lastName: "",
};

export const useUpdateUsersForm = (
  id: number | undefined,
  handleCloseModal: () => void
) => {
  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [{ query: All_USERS }],
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const formik = useFormik({
    initialValues: { ...defaultValues },
    validationSchema: yup.object({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      email: yup.string().email("Invalid email format").required("required"),
      userName: yup.string().required("required"),
      roles: yup
        .array()
        .min(1, "Select at least one role")
        .required("Required"),
    }),

    onSubmit: async (values, actions) => {
      const updateUserInput = {
        id,
        email: values.email,
        profile: { firstName: values.firstName, lastName: values.lastName },
        roles: values.roles,
        userName: values.userName,
      };

      try {
        await updateUser({ variables: { updateUserInput } });
        actions.resetForm();
        handleCloseModal();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return { formik, showSuccess };
};
