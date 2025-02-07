"use client";

import { ConfigProvider } from "antd";
import { RecoilRoot } from "recoil";

export default function RecoilContextProvider({
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
            colorBgBase: "#181819", // Background for the whole page
            colorText: "#FFFFFF",
            colorLink: "#FFFFFF",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </RecoilRoot>
  );
}
