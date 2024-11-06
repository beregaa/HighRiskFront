import { LogoEnum } from "@/app/enums/logoEnum.enum";
import styles from "./Authorisation.module.scss";
import { themeState } from "@/app/atoms/themeState";
import { useRecoilState } from "recoil";
import { useCallback } from "react";

const Authorisation = () => {

  return (
    <div className={styles.wrap}>
      <div className={styles.sign}>Sign Up / Sign In</div>
    </div>
  );
};

export default Authorisation;
