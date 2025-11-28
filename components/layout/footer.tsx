"use client";

export function Footer() {
  return (
    <footer className="py-24 bg-[#1F2937] text-white text-center px-4">
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
    </footer>
  );
}
