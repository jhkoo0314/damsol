"use client";

import { Header } from "@/components/layout/header";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function StoryPage() {
  return (
    <>
      <Header />
      <main>
        {/* [HERO] Title Section */}
        <section className="pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block px-3 py-1 border border-gray-300 rounded-full text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase bg-white/50 mb-6"
          >
            Brand Philosophy
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-medium leading-tight mb-8 text-gray-900 font-serif"
          >
            이름의 무게를 조각합니다.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light font-serif"
          >
            평생 불리게 될 소중한 이름이기에에,
            <br />
            당신의 시간을 담아내는{" "}
            <strong className="text-[#B91C1C] font-medium">각품(刻品)</strong>을
            만듭니다.
          </motion.p>
        </section>

        {/* [SECTION 1] Handcraft Value (Zigzag) */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-24 bg-white border-y border-border px-4 sm:px-6"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-[4/5] bg-gray-100 rounded-sm relative overflow-hidden">
                <ImagePlaceholder
                  aspectRatio="portrait"
                  className="w-full h-full rounded-sm"
                  label="작가의 손과 칼끝 (Macro Shot)"
                  showIcon
                />
              </div>
              <p className="text-xs text-center mt-3 text-gray-400 font-sans tracking-wider">
                0.1mm의 오차도 허용하지 않는 손길
              </p>
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-3xl font-medium text-gray-900 font-serif">
                0.1mm의 숨결까지
              </h2>
              <div className="font-sans text-sm md:text-base leading-loose text-muted-foreground font-light space-y-6">
                <p>
                  기계는 완벽한 직선을 긋지만, 사람의 온기를 담지 못합니다.
                  컴퓨터 폰트는 깔끔하지만, 당신 이름만의 고유한 무게를
                  모릅니다.
                </p>
                <p>
                  담솔의 작가는 돌을 쥔 순간부터 고민합니다. 이름의 획순, 글자의
                  기운, 그리고 돌의 결의 흐름까지.
                </p>
                <p className="text-gray-900 font-medium border-l-2 border-[#B91C1C] pl-4 font-serif">
                  &quot;종이 위에 찍혔을 때 비로소 완성되는
                  <br />
                  당신의 품격을 생각하며 칼을 듭니다.&quot;
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* [SECTION 2] The Process (Dark Mode) */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-24 bg-[#1F2937] text-white px-4 sm:px-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-white/40 text-xs font-bold tracking-widest uppercase mb-2 block font-sans">
                The Process
              </span>
              <h2 className="text-2xl md:text-3xl font-medium mb-4 font-serif">
                손으로 시작해, 손으로 끝납니다
              </h2>
              <p className="text-white/60 font-light text-sm font-sans">
                담솔의 하루는 이렇게 흐릅니다
              </p>
            </div>

            {/* Process Timeline */}
            <div className="space-y-12 relative before:absolute before:left-[15px] md:before:left-1/2 before:top-0 before:h-full before:w-px before:bg-white/10">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1F2937] border border-white/20 flex items-center justify-center text-xs font-sans z-10">
                  1
                </div>
                <div className="md:w-1/2 md:text-right pr-0 md:pr-12 pl-12 md:pl-0">
                  <h3 className="text-xl font-bold mb-2 font-serif">
                    원석 선별 (Selection)
                  </h3>
                  <p className="text-white/60 text-sm font-light font-sans">
                    수십 개의 천연석 중 이름과 가장 잘 어울리는 무결점의 돌
                    하나를 엄선합니다.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1F2937] border border-white/20 flex items-center justify-center text-xs font-sans z-10">
                  2
                </div>
                <div className="hidden md:block md:w-1/2"></div>
                <div className="md:w-1/2 pl-12">
                  <h3 className="text-xl font-bold mb-2 font-serif">
                    결 읽기 (Reading)
                  </h3>
                  <p className="text-white/60 text-sm font-light font-sans">
                    빛을 비춰 돌 내부의 결의 방향과 흐름을 읽어내, 칼이 나아갈
                    길을 정합니다.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1F2937] border border-white/20 flex items-center justify-center text-xs font-sans z-10">
                  3
                </div>
                <div className="md:w-1/2 md:text-right pr-0 md:pr-12 pl-12 md:pl-0">
                  <h3 className="text-xl font-bold mb-2 font-serif">
                    디자인 (Design)
                  </h3>
                  <p className="text-white/60 text-sm font-light font-sans">
                    획의 의미, 이름의 무게, 돌의 표정을 고려해 세상에 하나뿐인
                    인고를 디자인합니다.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1F2937] border border-white/20 flex items-center justify-center text-xs font-sans z-10">
                  4
                </div>
                <div className="hidden md:block md:w-1/2"></div>
                <div className="md:w-1/2 pl-12">
                  <h3 className="text-xl font-bold mb-2 font-serif">
                    수제 각인 (Carving)
                  </h3>
                  <p className="text-white/60 text-sm font-light font-sans">
                    0.1mm의 오차도 허용하지 않습니다. 오직 손의 감각으로 깊이를
                    조절하며 새깁니다.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1F2937] border border-[#B91C1C] flex items-center justify-center text-xs font-sans z-10 text-[#B91C1C]">
                  5
                </div>
                <div className="md:w-1/2 md:text-right pr-0 md:pr-12 pl-12 md:pl-0">
                  <h3 className="text-xl font-bold mb-2 text-[#B91C1C] font-serif">
                    완성 (Finish)
                  </h3>
                  <p className="text-white/60 text-sm font-light font-sans">
                    표면을 연마하고, 진공 보존 작업을 거쳐 영원히 변치 않는
                    형태로 완성합니다.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* [SECTION 3] Preservation Tech */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-24 px-4 sm:px-6 max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-square bg-white border border-gray-200 p-2 shadow-xl rounded-sm">
                <ImagePlaceholder
                  aspectRatio="square"
                  className="w-full h-full rounded-sm"
                  label="진공 상태의 투명함 (기포 0% 강조)"
                  showIcon
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <div>
                <span className="text-[#B91C1C] text-xs font-bold tracking-widest uppercase font-sans mb-2 block">
                  Technology
                </span>
                <h2 className="text-3xl font-medium text-gray-900 font-serif">
                  시간을 멈추는 기술
                </h2>
              </div>
              <div className="font-sans text-sm md:text-base leading-loose text-muted-foreground font-light space-y-6">
                <p>
                  탯줄, 배냇머리, 유치는 다시 돌아오지 않을 생명의 첫
                  흔적입니다.
                  <br />그 숭고한 연결이 세월에 바래지 않도록, 담솔은 타협하지
                  않는 기술을 택했습니다.
                </p>
                <ul className="space-y-4 font-sans text-sm text-gray-700 mt-4">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <strong className="block text-gray-900 mb-1">
                        완벽한 진공 흡착
                      </strong>
                      <span className="text-gray-500 font-light">
                        미세한 기포와 공기를 100% 제거하여 산화를 방지합니다.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center shrink-0">
                      <Sun className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <strong className="block text-gray-900 mb-1">
                        무황변 UV 레진
                      </strong>
                      <span className="text-gray-500 font-light">
                        10년이 지나도 노랗게 변하지 않는 최고급 재료를
                        사용합니다.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* [SECTION 4] Promise */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-24 bg-white border-t border-border px-4 text-center"
        >
          <div className="max-w-2xl mx-auto space-y-10">
            <div className="w-10 h-px bg-gray-300 mx-auto"></div>
            <h2 className="text-2xl font-bold text-gray-900 font-serif">
              담솔의 약속
            </h2>
            <p className="font-sans text-sm md:text-base leading-loose text-muted-foreground font-light">
              빠르게 만들지 않습니다. 많이 만들지도 않습니다.
              <br />
              하지만 단 하나의 작품도 허투루 만들지 않습니다.
              <br />
              <br />
              천연석을 고르는 순간부터, 마지막 포장을 묶는 순간까지,
              <br />
              모든 과정에 작가의 손길과 책임이 닿을 것입니다.
            </p>
            <div className="pt-8">
              <Button
                asChild
                size="lg"
                className="h-12 px-10 bg-[#1F2937] hover:bg-[#1F2937]/90 text-white"
              >
                <a
                  href="https://smartstore.naver.com/damsolseal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  나만의 각품 주문하기
                </a>
              </Button>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
