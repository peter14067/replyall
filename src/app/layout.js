import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "卡蘿命理工作室 - 專業八字命理諮詢",
  description: "偶爾潑辣偶爾溫柔的命理師卡蘿，提供一對一八字諮詢、線上課程教學、開運法寶等專業命理服務",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
