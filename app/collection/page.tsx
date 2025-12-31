import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { CollectionGrid } from "@/components/collections/collection-grid";

export const metadata: Metadata = {
  title: "컬렉션 | 담솔 DAMSOL",
  description: "담솔의 각품 컬렉션을 만나보세요. The Origin, The Signature, The Promise. 시간을 새긴 각품의 모든 라인업.",
};

export default function CollectionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Container>
          {/* 히어로 섹션 */}
          <section className="py-24 md:py-32 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8">
              Collection
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              담솔의 각품 컬렉션
            </p>
          </section>

          {/* 컬렉션 그리드 */}
          <section className="py-16 md:py-24">
            <CollectionGrid />
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}

