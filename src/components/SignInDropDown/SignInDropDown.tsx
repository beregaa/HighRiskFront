"use client";
import Image from "next/image";
import styles from "./SignInDropDown.module.scss";
import Popover from "antd/es/popover";
import { Form } from "antd";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { userState } from "@/atoms/userToken";
import { useSetRecoilState } from "recoil";
import SignInDropDownForm from "./SignInDropDownForm/SignInDropDownForm";
import { useRouter } from "next/navigation";

const SignInDropDown = () => {
  const [form] = Form.useForm();
  const setUser = useSetRecoilState(userState);


  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));

    }
  }, []);

  const onLogin = async (values: any) => {
    try {
      const response = await axios.post(
        "https://highriskback.onrender.com/auth/login",
        values
      );
      Cookies.set("user", JSON.stringify(response.data), { expires: 7, sameSite: "Lax" });
      setUser(response.data);
      window.location.reload(); 
  
    } catch (error) {
      console.error("API Error:", error);
    }
  };
  

  const content = <SignInDropDownForm form={form} onLogin={onLogin} />;

  return (
    <div className={styles.wrap}>
      <Popover
        placement="bottomLeft"
        content={content}
        trigger={"click"}
        style={{ backgroundColor: "#181819" }}
      >
        <Image
          src={"/ProfileIcon.png"}
          width={32}
          height={32}
          alt="Picture of the author"
          priority
        />
      </Popover>
    </div>
  );
};

export default SignInDropDown;
