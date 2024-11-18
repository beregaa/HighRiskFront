import { LogoEnum } from "@/app/enums/logoEnum.enum";
import styles from "./Authorisation.module.scss";
import { themeState } from "@/app/atoms/themeState";
import { useRecoilState } from "recoil";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

const Authorisation = () => {
  const route = useRouter();

  return (
    <div className={styles.wrap}>
      <img
        className={styles.logInIcon}
        src="icons/basic.png"
        onClick={() => route.push("login")}
        alt=""
      />
    </div>
  );
};

export default Authorisation;
