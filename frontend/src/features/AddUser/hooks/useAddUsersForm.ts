import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import * as yup from "yup";
import { All_USERS,CREATE_USER } from "Apollo/users";
import { useNavigate } from "react-router-dom";


type DefaultValues ={
    userName:string
    roles:string[]
    email:string
    firstName: string
    lastName: string
}

const defaultValues: Omit< DefaultValues ,"organizations"> = {
    userName: '',
    email: '',
    roles:[],
    firstName: '',
    lastName: '',
};

export const useAddUsersForm = () => {
  const [createUser] = useMutation(CREATE_USER,{
    refetchQueries:[
    {query:All_USERS}
  ]});
  const navigate = useNavigate();

 
  
  return useFormik({
    initialValues: { ...defaultValues },
    validationSchema: yup.object({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      email: yup.string().email("Invalid email format").required("required"),
      userName:yup.string().required("required"),
      roles: yup.array().min(1, "Select at least one role").required("Required"),
    }),

    onSubmit: (values,actions) => {
      const createUserInput = {
        email: values.email,
        profile: { firstName: values.firstName, lastName: values.lastName },
        roles: values.roles,
        userName: values.userName
      };

        createUser({ variables: { createUserInput } })
         actions.resetForm();
         navigate("/")
    },
  });

};