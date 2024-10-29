"use client";
import styles from "./Logo.module.scss";
import { LogoEnum } from "@/app/enums/logoEnum.enum";
import { useRecoilState } from "recoil";
import { themeState } from "@/app/atoms/themeState";

const Logo = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const getLogoContent = () => {
    switch (theme) {
      case LogoEnum.Gothic:
        return {
          className: styles.gothicLogo,
          text: "Reverse Gothic",
          nextTheme: LogoEnum.Barbie,
        };
      case LogoEnum.Barbie:
        return {
          className: styles.barbieLogo,
          text: "Reverse Barbie",
          nextTheme: LogoEnum.BASIC,
        };
      case LogoEnum.BASIC:
        return {
          className: styles.defaultLogo,
          text: "Reverse Default",
          nextTheme: LogoEnum.Gothic,
        };
      default:
        return {
          className: styles.defaultLogo,
          text: "Reverse Default",
          nextTheme: LogoEnum.Gothic,
        };
    }
  };

  const { className, text, nextTheme } = getLogoContent();

  return (
  <div className={styles.logoWrapper}>
      <div className={className} onClick={() => setTheme(nextTheme)}>
      {text}
    </div>
  </div>
  );
};

export default Logo;
