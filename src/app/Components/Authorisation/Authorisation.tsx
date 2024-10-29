import { LogoEnum } from "@/app/enums/logoEnum.enum";
import styles from "./Authorisation.module.scss";
import { themeState } from "@/app/atoms/themeState";
import { useRecoilState } from "recoil";
import { useCallback } from "react";

const Authorisation = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const getLogoContent = useCallback(() => {
    switch (theme) {
      case LogoEnum.Gothic:
        return {
          text: "Reverse Gothic",
          iconSrc: "/icons/edgeUser.png",
          nextTheme: LogoEnum.Barbie,
        };
      case LogoEnum.Barbie:
        return {
          text: "Reverse Barbie",
          iconSrc: "/icons/softUserr.png",
          nextTheme: LogoEnum.BASIC,
        };
      case LogoEnum.BASIC:
        return {
          text: "Reverse Default",
          iconSrc: "/icons/basicUser.png",
          nextTheme: LogoEnum.Gothic,
        };
      default:
        return {
          text: "Reverse Default",
          iconSrc: "/icons/basicUser.png",
          nextTheme: LogoEnum.Gothic,
        };
    }
  }, [theme]);

  const { text, iconSrc } = getLogoContent();

  return (
    <div className={styles.wrap}>
      <div className={styles.sign}>Sign Up / Sign In</div>
      <img className={styles.logInIcon} src={iconSrc} alt={text} />
    </div>
  );
};

export default Authorisation;
