"use client";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Authorisation from "../Authorisation/Authorisation";
import { themeState } from "@/app/atoms/themeState";
import { useRecoilState } from "recoil";
import { LogoEnum } from "@/app/enums/logoEnum.enum";
import { getColorByType } from "@/app/helpers/getColorsByType";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const [isRotated, setIsRotated] = useState(false);
  const colors = getColorByType(theme);

  const handleCardClick = () => {
    setIsRotated((prev) => !prev);
  };

  useEffect(() => {
    setIsRotated(true);
  }, [theme]);

  return (
    <div className={styles.header} style={{ background: colors.headerBg }}>
      <div
        className={`${styles.header} ${isRotated ? styles.rotated : ""}`}
        onClick={handleCardClick}
      >
        <div className={styles.logo}>
          <Logo />
          <div className={styles.keyRotates}>
            <div onClick={() => setTheme(LogoEnum.Edgy)}>Edgy</div>
            <div onClick={() => setTheme(LogoEnum.Soft)}>Soft</div>
            <div onClick={() => setTheme(LogoEnum.Basic)}>Basic</div>
          </div>
        </div>
      </div>

      <Authorisation />
    </div>
  );
};

export default Header;
