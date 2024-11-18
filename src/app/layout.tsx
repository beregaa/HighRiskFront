"use client";
import Header from "@/components/Header/Header";
import "./globals.css";
import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RecoilRoot>
        <body>
          {/* <Header /> */}
          {children}
        </body>
      </RecoilRoot>
    </html>
  );
}
