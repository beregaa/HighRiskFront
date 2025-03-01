"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import SignInDropDown from "../SignInDropDown/SignInDropDown";
import ProfileIcon from "../ProfileIcon/Profielcon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./User.module.scss";
import { useRouter } from "next/navigation";

const DecodeUserToken: React.FC = () => {
  const [decodedToken, setDecodedToken] = useState<any>(null);
  const path = usePathname();

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("user");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);
        router.refresh();
      } catch (error) {}
    }
  }, []);

  if (path.startsWith("/signup")) {
    return (
      <div className={styles.signIn}>
        Already have an account?{" "}
        <Link className={styles.here} href="/signin">
          sign in here
        </Link>
      </div>
    );
  }

  if (!decodedToken) {
    return <SignInDropDown />;
  }

  return <ProfileIcon user={decodedToken} />;
};

export default DecodeUserToken;
