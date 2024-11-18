"use client";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Authorisation from "../Authorisation/Authorisation";
// import { useCRUD } from "@/api/useCRUD";
import { themeState } from "@/app/atoms/themeState";
import { useRecoilState } from "recoil";
import { LogoEnum } from "@/app/enums/logoEnum.enum";
import { getColorByType } from "@/app/helpers/getColorsByType";

const Header = () => {
  // const { data: products } = useCRUD<any[]>("products");
  const [theme, setTheme] = useRecoilState(themeState);
  const colors = getColorByType(theme);

  return (
    <div className={styles.header} style={{ background: colors.headerBg }}>
      {/* {products?.map((product) => (
        <div className={styles.card} key={product.id}>{product.name}</div>
      ))} */}
      <div className={styles.logo}>
        <Logo />
        <div className={styles.keyRotates}>
          <div onClick={() => setTheme(LogoEnum.Edgy)}>Edgy</div>
          <div onClick={() => setTheme(LogoEnum.Soft)}>Soft</div>
          <div onClick={() => setTheme(LogoEnum.Basic)}>Basic</div>
        </div>
      </div>

      <Authorisation />
    </div>
  );
};

export default Header;
