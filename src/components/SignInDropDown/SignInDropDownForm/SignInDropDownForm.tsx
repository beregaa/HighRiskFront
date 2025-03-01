import { Button, Form, Input, FormInstance } from "antd";
import styles from "./SignInDropDownForm.module.scss";
import CreateAccountButton from "./CreateAccountButton/CreateAccountButton";

type Props = {
  form: FormInstance;
  onLogin: (values: { email: string; password: string }) => void;
};

const SignInDropDownForm = (props: Props) => {
  return (
    <Form
      form={props.form}
      onFinish={props.onLogin}
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
        <CreateAccountButton />
      </div>
    </Form>
  );
};

export default SignInDropDownForm;
