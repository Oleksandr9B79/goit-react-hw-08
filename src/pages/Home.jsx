import css from "./Pages.module.css";
import { RiContactsBookLine } from "react-icons/ri";

import PageTitle from "../components/PageTitle/PageTitle";

function Home() {
  return (
    <div className={css.homeArea}>
      <PageTitle>
        ContactsBook {"   "}
        <RiContactsBookLine />
      </PageTitle>
    </div>
  );
}
export default Home;
