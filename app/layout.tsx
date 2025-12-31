import type { Metadata } from "next";
import { Inter, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

// Inter - 본문용 (HTML과 동일)
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// 명조(전각 느낌) - 제목 및 특별한 표현용
const notoSerifKR = Noto_Serif_KR({
  variable: "--font-serif",
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "담솔 DAMSOL - 평생의 이름을 각품(刻品)으로 남기다",
  description:
    "세상에 단 하나뿐인 돌 위에, 세상에 단 하나뿐인 새김을 남기는 브랜드. 천연석 수제도장과 탯줄도장을 만드는 담솔입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} ${notoSerifKR.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
