import Link from "next/link";
import Logo from "../Logo/Logo";
import styles from "./MainHeader.module.scss";
import NavLink from "./NavLink/NavLink";
import User from "../User/User";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { navItems } from "./NavItem";

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
            {navItems.map((item, index) => (
              <li key={index}>
                <div className={item.hasStar ? styles.starText : ""}>
                  <NavLink href={item.path}>{item.label}</NavLink>
                  {item.hasStar && (
                    <img className={styles.star} src="/star.png" alt="star" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.icons}>
          <div className={styles.noMobile}>
            <User />
          </div>
          <img className={styles.noMobile} src="/cart.png" />
          <img src="/search.png" />
        </div>
      </div>
      <BurgerMenu />
    </header>
  );
};

export default MainHeader;
