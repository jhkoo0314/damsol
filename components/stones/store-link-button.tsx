"use client";

import { Button } from "@/components/ui/button";

export function StoreLinkButton() {
  const handleClick = () => {
    console.log("[Stones] 네이버 스마트스토어 버튼 클릭");
  };

  return (
    <Button
      asChild
      size="lg"
      className="h-12 px-10"
      onClick={handleClick}
    >
      <a
        href="https://smartstore.naver.com/damsolseal"
        target="_blank"
        rel="noopener noreferrer"
      >
        네이버 스마트스토어에서 구매하기
      </a>
    </Button>
  );
}

