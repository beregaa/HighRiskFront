"use client";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Authorisation from "../Authorisation/Authorisation";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Authorisation/>
    </div>
  );
};

export default Header;
