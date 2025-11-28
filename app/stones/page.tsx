import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Container } from "@/components/layout/container";
import { StoneGrid } from "@/components/stones/stone-grid";
import { StoreLinkButton } from "@/components/stones/store-link-button";

export const metadata: Metadata = {
  title: "돌 선택 | 담솔 DAMSOL",
  description: "천연석을 선택하세요. 같은 돌은 없습니다. 당신의 이름과 어울리는 단 하나의 돌을 찾아보세요.",
};

export default function StonesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Container>
          {/* 히어로 섹션 */}
          <section className="py-24 md:py-32 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8">
              같은 돌은 없습니다
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              천연석은 두 개가 같을 수 없습니다.
              <br />
              같은 종류의 돌이라도 결의 방향, 색의 농담, 표면의 질감은 모두 다릅니다.
            </p>
          </section>

          {/* 돌 그리드 */}
          <section className="py-16 md:py-24">
            <StoneGrid />
          </section>

          {/* 안내 섹션 */}
          <section className="py-16 md:py-24 bg-muted/30">
            <Container>
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold">
                  돌을 선택하셨나요?
                </h2>
                <p className="text-lg text-muted-foreground">
                  돌을 클릭하면 상세 정보와 구매 옵션을 확인할 수 있습니다.
                  <br />
                  각 돌은 당신의 이름과 어울리는 단 하나의 작품이 됩니다.
                </p>
                <p className="text-muted-foreground">
                  구매는 네이버 스마트스토어에서 진행됩니다.
                </p>
                <div className="pt-4">
                  <StoreLinkButton />
                </div>
              </div>
            </Container>
          </section>
        </Container>
      </main>
    </>
  );
}
