"use client";
import { Form, Input, Button, Row, Col } from "antd";
import style from "./page.module.scss";
import axios from "axios";
import { useRouter } from "next/navigation";

type FieldType = {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onRegister = async (values: FieldType) => {
    console.log(values);
    try {
      const response = await axios.post(
        "https://back.reverse.com.ge/users",
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
          onFinish={onRegister}
          layout="vertical"
          className={style.antForm}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: "Please enter your first name" }]}
              >
                <Input placeholder="First Name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[ 
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" }
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[ 
                  { required: true, message: "Please enter your password" },
                  { min: 6, message: "Password must be at least 6 characters" }
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: "Please enter your last name" }]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>

              <Form.Item
                label="Phone Number"
                name="number"
                rules={[{ required: true, message: "Please enter your phone number" }]}
              >
                <Input placeholder="Phone Number" />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[{ required: true, message: "Please confirm your password" }]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
            </Col>
          </Row>
          
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

          <div className={style.toAuth}>
            <span>Have an account? </span>
            <Button type="link" onClick={() => router.push("/login")}>
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
