"use client";

import { ConfigProvider } from "antd";
import { RecoilRoot } from "recoil";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
}
