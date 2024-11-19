"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import styles from "./page.module.css";
import { getColorByType } from "./helpers/getColorsByType";
import { useRecoilState } from "recoil";
import { themeState } from "./atoms/themeState";
import { useCRUD } from "@/api/useCRUD";

export default function Home() {
  const [theme, setTheme] = useRecoilState(themeState);

  const { data: products } = useCRUD<any[]>("products");

  

  const colors = getColorByType(theme);

  return (
    <div className={styles.wrapper} style={{ background: colors.body }}>
      <div className={styles.cards}>
        {products?.map((product) => (
          <div className={styles.card} key={product.id}>
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
}
