"use client";
import Image from "next/image";
import styles from "./SignInDropDown.module.scss";
import Popover from "antd/es/popover";
import { Form } from "antd";
import { useEffect } from "react";
import Cookies from "js-cookie";
import SignInDropDownForm from "./SignInDropDownForm/SignInDropDownForm";
import  loginUser  from "@/helpers/onLogin.helper";

const SignInDropDown = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
    }
  }, []);

  const content = <SignInDropDownForm form={form} onLogin={loginUser} />;

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
          alt="Profile Icon"
          priority
        />
      </Popover>
    </div>
  );
};

export default SignInDropDown;
