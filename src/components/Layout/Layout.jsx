/* eslint-disable react/prop-types */
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}

export default Layout;
