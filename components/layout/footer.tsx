"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* CTA 섹션 */}
      <div className="py-24 bg-[#1F2937] text-white text-center px-4">
        <div className="max-w-2xl mx-auto space-y-10">
          <h2 className="text-3xl sm:text-5xl font-medium">
            당신의 첫 순간을 기록하세요.
          </h2>
          <p className="text-gray-400 text-base font-light leading-relaxed">
            담솔의 모든 작품은 네이버 스마트스토어에서
            <br className="hidden sm:block" />
            안전하고 간편하게 주문하실 수 있습니다.
          </p>
          <a
            href="https://smartstore.naver.com/damsolseal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-black hover:bg-gray-200 h-12 px-10 inline-flex items-center justify-center transition-colors text-base"
            onClick={() => {
              console.log("[Footer] 스토어 바로가기 클릭");
            }}
          >
            스토어 바로가기
          </a>
        </div>
      </div>

      {/* 담솔각 푸터 */}
      <div className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            {/* 로고 */}
            <Link
              href="/"
              className="flex items-baseline gap-2 justify-center cursor-pointer"
              onClick={() => {
                console.log("[Footer] 로고 클릭: 홈으로 이동");
              }}
            >
              <span className="text-lg font-serif font-bold tracking-tight text-gray-900">
                담솔
              </span>
              <span className="text-xl font-serif font-bold tracking-tight text-gray-900">
                DAMSOL
              </span>
              <span className="text-xs tracking-[0.2em] text-muted-foreground font-serif">
                刻
              </span>
            </Link>
            <p className="text-sm text-gray-500 font-light">
              시간을 새기는 각품(刻品)
            </p>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-gray-400">
                <a
                  href="https://smartstore.naver.com/damsolseal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors"
                  onClick={() => {
                    console.log("[Footer] 네이버 스마트스토어 클릭");
                  }}
                >
                  네이버 스마트스토어
                </a>
                <span className="hidden sm:inline">|</span>
                <Link
                  href="/story"
                  className="hover:text-gray-600 transition-colors"
                  onClick={() => {
                    console.log("[Footer] 브랜드 스토리 클릭");
                  }}
                >
                  브랜드 스토리
                </Link>
                <span className="hidden sm:inline">|</span>
                <Link
                  href="/products"
                  className="hover:text-gray-600 transition-colors"
                  onClick={() => {
                    console.log("[Footer] 각품소개 클릭");
                  }}
                >
                  각품소개
                </Link>
              </div>
              <p className="text-xs text-gray-400 mt-6 font-light">
                © 2024 담솔각. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
