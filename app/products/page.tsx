import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { ProductCategoryCard } from "@/components/products/product-category-card";

export const metadata: Metadata = {
  title: "상품 | 담솔 DAMSOL",
  description: "담솔의 각품(刻品) 라인을 소개합니다. Classic 刻, Premium 刻, Masterpiece 刻 세 가지 라인으로 구성됩니다.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Container>
          {/* 히어로 섹션 */}
          <section className="py-24 md:py-32 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8">
              각품(刻品) 라인
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              담솔의 각품은 세 가지 라인으로 구성됩니다.
            </p>
          </section>

          {/* Classic 刻 */}
          <section id="classic" className="py-16 md:py-24 scroll-mt-24">
            <div className="max-w-4xl mx-auto">
              <ProductCategoryCard
                category="classic"
                title="Classic 刻"
                description="이름도장 기본 라인. 천연석 + 1:1 수제 각인. 합리적인 가격대."
                customerInsight="내 이름을 가장 예쁜 수제 각인으로 새기고 싶다."
                products={["이름도장", "서명도장", "개인 맞춤 수제도장 기본형"]}
              />
            </div>
          </section>

          {/* Premium 刻 */}
          <section id="premium" className="py-16 md:py-24 bg-muted/30 scroll-mt-24">
            <div className="max-w-4xl mx-auto">
              <ProductCategoryCard
                category="premium"
                title="Premium 刻"
                description="더 희귀한 원석 사용. 1:1 맞춤 서체·디자인 설계."
                customerInsight="조금 더 특별한 형태로 남기고 싶다."
                products={[
                  "프리미엄 원석 이름도장",
                  "가족세트(부/모/아이 3인) 각품",
                  "기념도장 커스텀 버전",
                ]}
              />
            </div>
          </section>

          {/* Masterpiece 刻 */}
          <section id="masterpiece" className="py-16 md:py-24 scroll-mt-24">
            <div className="max-w-4xl mx-auto">
              <ProductCategoryCard
                category="masterpiece"
                title="Masterpiece 刻"
                description="담솔의 모든 기술과 감각이 들어가는 최고 라인."
                customerInsight="우리 아이의 탄생을 평생의 작품으로 남기고 싶다."
                products={[
                  "탯줄도장 (진공 보존 기술 적용)",
                  "프리미엄 패밀리 스토리 각품",
                  "특별 기념일 맞춤 마스터피스",
                ]}
              />
            </div>
          </section>

          {/* CTA 섹션 */}
          <section className="py-24 md:py-32 bg-muted/30">
            <Container>
              <div className="text-center space-y-6 max-w-2xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold">
                  네이버페이로 구매하기
                </h2>
                <p className="text-lg text-muted-foreground">
                  담솔의 각품을 네이버 스마트스토어에서 만나보세요.
                </p>
                <a
                  href="https://smartstore.naver.com/damsol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90"
                >
                  네이버스토어 바로가기
                </a>
              </div>
            </Container>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
