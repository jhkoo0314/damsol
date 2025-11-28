"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CollectionGrid } from "@/components/collections/collection-grid";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero Section ===== */}
        <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
          <div className="max-w-4xl w-full text-center space-y-10 z-10 fade-in-up">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 border border-gray-400 rounded-full text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase bg-white/50 backdrop-blur-sm">
                Time Archiving Object
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.15] tracking-tight text-gray-900 font-serif">
                변하지 않는 돌 위에,
                <br />
                <span className="text-gray-400">
                  변하지 않을 순간을 새기다.
                </span>
              </h1>
            </div>

            <p className="text-gray-600 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto font-light">
              담솔은 도장을 만들지 않습니다.
              <br className="hidden sm:block" />
              천연석 위에 이름과 시간을 새기는 각품(刻品)을 만듭니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="h-11 px-6">
                <Link href="#collection">컬렉션 보기</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-11 px-6">
                <Link href="#story">브랜드 스토리</Link>
              </Button>
            </div>
          </div>

          {/* Background Texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
            }}
          />
        </section>

        {/* ===== Brand Story Teaser ===== */}
        <section
          id="story"
          className="py-24 bg-white border-y border-border px-4"
        >
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <span className="text-[#B91C1C] text-xs font-bold tracking-widest uppercase">
              Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-medium leading-relaxed text-gray-900 font-serif">
              &quot;우리는 도장을 만들지 않습니다.
              <br />
              시간을 담는{" "}
              <span className="text-[#B91C1C] inline-block border-b border-[#B91C1C]/30 pb-1">
                각품(刻品)
              </span>
              을 만듭니다.&quot;
            </h2>
            <p className="text-gray-500 font-light leading-loose text-sm sm:text-base">
              대량생산이 아닌 단 하나의 작품으로,
              <br />
              실용품이 아닌 시간을 담는 오브제로.
              <br />
              당신의 이야기를 돌 위에 새깁니다.
            </p>
            <div className="pt-4">
              <Link
                href="/story"
                className="inline-flex items-center text-sm font-bold border-b border-gray-300 pb-1 hover:border-black transition-all"
                onClick={() => {
                  console.log("[Landing] 브랜드 스토리 더 보기 클릭");
                }}
              >
                담솔의 철학 더 보기 <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== Stone Selection ===== */}
        <section
          id="stones"
          className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2 block">
                Material
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 font-serif">
                같은 돌은 없습니다.
                <br />
                같은 이름도 없습니다.
              </h2>
              <p className="text-gray-600 leading-loose font-light">
                천연석은 저마다 다른 결을 가집니다. 담솔은 수십 개의 돌 중에서
                당신의 이름과 가장 잘 어울리는 단 하나의 돌을 선별합니다.
                <br />
                <br />
                빛을 받았을 때의 음영, 손에 쥐었을 때의 온도. 그 유일함이 담솔의
                시작입니다.
              </p>
              <div className="pt-4">
                <Button asChild variant="outline" className="px-8">
                  <a
                    href="https://smartstore.naver.com/damsolseal"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      console.log("[Landing] 나만의 돌 선택하러 가기 클릭");
                    }}
                  >
                    나만의 돌 선택하러 가기
                  </a>
                </Button>
              </div>
            </div>

            {/* Stone Grid Preview */}
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-200 rounded-sm img-box text-[10px]">
                [Image]
                <br />
                수산석
              </div>
              <div className="aspect-square bg-gray-300 rounded-sm img-box text-[10px]">
                [Image]
                <br />
                요녕석
              </div>
              <div className="aspect-square bg-white border border-gray-200 rounded-sm img-box text-[10px]">
                [Image]
                <br />
                창화석
              </div>
              <div className="aspect-square bg-black text-white/50 rounded-sm img-box text-[10px]">
                [Image]
                <br />
                Premium
              </div>
            </div>
          </div>
        </section>

        {/* ===== Collection ===== */}
        <section
          id="collection"
          className="py-24 bg-white border-t border-border px-4 sm:px-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2 block">
                  Line up
                </span>
                <h2 className="text-3xl font-medium text-gray-900 font-serif">
                  Collection
                </h2>
              </div>
              <Link
                href="/collection"
                className="text-xs font-bold underline underline-offset-4 text-gray-400 hover:text-black transition-colors"
                onClick={() => {
                  console.log(
                    "[Landing] 컬렉션 전체 보기 클릭: /collection으로 이동"
                  );
                }}
              >
                전체 보기 →
              </Link>
            </div>

            <CollectionGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
