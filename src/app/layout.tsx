import "./globals.css";
import ContextProvider from "../context/ContextProvider";
import MainHeader from "@/components/MainHeader/MainHeader";
import { Days_One } from "next/font/google";
import ImageSlideshow from "@/components/SlideImage/ImageSlideshow";

const daysOne = Days_One({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "HighRIsk App",
  description: "A new brand which will conquer world market",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={daysOne.className}>
        <ContextProvider>
          <MainHeader />
      
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
