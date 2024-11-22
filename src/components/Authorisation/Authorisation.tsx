import Image from "next/image";
import styles from "./Authorisation.module.scss";
import Link from "next/link";
import { getTheme } from "@/app/helpers/getTheme.helper";
import { themeNameState } from "@/app/atoms/themeState";
import { useRecoilState } from "recoil";

const Authorisation = () => {
  const [themeName, setThemeName] = useRecoilState(themeNameState);

  const theme = getTheme(themeName);

  return (
    <div className={styles.wrap}>
      <Link href={"/login"}>
        <Image
          src={theme.authlogo}
          width={150}
          height={150}
          alt="Picture of the author"
          priority
        />
      </Link>
    </div>
  );
};

export default Authorisation;
