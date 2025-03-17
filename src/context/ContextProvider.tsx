import { ConfigProvider } from "antd";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#442346",
          borderRadius: 2,
          colorBgContainer: "#E0DDDD",
          colorBgBase: "#181819",
          colorText: "#FFFFFF",
          colorLink: "#FFFFFF",
        },
        components: {
          Input: {
            colorText: "#000000",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
