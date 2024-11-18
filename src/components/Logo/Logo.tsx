"use client";
import styles from "./Logo.module.scss";
import { LogoEnum } from "@/app/enums/logoEnum.enum";
import { useRecoilState } from "recoil";
import { themeState } from "@/app/atoms/themeState";
import { useRouter } from "next/navigation";

const Logo = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const router = useRouter();

  const getLogoContent = () => {
    switch (theme) {
      case LogoEnum.Edgy:
        return {
          className: styles.edgyLogo,
          text: "Reverse Edgy",
          nextTheme: LogoEnum.Soft,
        };
      case LogoEnum.Soft:
        return {
          className: styles.softLogo,
          text: "Reverse Soft",
          nextTheme: LogoEnum.Basic,
        };
      case LogoEnum.Basic:
        return {
          className: styles.basicLogo,
          text: "Reverse Baisc",
          nextTheme: LogoEnum.Edgy,
        };
      default:
        return {
          className: styles.basicLogo,
          text: "Reverse Baisc",
          nextTheme: LogoEnum.Edgy,
        };
    }
  };

  const { className, text, nextTheme } = getLogoContent();

  return (
    <div className={styles.logoWrapper}>
      <div
        className={className}
        onClick={() => {
          setTheme(nextTheme);
          router.push("/");
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Logo;
