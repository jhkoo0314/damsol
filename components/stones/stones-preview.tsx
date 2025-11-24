"use client";

import { useState } from "react";
import Link from "next/link";
import { getStones } from "@/lib/data";
import { StoneCard } from "./stone-card";
import { StoneDetailModal } from "./stone-detail-modal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function StonesPreview() {
  const [selectedStone, setSelectedStone] = useState<number | null>(null);
  const stones = getStones().slice(0, 9); // 최대 9개

  const handleStoneClick = (stoneId: number) => {
    setSelectedStone(stoneId);
  };

  const selectedStoneData = selectedStone
    ? stones.find((s) => s.id === selectedStone) || null
    : null;

  return (
    <>
      <section className="py-24 md:py-32">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              같은 돌은 없습니다
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              천연석은 두 개가 같을 수 없습니다. 같은 종류의 돌이라도 결의 방향, 색의 농담, 표면의 질감은 모두 다릅니다.
            </p>
          </div>

          {/* Grid 3×3 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {stones.map((stone) => (
              <StoneCard
                key={stone.id}
                stone={stone}
                onClick={() => handleStoneClick(stone.id)}
              />
            ))}
          </div>

          {/* 전체 보기 버튼 */}
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/stones">전체 돌 보러가기</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* 모달 */}
      {selectedStoneData && (
        <StoneDetailModal
          stone={selectedStoneData}
          open={selectedStone !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedStone(null);
          }}
        />
      )}
    </>
  );
}

