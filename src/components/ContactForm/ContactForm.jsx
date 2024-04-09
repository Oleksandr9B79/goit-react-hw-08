import css from "./ContactForm.module.css";
import { Formik, Form } from "formik";
import InputForm from "../InputForm/InputForm";

import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const phoneFormat = /^[0-9]{3}[ \\-][0-9]{3}[ \\-][0-9]{4}$/;

function ContactForm() {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .matches(phoneFormat, "Phone number format is 000-000-0000")
      .required("Required"),
  });

  function handleSubmit(values, actions) {
    dispatch(addContact(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.inputArea}>
        <InputForm id={nameId} type="text" name="name">
          Name
        </InputForm>
        <InputForm id={numberId} type="text" name="number">
          Number
        </InputForm>
        <div>
          <button className={css.btn} type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default ContactForm;
