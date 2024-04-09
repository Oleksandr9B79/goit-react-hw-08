import css from "./Pages.module.css";
import { useSelector } from "react-redux";

import PageTitle from "../components/PageTitle/PageTitle";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import Error from "../components/Error/Error";

import { selectAuthError } from "../redux/auth/selectors";

function Register() {
  const error = useSelector(selectAuthError);
  return (
    <div className={css.regArea}>
      <PageTitle>Registration</PageTitle>
      <RegistrationForm />
      {error && (
        <Error message="Something went wrong. Maybe, user with this email is already exist or try again latter." />
      )}
    </div>
  );
}

export default Register;
