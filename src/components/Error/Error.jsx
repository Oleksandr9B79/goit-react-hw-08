/* eslint-disable react/prop-types */
import css from "./Error.module.css";

function Error({ message = "" }) {
  return <b className={css.text}>{message}</b>;
}

export default Error;
