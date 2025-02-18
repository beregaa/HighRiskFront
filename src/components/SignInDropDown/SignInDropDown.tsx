"use client";
import Image from "next/image";
import styles from "./SignInDropDown.module.scss";
import Popover from "antd/es/popover";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";
import { userState } from "@/atoms/userToken";
import { useSetRecoilState } from "recoil";

const SignInDropDown = () => {
  const [form] = Form.useForm();

  const router = useRouter();

  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
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
      localStorage.setItem("user", JSON.stringify(response.data));
      setUser(response.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };
  const content = (
    <Form
      form={form}
      onFinish={onLogin}
      layout="vertical"
      className={styles.antForm}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Please enter a valid email" },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please enter your password" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <div
        className={styles.actionsWrap}
        style={{ width: "100%", justifyContent: "center" }}
      >
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form.Item>
        <p className={styles.forgot}>Forgot your password?</p>
        <Button
          type="link"
          onClick={() => router.push("/signup")}
          style={{ width: "100%" }}
        >
          Create account
        </Button>
      </div>
    </Form>
  );

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
