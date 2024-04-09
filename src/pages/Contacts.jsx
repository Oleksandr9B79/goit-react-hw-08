import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import PageTitle from "../components/PageTitle/PageTitle";

import { fetchContacts } from "../redux/contacts/operations";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";

function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <PageTitle>Add contacts</PageTitle>
      <ContactForm />
      <SearchBox>Finde name</SearchBox>
      {isLoading && !error && <b>Loading...</b>}
      {error && <b>Something went wrong. Please try again latter.</b>}
      <ContactList />
    </div>
  );
}

export default Contacts;
