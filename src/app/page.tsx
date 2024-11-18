"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import styles from "./page.module.css";
import { getColorByType } from "./helpers/getColorsByType";
import { useRecoilState } from "recoil";
import { themeState } from "./atoms/themeState";

export default function Home() {
  const [isRotated, setIsRotated] = useState(false);
  const [theme, setTheme] = useRecoilState(themeState);

  const handleCardClick = () => {
    setIsRotated((prev) => !prev);
    console.log(isRotated, "rot");
  };

  useEffect(() => {
    setIsRotated(true);
  }, [theme]);

  const colors = getColorByType(theme);

  return (
    <div style={{ background: colors.body }}>
      <div
        className={`${styles.header} ${isRotated ? styles.rotated : ""}`}
        onClick={handleCardClick}
      >
        <Header />
      </div>
    </div>
  );
}
