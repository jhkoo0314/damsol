import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export const metadata: Metadata = {
  title: "브랜드 스토리 | 담솔 DAMSOL",
  description: "담솔의 브랜드 스토리와 철학을 소개합니다. 우리는 도장을 만들지 않습니다. 시간을 새긴 각품(刻品)을 만듭니다.",
};

export default function StoryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Container>
          {/* 히어로 섹션 */}
          <section className="py-24 md:py-32 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8">
              우리는 도장을 만들지 않습니다
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              대량생산이 아닌 단 하나의 작품으로,
              <br />
              실용품이 아닌 시간을 담은 <span className="font-serif">각품(刻品)</span>으로.
            </p>
            <p className="text-lg text-muted-foreground">
              당신의 이야기를 돌 위에 새깁니다.
            </p>
          </section>

          {/* 0.1mm의 숨결까지 조각합니다 */}
          <section className="py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ImagePlaceholder
                  aspectRatio="wide"
                  className="w-full rounded-xl"
                  label="작가의 손 작업 이미지"
                  showIcon
                />
              </div>
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold">
                  0.1mm의 숨결까지 조각합니다
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    기계는 완벽한 직선을 긋지만, 사람의 온기를 담지 못합니다.
                    컴퓨터 폰트는 깔끔하지만, 당신 이름만의 고유한 무게를 모릅니다.
                  </p>
                  <p>
                    담솔의 작가는 돌을 쥔 순간부터 고민합니다.
                    이름의 획순, 글자의 기운, 그리고 돌의 결의 흐름까지.
                  </p>
                  <p className="font-medium">
                    단순히 이름을 파내는 것이 아니라,
                    종이 위에 찍혔을 때 비로소 완성되는 당신의 품격을 생각하며 칼을 듭니다.
                  </p>
                  <p>
                    그래서 담솔의 도장은 단순한 인장이 아니라
                    당신을 대신하는 또 하나의 얼굴,
                    그리고 시간이 깃든 <span className="font-serif">각품(刻品)</span>이 됩니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 담솔의 각인은 다릅니다 */}
          <section className="py-16 md:py-24 bg-muted/30">
            <Container>
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center">
                  담솔의 각인은 다릅니다
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    돌의 결을 따라 칼날의 각이 달라지고,
                    새기는 깊이가 손의 감각에 따라 조심스레 바뀌며,
                    한 획 한 획은 작은 숨결처럼 조각됩니다.
                  </p>
                  <p>
                    그래서 빛이 머무는 방식이 달라지고,
                    그래서 그림자가 생기는 방향이 달라지며,
                    그래서 같은 이름도 서로 다른 표정을 갖습니다.
                  </p>
                  <p className="font-medium text-center text-lg">
                    담솔은 하루를 씁니다.
                    <br />
                    당신의 이름은 대량생산될 수 없는 것이니까요.
                  </p>
                </div>
              </div>
            </Container>
          </section>

          {/* 같은 돌은 없습니다 */}
          <section className="py-16 md:py-24">
            <Container>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold">
                    같은 돌은 없습니다
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      천연석은 두 개가 같을 수 없습니다.
                    </p>
                    <p>
                      같은 종류의 돌이라도
                      결의 방향, 색의 농담, 표면의 질감은 모두 다릅니다.
                      담솔은 이 자연스러운 &apos;다름&apos;에서 시작합니다.
                    </p>
                    <p>
                      수십 개의 돌 중, 당신의 이름과 가장 어울리는 돌을 고르고
                      그 돌이 가진 고유한 표정을 읽어냅니다.
                    </p>
                    <p>
                      빛을 받았을 때 생기는 음영,
                      손에 쥐었을 때 느껴지는 온도,
                      결이 흘러가는 방향.
                    </p>
                    <p className="font-medium">
                      모든 것이 다르기 때문에,
                      같은 이름이라도 담솔에서 탄생한 <span className="font-serif">각품(刻品)</span>은
                      결코 같을 수 없습니다.
                    </p>
                  </div>
                </div>
                <div>
                  <ImagePlaceholder
                    aspectRatio="wide"
                    className="w-full rounded-xl"
                    label="다양한 천연석 이미지"
                    showIcon
                  />
                </div>
              </div>
            </Container>
          </section>

          {/* 복제할 수 없는 단 하나의 표정 */}
          <section className="py-16 md:py-24 bg-muted/30">
            <Container>
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center">
                  복제할 수 없는 단 하나의 표정
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    반듯하게 깎인 기계 도장에도 장점은 있습니다.
                    하지만 담솔의 수제 도장은 전혀 다른 가치를 추구합니다.
                  </p>
                  <p>
                    서체를 기계적으로 옮기는 것이 아니라,
                    활석의 무늬·색감·기운,
                    그리고 이름이 가진 분위기에 맞춰
                    작가의 칼끝이 새로운 표정을 만들어냅니다.
                  </p>
                  <p>
                    기계가 &apos;대칭의 미학&apos;을 추구한다면,
                    담솔의 손길은 <span className="font-medium">&apos;자연스러움의 미학&apos;</span>을 담습니다.
                  </p>
                  <p className="font-medium text-center">
                    세상에 같은 돌이 없듯,
                    작가의 손으로 새긴 이름도 같을 수 없습니다.
                  </p>
                  <p className="text-center text-lg">
                    그것은 물건이 아니라,
                    오직 당신만을 위해 빚어진 <span className="font-serif">유일한 각품(刻品)</span>입니다.
                  </p>
                </div>
              </div>
            </Container>
          </section>

          {/* 시간을 멈추는 기술, 온전한 보존 */}
          <section className="py-16 md:py-24">
            <Container>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <ImagePlaceholder
                    aspectRatio="wide"
                    className="w-full rounded-xl"
                    label="탯줄도장 보존 기술 이미지"
                    showIcon
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold">
                    시간을 멈추는 기술, 온전한 보존
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      탯줄도장은 단순한 기념품이 아닙니다.
                      열 달 동안 엄마와 아이를 이어주었던 생명의 첫 사인(Sign)입니다.
                    </p>
                    <p>
                      그 숭고한 연결이 세월에 바래지 않도록,
                      담솔은 가장 투명하고 안전한 보존 방식을 택했습니다.
                    </p>
                    <p>
                      황변 없이 맑음을 유지하는 <span className="font-medium">최고급 레진</span>,
                      기포 하나 허락하지 않는 완벽한 진공 봉인,
                      먼지 한 톨조차 들어갈 수 없는 무결점의 공간.
                    </p>
                    <p>
                      그 안에 아이의 첫 시간을 고요히 안치합니다.
                    </p>
                    <p>
                      그래서 아이가 자라 이 도장을 손에 올리는 날에도
                      그날의 온도는 여전히 숨 쉬고 있을 것입니다.
                    </p>
                    <p className="font-medium">
                      이것 또한 하나의 <span className="font-serif">각품(刻品)</span>입니다.
                      탄생의 시간을 형태로 보존한 작품이기 때문입니다.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* 담솔의 과정 */}
          <section className="py-16 md:py-24 bg-muted/30">
            <Container>
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center">
                  담솔의 과정 : 손으로 시작해 손으로 끝납니다
                </h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">1. 돌을 선택합니다</h3>
                    <p className="text-muted-foreground">
                      수십 개의 천연석 중 이름과 어울리는 단 하나를 고릅니다.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">2. 결을 읽습니다</h3>
                    <p className="text-muted-foreground">
                      빛을 비춰 결의 방향과 흐름을 확인합니다.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">3. 이름을 디자인합니다</h3>
                    <p className="text-muted-foreground">
                      획의 의미, 이름의 무게, 돌의 표정을 고려해 밑그림을 구성합니다.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">4. 칼로 새깁니다</h3>
                    <p className="text-muted-foreground">
                      한 획씩, 결을 따라, 손의 감각으로 조각합니다.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">5. 다듬고 완성합니다</h3>
                    <p className="text-muted-foreground">
                      표면을 연마하고, 빛과 그림자를 조정해 마지막 깊이를 더합니다.
                    </p>
                  </div>
                </div>
                <p className="text-center font-medium text-lg pt-4">
                  빠르지 않습니다.
                  효율적이지도 않습니다.
                  <br />
                  하지만 이것이 당신의 이름을 대하는 담솔의 예의입니다.
                </p>
              </div>
            </Container>
          </section>

          {/* 시간을 새기는 일 */}
          <section className="py-16 md:py-24">
            <Container>
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold">
                  시간을 새기는 일
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    탯줄도장은 탄생을 새기고,
                    이름도장은 존재를 새기며,
                    기념도장은 인연의 시간을 새깁니다.
                  </p>
                  <p>
                    담솔이 돌 위에 새기는 것은
                    단순한 글자가 아닙니다.
                  </p>
                  <p>
                    한 생명의 첫 순간,
                    한 사람이 지나온 시간,
                    두 사람이 나눈 의미.
                  </p>
                  <p className="font-medium text-lg">
                    그것을 형태로 남기는 일.
                    그것이 바로 담솔의 <span className="font-serif">각품(刻品)</span>입니다.
                  </p>
                </div>
              </div>
            </Container>
          </section>

          {/* 사라지지 않을 형태로 */}
          <section className="py-16 md:py-24 bg-muted/30">
            <Container>
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold">
                  사라지지 않을 형태로
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    사진은 바래고,
                    편지는 낡으며,
                    디지털 기록은 언젠가 사라집니다.
                  </p>
                  <p className="font-medium text-lg">
                    그러나 돌은 남습니다.
                  </p>
                  <p>
                    담솔의 각품은
                    10년 후에도,
                    20년 후에도,
                    그날의 이름을 기억합니다.
                  </p>
                  <p>
                    세월이 흘러도 변하지 않고,
                    세대를 넘어 전해질 수 있습니다.
                  </p>
                  <p className="font-serif text-xl font-semibold pt-4">
                    이름이 시간이 되고,
                    <br />
                    시간이 형태가 되는 일.
                    <br />
                    그것이 각품입니다.
                  </p>
                </div>
              </div>
            </Container>
          </section>

          {/* 담솔의 약속 */}
          <section className="py-24 md:py-32">
            <Container>
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold">
                  담솔의 약속
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    담솔은 빠르게 만들지 않을 것입니다.
                    많이 만들지도 않을 것입니다.
                  </p>
                  <p>
                    하지만 단 하나의 작품도
                    허투루 만들지 않을 것입니다.
                  </p>
                  <p>
                    천연석을 고르는 순간부터,
                    마지막 포장을 묶는 순간까지,
                    모든 과정에 작가의 손길과 책임이 닿을 것입니다.
                  </p>
                  <p className="font-serif text-2xl font-semibold pt-6">
                    세상에 단 하나뿐인 천연석에,
                    <br />
                    세상에 단 하나뿐인 당신의 이야기를 새기는 것.
                  </p>
                  <p className="text-xl font-medium">
                    그것이 담솔의 <span className="font-serif">각품(刻品)</span>입니다.
                  </p>
                </div>
                <div className="pt-8">
                  <p className="font-serif text-3xl font-bold">DAMSOL</p>
                </div>
              </div>
            </Container>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
