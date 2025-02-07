import Image from "next/image";
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logoWrap}>
      <Image src={"/Logo.png"} width={123} height={47} alt="logo" />
    </div>
  );
};

export default Logo;
