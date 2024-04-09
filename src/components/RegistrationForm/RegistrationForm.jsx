import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import { register } from "../../redux/auth/operations";
import InputForm from "../InputForm/InputForm";

function RegistrationForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    password: Yup.string().trim().min(4, "Too short!").required("Required"),
    email: Yup.string().trim().email().required("Required"),
  });

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formContainer} autoComplete="off">
        <InputForm id={nameFieldId} type="text" name="name">
          Username
        </InputForm>

        <InputForm id={emailFieldId} type="email" name="email">
          Email
        </InputForm>

        <InputForm id={passwordFieldId} type="password" name="password">
          Password
        </InputForm>

        <button type="submit" className={css.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
