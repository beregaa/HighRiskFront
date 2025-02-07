"use client";
import Image from "next/image";
import styles from "./Authorisation.module.scss";
import Link from "next/link";
import Popover from "antd/es/popover";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import axios from "axios";

const Authorisation = () => {
  const [form] = Form.useForm();

  const router = useRouter();

  const onLogin = async (values: any) => {
    try {
      const response = await axios.post(
        "https://back.reverse.com.ge/auth/login",
        values
      );
      localStorage.setItem("user", JSON.stringify(response.data));
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
      <div className={styles.actionsWrap}  style={{ width: '100%' , justifyContent:'center' }}>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form.Item>
        <p className={styles.forgot} >Forgot your password?</p>
        <Button
          type="link"
          onClick={() => router.push("/register")}
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
      <Link
        href={"/login"}
        // className={path.startsWith("/login") ? styles.active : undefined}
      ></Link>
    </div>
  );
};

export default Authorisation;
