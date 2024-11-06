"use client";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import styles from "./page.module.css";
import { getColorByType } from "./helpers/getColorsByType";
import { useRecoilState } from "recoil";
import { themeState } from "./atoms/themeState";

export default function Home() {
  const [isRotated, setIsRotated] = useState(false);
  const [theme, setTheme] = useRecoilState(themeState);

  const handleCardClick = () => {
    setIsRotated((prev) => !prev);
  };

  useEffect(() => {
    handleCardClick();
  }, [theme]);


  const colors = getColorByType(theme);

  return (
    <div className={`${styles.page} ${isRotated ? styles.rotated : ''}`} style={{ background: colors.body }}>
      <Header />
    </div>
  );
}
