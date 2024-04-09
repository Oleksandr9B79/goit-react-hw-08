import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { useId } from "react";
import * as Yup from "yup";

import { login } from "../../redux/auth/operations";
import InputForm from "../InputForm/InputForm";

function LoginForm() {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
  });

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formContainer} autoComplete="off">
        <InputForm id={emailFieldId} type="email" name="email">
          Email
        </InputForm>
        <InputForm id={passwordFieldId} type="password" name="password">
          Password
        </InputForm>
        <button type="submit" className={css.btn}>
          Login
        </button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
