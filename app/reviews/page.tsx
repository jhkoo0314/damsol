import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "고객 후기 | 담솔 DAMSOL",
  description: "담솔의 각품(刻品)을 경험한 고객들의 후기를 확인하세요.",
};

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Container>
          {/* 히어로 섹션 */}
          <section className="py-24 md:py-32 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8">
              고객 후기
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              담솔의 각품(刻品)을 경험한 고객들의 이야기입니다.
            </p>
          </section>

          {/* 네이버 리뷰 영역 */}
          <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="bg-muted rounded-xl p-12 text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  네이버 스마트스토어 리뷰가 여기에 표시됩니다.
                </p>
                <p className="text-sm text-muted-foreground">
                  네이버 스마트스토어에서 실제 고객 후기를 확인하실 수 있습니다.
                </p>
                <a
                  href="https://smartstore.naver.com/damsol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center mt-6 px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90"
                >
                  네이버스토어 후기 보기
                </a>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
