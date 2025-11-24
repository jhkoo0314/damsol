import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Brand Info */}
            <div className="space-y-4">
              <div>
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-serif text-xl font-semibold">담솔</span>
                  <span className="text-sm text-muted-foreground">DAMSOL</span>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                세상에 단 하나뿐인 돌 위에,
                <br />
                세상에 단 하나뿐인 새김을 남기는 브랜드
              </p>
              <div className="text-xs text-muted-foreground">
                <span className="font-serif">刻品</span> 각품(刻品)
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">메뉴</h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/story"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  브랜드 스토리
                </Link>
                <Link
                  href="/kak-poom"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  각품 소개
                </Link>
                <Link
                  href="/stones"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  돌 선택
                </Link>
                <Link
                  href="/process"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  제작 과정
                </Link>
                <Link
                  href="/products"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  상품
                </Link>
                <Link
                  href="/reviews"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  고객 후기
                </Link>
              </nav>
            </div>

            {/* Contact & Store */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">구매하기</h3>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://smartstore.naver.com/damsol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  네이버 스마트스토어
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} 담솔 DAMSOL. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center mt-2">
              평생의 이름을 각품(刻品)으로 남기다
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

