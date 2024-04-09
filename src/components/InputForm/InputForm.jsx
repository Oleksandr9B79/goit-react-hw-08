/* eslint-disable react/prop-types */
import css from "./InputForm.module.css";
import { Field, ErrorMessage } from "formik";

function InputForm({ id, type, name, placeholder = "", children }) {
  return (
    <div className={css.inputField}>
      <label htmlFor={id}>{children}</label>
      <Field type={type} name={name} id={id} placeholder={placeholder}></Field>
      <span className={css.error}>
        <ErrorMessage as="span" name={name} />
      </span>
    </div>
  );
}

export default InputForm;
