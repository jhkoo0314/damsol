import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChevronRight, 
  Check, 
  Gem, 
  PenTool, 
  Hourglass, 
  ArrowRight,
  ExternalLink
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
        {/* ===== Hero Section ===== */}
        <section className="grid gap-10 py-16 md:py-24 md:grid-cols-2 items-center">
          {/* Left: Text */}
          <div className="flex flex-col justify-center gap-6">
            <Badge variant="dashed" className="w-fit">
              각품 브랜드
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight text-gray-900">
              평생 쓸 이름이기에, <br/>
              <span className="inline-block mt-2">하루의 진심을 다합니다.</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
              담솔은 도장을 만들지 않습니다.<br/>
              천연석 위에 당신의 이름과 시간을 새기는 
              <strong className="font-semibold text-foreground"> 각품(刻品)</strong>을 만듭니다.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground/80 italic max-w-md">
              &ldquo;자연이 만든 한 조각에 당신의 시간을 새깁니다.&rdquo;
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link href="/story">
                  브랜드 스토리 보기
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/stones">
                  돌 선택하러 가기
                </Link>
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground font-medium">
              <span className="flex items-center gap-1">
                <Check className="h-3 w-3" /> 100% 수제 각인
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-3 w-3" /> 천연석 유일 개체
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-3 w-3" /> 진공 보존 기술
              </span>
            </div>
          </div>
          {/* Right: Hero Image Placeholder */}
          <div className="relative group">
            <ImagePlaceholder
              aspectRatio="hero"
              className="w-full rounded-xl"
              label="작가의 손이 돌에 닿는 순간 클로즈업"
              showIcon
            />
          </div>
        </section>

        {/* ===== Brand Story / Philosophy ===== */}
        <section className="py-16 border-t border-gray-100">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold">
              우리는 도장을 만들지 않습니다
            </h2>
            <span className="text-xs font-sans tracking-widest text-muted-foreground">
              BRAND STORY
            </span>
          </div>
          <div className="space-y-8">
            <div className="space-y-6 text-base leading-loose text-gray-600 font-serif">
              <p>
                <span className="text-foreground font-semibold">대량생산이 아닌 단 하나의 작품으로,</span><br/>
                실용품이 아닌 시간을 담는 오브제로.
              </p>
              <p>
                기계가 0.1초 만에 찍어내는 인장이 아니라,<br/>
                하루의 시간을 들여 한 획 한 획 새겨 넣는 이름입니다.
              </p>
              <p>
                담솔은 천연석의 결과 이름의 기운을 읽어,<br/>
                평생을 함께할 한 사람의 얼굴을 돌 위에 새깁니다.
              </p>
              <div className="pt-4">
                <span className="font-serif text-lg text-foreground block">담솔 작가 올림</span>
                <div className="h-10 mt-2 opacity-50" /> {/* 낙관 이미지 자리 */}
              </div>
            </div>
            {/* 작업실/공방 전경 이미지 - 우측 정렬, 작은 사이즈 */}
            <div className="flex justify-end">
              <div className="w-full md:w-2/3 lg:w-1/2">
                <ImagePlaceholder
                  aspectRatio="wide"
                  className="w-full rounded-xl"
                  label="작업실/공방 전경"
                  showIcon
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== Kakpoom Section ===== */}
        <section className="py-16 border-t border-gray-100">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold">
              각품(刻品), 새겨진 하나의 작품
            </h2>
            <span className="text-xs font-sans tracking-widest text-muted-foreground">
              SIGNATURE
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-2 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-foreground">
                  <Gem className="h-5 w-5" />
                </div>
                <CardTitle className="font-serif">유일한 돌</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  같은 종류의 돌이라도 결, 색감, 표면은 모두 다릅니다.
                  담솔의 각품은 이 유일한 표정을 읽는 것에서 시작합니다.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-2 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-foreground">
                  <PenTool className="h-5 w-5" />
                </div>
                <CardTitle className="font-serif">손의 각(刻)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  칼끝의 각도와 깊이, 손의 힘 조절까지
                  기계가 낼 수 없는 자연스러운 표정을 만듭니다.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-2 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-foreground">
                  <Hourglass className="h-5 w-5" />
                </div>
                <CardTitle className="font-serif">시간의 품</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  탄생과 기념, 인연과 존재를
                  세월이 지나도 지워지지 않는 형태로 남깁니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ===== Process Section ===== */}
        <section className="py-16 border-t border-gray-100">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold">
              담솔의 작업 과정
            </h2>
            <span className="text-xs font-sans tracking-widest text-muted-foreground">
              PROCESS
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5 text-sm">
            {/* Step 1 */}
            <Card className="flex flex-col h-full">
              <CardHeader className="pb-3">
                <span className="text-xs font-bold text-gray-400 mb-1">01</span>
                <CardTitle className="text-base font-serif">돌을 선택합니다</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 text-muted-foreground text-xs leading-relaxed">
                <div className="mb-3">
                  <ImagePlaceholder
                    aspectRatio="wide"
                    className="w-full rounded-md"
                    label="돌 선택 과정"
                    showIcon
                  />
                </div>
                여러 개의 천연석 중 이름과 어울리는 단 한 점을 고릅니다.
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="flex flex-col h-full">
              <CardHeader className="pb-3">
                <span className="text-xs font-bold text-gray-400 mb-1">02</span>
                <CardTitle className="text-base font-serif">결을 읽습니다</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 text-muted-foreground text-xs leading-relaxed">
                <div className="mb-3">
                  <ImagePlaceholder
                    aspectRatio="wide"
                    className="w-full rounded-md"
                    label="결 읽기 과정"
                    showIcon
                  />
                </div>
                빛에 비춰 결의 방향과 흐름을 확인합니다.
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="flex flex-col h-full">
              <CardHeader className="pb-3">
                <span className="text-xs font-bold text-gray-400 mb-1">03</span>
                <CardTitle className="text-base font-serif">디자인합니다</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 text-muted-foreground text-xs leading-relaxed">
                <div className="mb-3">
                  <ImagePlaceholder
                    aspectRatio="wide"
                    className="w-full rounded-md"
                    label="서체 디자인 과정"
                    showIcon
                  />
                </div>
                획의 의미와 균형을 고려해 서체를 구성합니다.
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="flex flex-col h-full">
              <CardHeader className="pb-3">
                <span className="text-xs font-bold text-gray-400 mb-1">04</span>
                <CardTitle className="text-base font-serif">칼로 새깁니다</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 text-muted-foreground text-xs leading-relaxed">
                <div className="mb-3">
                  <ImagePlaceholder
                    aspectRatio="wide"
                    className="w-full rounded-md"
                    label="칼로 새기는 과정"
                    showIcon
                  />
                </div>
                한 획씩, 손의 감각으로 깊이를 조절해 새깁니다.
              </CardContent>
            </Card>

            {/* Step 5 */}
            <Card className="flex flex-col h-full">
              <CardHeader className="pb-3">
                <span className="text-xs font-bold text-gray-400 mb-1">05</span>
                <CardTitle className="text-base font-serif">완성합니다</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 text-muted-foreground text-xs leading-relaxed">
                <div className="mb-3">
                  <ImagePlaceholder
                    aspectRatio="wide"
                    className="w-full rounded-md"
                    label="연마 및 완성 과정"
                    showIcon
                  />
                </div>
                연마·검수 및 진공 작업을 거쳐 완성합니다.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ===== Stone Selection Preview ===== */}
        <section className="py-16 border-t border-gray-100">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold">
              돌을 먼저 만나보세요
            </h2>
            <span className="text-xs font-sans tracking-widest text-muted-foreground">
              GALLERY
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-8">
            담솔의 각품은 돌을 고르는 순간부터 시작됩니다.
            <br className="hidden sm:block"/>아래는 실제 사용되는 천연석 예시입니다. 클릭하시면 스토어로 이동합니다.
          </p>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {/* Gallery Items */}
            <ImagePlaceholder
              aspectRatio="square"
              className="w-full rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
              label="천연석 Type A (수산석)"
              showIcon
            />
            <ImagePlaceholder
              aspectRatio="square"
              className="w-full rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
              label="천연석 Type B (요녕석)"
              showIcon
            />
            <ImagePlaceholder
              aspectRatio="square"
              className="w-full rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
              label="천연석 Type C (창화석)"
              showIcon
            />
            <ImagePlaceholder
              aspectRatio="square"
              className="w-full rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
              label="천연석 Type D (프리미엄)"
              showIcon
            />
            <ImagePlaceholder
              aspectRatio="square"
              className="w-full rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
              label="작품 예시 01"
              showIcon
            />
            <ImagePlaceholder
              aspectRatio="square"
              className="w-full rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
              label="작품 예시 02"
              showIcon
            />
            <ImagePlaceholder
              aspectRatio="square"
              className="w-full rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
              label="작품 예시 03"
              showIcon
            />
            <div className="aspect-square rounded-xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-[11px] text-muted-foreground hover:bg-gray-100 transition-colors cursor-pointer">
              <span className="text-center flex flex-col items-center gap-2">
                <span>더 보기</span>
                <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
          <div className="mt-8 text-center sm:text-left">
            <Button asChild variant="outline" size="sm">
              <Link href="/stones">
                실제 상품 보러가기
                <ExternalLink className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </section>

        {/* ===== Products Section ===== */}
        <section className="py-16 border-t border-gray-100">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold">
              각품 라인업
            </h2>
            <span className="text-xs font-sans tracking-widest text-muted-foreground">
              PRODUCTS
            </span>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Product 1 */}
            <Card className="overflow-hidden group">
              <div className="border-b">
                <ImagePlaceholder
                  aspectRatio="portrait"
                  className="w-full"
                  label="탯줄/보존 도장"
                  showIcon
                />
              </div>
              <CardHeader className="pb-2">
                <Badge className="w-fit mb-2 bg-black text-white border-transparent">BEST</Badge>
                <CardTitle className="font-serif text-lg">The Origin (탯줄/보존)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  탯줄, 유치 등 소중한 신체의 일부를 진공 상태로 영구 보존하는 담솔의 시그니처 각품입니다.
                </p>
                <a href="#" className="text-xs font-bold underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-all">자세히 보기</a>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="overflow-hidden group">
              <div className="border-b">
                <ImagePlaceholder
                  aspectRatio="portrait"
                  className="w-full"
                  label="이름/개인 도장"
                  showIcon
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="font-serif text-lg">The Signature (이름)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  선별된 원석과 높은 난도의 수제 각인으로 이름의 무게감을 더하는 개인용 각품입니다.
                </p>
                <a href="#" className="text-xs font-bold underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-all">자세히 보기</a>
              </CardContent>
            </Card>

            {/* Product 3 */}
            <Card className="overflow-hidden group">
              <div className="border-b">
                <ImagePlaceholder
                  aspectRatio="portrait"
                  className="w-full"
                  label="커플/선물 도장"
                  showIcon
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="font-serif text-lg">The Promise (커플)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  두 개의 돌이 합쳐져 하나의 그림이 되는, 변치 않을 약속을 상징하는 선물용 각품입니다.
                </p>
                <a href="#" className="text-xs font-bold underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-all">자세히 보기</a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ===== Store CTA Section ===== */}
        <section className="py-20 border-t border-gray-100 bg-gray-50/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mt-12">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold">
              네이버스토어에서 각품을 만나보세요
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              담솔의 모든 각품은 네이버 스마트스토어에서 안전하게 결제하실 수 있습니다.<br className="hidden sm:block"/>
              한 번의 선택이 평생의 기록이 되도록, 끝까지 책임을 다하겠습니다.
            </p>
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all">
              <a
                href="https://smartstore.naver.com/damsolseal"
                target="_blank"
                rel="noopener noreferrer"
              >
                네이버 스마트스토어 바로가기
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
