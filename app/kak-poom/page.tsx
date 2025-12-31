import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "각품 소개 | 담솔 DAMSOL",
  description: "각품(刻品)이란 무엇인가요? 새긴다(刻) + 품(品) = 의미가 새겨진 작품. 담솔이 정의한 고유 브랜드 언어를 소개합니다.",
};

export default function KakPoomPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Container>
          {/* 히어로 섹션 */}
          <section className="py-24 md:py-32 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8">
              각품(刻品)
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              담솔이 정의한 고유 브랜드 언어
            </p>
          </section>

          {/* 각품 개념 설명 */}
          <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-6">
                <p className="font-serif text-3xl md:text-4xl font-semibold">
                  &apos;새긴다(刻)&apos; + &apos;품(品)&apos; = 의미가 새겨진 작품
                </p>
                <p className="text-lg text-muted-foreground">
                  도장을 &quot;제품(product)&quot;에서 &quot;개인적 예술결과물(piece)&quot;로 재정의하는 단어
                </p>
              </div>

              {/* 각품의 3요소 시각화 */}
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="text-6xl mb-4 font-serif">形</div>
                    <CardTitle className="font-serif text-2xl">형(形)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      돌의 표정과 자연의 결
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="text-6xl mb-4 font-serif">刻</div>
                    <CardTitle className="font-serif text-2xl">각(刻)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      손으로 새기는 조각·깊이·획
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="text-6xl mb-4 font-serif">品</div>
                    <CardTitle className="font-serif text-2xl">품(品)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      완성된 작품의 품격·상징적 의미
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 플로우 설명 */}
              <div className="text-center py-8">
                <p className="font-serif text-2xl font-semibold">
                  돌의 형 → 사람의 각 → 작품의 품
                </p>
                <p className="text-muted-foreground mt-4">
                  기존 도장 업체들이 절대 구현할 수 없는 고유 포지션
                </p>
              </div>
            </div>
          </section>

          {/* 각품의 가치 제안 */}
          <section className="py-24 md:py-32">
            <Container>
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                  각품의 가치 제안
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  담솔의 각품이 제공하는 5가지 핵심 가치
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Unicity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">Unicity</CardTitle>
                    <p className="text-sm text-muted-foreground">유일함</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• 같은 원석 없음</li>
                      <li>• 같은 이름 없음</li>
                      <li>• 같은 결과물 없음</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Craft */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">Craft</CardTitle>
                    <p className="text-sm text-muted-foreground">공예성</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• 100% 손작업</li>
                      <li>• 칼각·획·깊이·결에 따른 완성도</li>
                      <li>• 각인의 예술성</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Permanence */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">Permanence</CardTitle>
                    <p className="text-sm text-muted-foreground">영속성</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• 시간이 지나도 형태가 유지됨</li>
                      <li>• 탯줄도장: 진공·레진 기술로 보존성 극대화</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Meaning */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">Meaning</CardTitle>
                    <p className="text-sm text-muted-foreground">기념성</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• 탄생·기록·인연·존재를 &apos;형태&apos;로 남김</li>
                      <li>• 감성·스토리 기반 제작</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Accessible Premium */}
                <Card className="md:col-span-2 lg:col-span-1">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">Accessible Premium</CardTitle>
                    <p className="text-sm text-muted-foreground">합리적 프리미엄</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• 가격은 대중적, 과정은 장인급</li>
                      <li>• &quot;가성비&quot;가 아닌 가치 대비 합리적 가격</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </Container>
          </section>

          {/* 마무리 섹션 */}
          <section className="py-16 md:py-32 bg-muted/30">
            <Container>
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <p className="font-serif text-3xl md:text-4xl font-semibold">
                  담솔은 도장을 만들지 않습니다.
                </p>
                <p className="font-serif text-3xl md:text-4xl font-semibold">
                  시간을 새긴 각품(刻品)을 만듭니다.
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
