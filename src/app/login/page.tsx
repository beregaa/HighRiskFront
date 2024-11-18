"use client";
import { Form, Input, Button } from "antd";
import style from "./page.module.scss";
import axios from "axios";
import { useRouter } from "next/navigation";

type FieldType = {
  email: string;
  password: string;
};

const Login = () => {
  const [form] = Form.useForm();

  const router = useRouter();

  const onLogin = async (values: FieldType) => {
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

  return (
    <div className={style.wrap}>
      <div className={style.Inputs}>
        <Form
          form={form}
          onFinish={onLogin}
          layout="vertical"
          className={style.antForm}
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
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <p>Dont have an account?</p>
          <Button type="link" onClick={() => router.push("/register")}>
            register
          </Button>
        </Form>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default Login;
