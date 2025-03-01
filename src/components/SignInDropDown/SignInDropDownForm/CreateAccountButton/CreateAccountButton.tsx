'use client'; 

import { Button } from 'antd';
import { useRouter } from 'next/navigation';

const CreateAccountButton = () => {
  const router = useRouter();

  return (
    <Button
      type="link"
      onClick={() => router.push("/signup")}
      style={{ width: "100%" }}
    >
      Create account
    </Button>
  );
};

export default CreateAccountButton;
