import Link from "next/link";
import Authorisation from "../Authorisation/Authorisation";
import Logo from "../Logo/Logo";
import styles from "./MainHeader.module.scss";
import NavLink from "./NavLink/NavLink";

const MainHeader = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
          </ul>
        </nav>

        <Authorisation />
      </div>
    </header>
  );
};

export default MainHeader;
