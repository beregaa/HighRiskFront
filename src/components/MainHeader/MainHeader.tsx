import Link from "next/link";
import Logo from "../Logo/Logo";
import styles from "./MainHeader.module.scss";
import NavLink from "./NavLink/NavLink";
import User from "../User/User";

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
          <ul className={styles.navItems}>
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink href={"/newIn"}>new in</NavLink>
            </li>
            <li>
              <div className={styles.starText}>
                <NavLink href={"/tops"}>tops</NavLink>
                <img className={styles.star} src="/star.png" alt="" />
              </div>
            </li>
            <li>
              <div className={styles.starText}>
                <NavLink href={"/bottoms"}>bottoms</NavLink>
                <img className={styles.star} src="/star.png" alt="" />
              </div>
            </li>
            <li>
              <NavLink href={"/outwear"}>outwear</NavLink>
            </li>
            <li>
              <NavLink href={"/accessory"}>accessory</NavLink>
            </li>
          </ul>
        </nav>
        <User />
      </div>
    </header>
  );
};

export default MainHeader;
