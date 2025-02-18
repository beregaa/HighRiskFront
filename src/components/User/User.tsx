"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import SignInDropDown from "../SignInDropDown/SignInDropDown";
import ProfileIcon from "../ProfileIcon/Profielcon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./User.module.scss";
import { useRecoilValue } from "recoil";
import { userState } from "@/atoms/userToken";
import { useRouter } from "next/navigation";

const DecodeUserToken: React.FC = () => {

  const router = useRouter()
  const [decodedToken, setDecodedToken] = useState<any>(null);
  const user = useRecoilValue(userState);

  const path = usePathname();
  useEffect(() => {
    const token = localStorage.getItem("user");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);
        router.refresh()
      } catch (error) {
        console.error("Error decoding token", error);
      }
    }
  }, [user]);

  if (path.startsWith("/signup")) {
    return (
      <div className={styles.signIn}>
        Already have an account ?{" "}
        <Link className={styles.here} href={"SignIn"}>
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
