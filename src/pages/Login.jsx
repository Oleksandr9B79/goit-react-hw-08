import css from "./Pages.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import LoginForm from "../components/LoginForm/LoginForm";
import PageTitle from "../components/PageTitle/PageTitle";
import Error from "../components/Error/Error";

import { selectAuthError } from "../redux/auth/selectors";
import { resetAuthError } from "../redux/auth/slice";

function Login() {
  const error = useSelector(selectAuthError);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(resetAuthError());
  }

  return (
    <div className={css.logarea}>
      <PageTitle>Login</PageTitle>
      <LoginForm />
      {error && (
        <Error message="Something went wrong. Please, check credentials or try again latter." />
      )}
      <p className={css.reglink}>
        or{" "}
        <Link to="/register" className={css.link} onClick={handleClick}>
          register
        </Link>
      </p>
    </div>
  );
}
export default Login;
