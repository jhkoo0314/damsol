import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { ProcessTimeline } from "@/components/process/process-timeline";

export const metadata: Metadata = {
  title: "제작 과정 | 담솔 DAMSOL",
  description: "담솔의 제작 과정을 소개합니다. 손으로 시작해 손으로 끝나는 5단계 제작 과정을 확인하세요.",
};

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Container>
          {/* 히어로 섹션 */}
          <section className="py-24 md:py-32 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8">
              담솔의 과정: 손으로 시작해 손으로 끝납니다
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              빠르지 않습니다. 효율적이지도 않습니다.
              <br />
              하지만 이것이 당신의 이름을 대하는 담솔의 예의입니다.
            </p>
          </section>

          {/* 제작 과정 타임라인 */}
          <section className="py-16 md:py-24">
            <ProcessTimeline />
          </section>

          {/* 마무리 섹션 */}
          <section className="py-16 md:py-32 bg-muted/30">
            <Container>
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <p className="font-serif text-2xl md:text-3xl font-semibold">
                  담솔은 빠르게 만들지 않을 것입니다.
                </p>
                <p className="font-serif text-2xl md:text-3xl font-semibold">
                  많이 만들지도 않을 것입니다.
                </p>
                <p className="text-lg text-muted-foreground pt-4">
                  하지만 단 하나의 작품도 허투루 만들지 않을 것입니다.
                </p>
                <p className="text-lg text-muted-foreground">
                  천연석을 고르는 순간부터, 마지막 포장을 묶는 순간까지,
                  모든 과정에 작가의 손길과 책임이 닿을 것입니다.
                </p>
              </div>
            </Container>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
