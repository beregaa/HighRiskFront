import Image from "next/image";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logoWrap}>
      <img src="/Logo.png" alt="logo" />
    </div>
  );
};

export default Logo;
