"use client";
import { useCRUD } from "@/api/useCRUD";
import { useRecoilState } from "recoil";
import styles from "./Products.module.scss";
import { themeNameState } from "@/app/atoms/themeState";
import { getTheme } from "@/app/helpers/getTheme.helper";

export default function Products() {
  const [theme, setTheme] = useRecoilState(themeNameState);

  const { data: products } = useCRUD<any[]>("products");
  const colors = getTheme(theme);
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
