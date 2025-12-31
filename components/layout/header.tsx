"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "./container";
import { Menu, ArrowRight } from "lucide-react";

const navigationItems = [
  { name: "브랜드 스토리", href: "/story" },
  { name: "각품 소개", href: "/kak-poom" },
  { name: "돌 선택", href: "/stones" },
  { name: "컬렉션", href: "/collection" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 z-30 bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-baseline gap-2 cursor-pointer"
            onClick={() => {
              console.log("[Header] 로고 클릭: 홈으로 이동");
            }}
          >
            <span className="text-lg font-serif font-bold tracking-tight">
              담솔
            </span>
            <span className="text-xl font-serif font-bold tracking-tight">
              DAMSOL
            </span>
            <span className="text-xs tracking-[0.2em] text-muted-foreground font-serif">
              刻
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-medium">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition-colors"
                onClick={() => {
                  console.log(
                    `[Header] 네비게이션 클릭: ${item.name} (${item.href})`
                  );
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <a
                href="https://smartstore.naver.com/damsolseal"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  console.log("[Header] 네이버스토어 버튼 클릭");
                }}
              >
                네이버스토어
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet
            open={mobileMenuOpen}
            onOpenChange={(open) => {
              setMobileMenuOpen(open);
              if (open) {
                console.log("[Header] 모바일 메뉴 열림");
              } else {
                console.log("[Header] 모바일 메뉴 닫힘");
              }
            }}
          >
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      console.log(
                        `[Header] 모바일 메뉴 클릭: ${item.name} (${item.href})`
                      );
                      setMobileMenuOpen(false);
                    }}
                    className="px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <Button asChild variant="default" className="w-full">
                    <a
                      href="https://smartstore.naver.com/damsolseal"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        console.log("[Header] 모바일 네이버스토어 버튼 클릭");
                        setMobileMenuOpen(false);
                      }}
                    >
                      네이버스토어
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
