"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { CollectionGrid } from "@/components/collections/collection-grid";
import { motion } from "framer-motion";

export default function CollectionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Container>
          {/* 히어로 섹션 */}
          <section className="py-24 md:py-32 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-serif text-4xl md:text-6xl font-bold mb-8"
            >
              Collection
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            >
              담솔의 각품 컬렉션
            </motion.p>
          </section>

          {/* 컬렉션 그리드 */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="py-16 md:py-24"
          >
            <CollectionGrid />
          </motion.section>
        </Container>
      </main>
      <Footer />
    </>
  );
}

