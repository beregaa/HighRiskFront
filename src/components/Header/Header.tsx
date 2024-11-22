"use client";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Authorisation from "../Authorisation/Authorisation";
import { themeNameState } from "@/app/atoms/themeState";
import { useRecoilState } from "recoil";
import { LogoEnum } from "@/app/enums/logoEnum.enum";
import { getTheme } from "@/app/helpers/getTheme.helper";
import { useEffect, useState } from "react";
import { decodeUserToken } from "@/app/helpers/decodeUserToken.helper";
import { UserProfileInterface } from "@/interfaces/userProfile.interface";
import { userRolesEnum } from "@/app/enums/userRoles.enum";

const Header = () => {
  const [themeName, setThemeName] = useRecoilState(themeNameState);
  const [isRotated, setIsRotated] = useState(false);
  const [user, setUser] = useState<UserProfileInterface>();

  const theme = getTheme(themeName);

  const handleCardClick = () => {
    setIsRotated((prev) => !prev);
  }; 

  useEffect(() => {
    setUser(decodeUserToken());
  }, []);

  useEffect(() => {
    setIsRotated(true);
  }, [theme]);

  const deleteToken = () => {
    localStorage.removeItem("user");
  };

  return (
    <div className={styles.header} style={{ background: theme.headerBg }}>
      <div
        className={`${styles.header} ${isRotated ? styles.rotated : ""}`}
        onClick={handleCardClick}
      >
        <div className={styles.logo}>
          <Logo />
          <div className={styles.keyRotates}>
            <div onClick={() => setThemeName(LogoEnum.Edgy)}>Edgy</div>
            <div onClick={() => setThemeName(LogoEnum.Soft)}>Soft</div>
            <div onClick={() => setThemeName(LogoEnum.Basic)}>Basic</div>
          </div>
        </div>
      </div>
      {user ? user.username : userRolesEnum.Guest}
      <Authorisation />

      <button className={styles.logOut} onClick={() => deleteToken()}>
        logOut
      </button>
    </div>
  );
};

export default Header;
