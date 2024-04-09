import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

function ContactList() {
  const allContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.grid}>
      {allContacts.map((contact) => (
        <Contact key={contact.id} item={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
