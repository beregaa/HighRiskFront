"use client";
import { Form, Input, Row, Col, Checkbox, Select } from "antd";
import styles from "./page.module.scss";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { userState } from "@/atoms/userToken";
import Cookies from "js-cookie";
import { loginUser } from "@/helpers/onLogin.helper";

type FieldType = {
  username: string;
  email: string;
  phoneNumber: string;
  gender: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
};

const SignUp = () => {
  const [form] = Form.useForm();
  const setUser = useSetRecoilState(userState);

  const onSignUp = async (values: FieldType) => {
    try {
      await axios.post("https://highriskback.onrender.com/users", values);

      await loginUser(
        { email: values.email, password: values.password },
        setUser
      );
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href =
      "https://highriskback.onrender.com/auth/google/callback";
  };

  return (
    <div className={styles.wrap}>
      <h2>Create Account</h2>
      <div className={styles.Inputs}>
        <Form
          form={form}
          onFinish={onSignUp}
          layout="vertical"
          className={styles.antForm}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please enter your username" },
                  { min: 3, message: "Username must be at least 3 characters" },
                ]}
              >
                <Input placeholder="Username" />
              </Form.Item>

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
                rules={[
                  { required: true, message: "Please enter your password" },
                  { min: 6, message: "Password must be at least 6 characters" },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                  {
                    pattern: /^\+995\d{9}$/,
                    message: "Invalid phone number format (+995xxxxxxxxx)",
                  },
                ]}
              >
                <Input placeholder="+995593120692" />
              </Form.Item>

              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  { required: true, message: "Please select your gender" },
                ]}
              >
                <Select placeholder="Select Gender">
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                  <Select.Option value="other">Other</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                  { required: true, message: "Please confirm your password" },
                ]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="termsAccepted"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: "You must accept the Terms and Conditions",
              },
            ]}
          >
            <Checkbox>
              Creating your account and accepting{" "}
              <a className={styles.terms} href="/terms">
                Terms and Conditions
              </a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <button type="submit" className={styles.submit}>
              CREATE
            </button>
          </Form.Item>
        </Form>
      </div>

      <div className={styles.bigTechSignUp}>
        <div className={styles.google} onClick={handleGoogleLogin}>
          <img src="/google.png" alt="Google" />
          <span>Sign up with Google</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
