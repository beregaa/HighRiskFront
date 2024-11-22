import Header from "@/components/Header/Header";
import "./globals.css";
import RecoilContextProvider from "./lib/recoilContextProvider";

export const metadata = {
  tittle: "reverse app",
  description: "a new brand which represents uniquenes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RecoilContextProvider>
          <Header />
          {children}
        </RecoilContextProvider>
      </body>
    </html>
  );
}
