"use client";

import { useState } from "react";
import { getStones } from "@/lib/data";
import { StoneCard } from "./stone-card";
import { StoneDetailModal } from "./stone-detail-modal";

export function StoneGrid() {
  const [selectedStone, setSelectedStone] = useState<number | null>(null);
  const stones = getStones();

  const handleStoneClick = (stoneId: number) => {
    setSelectedStone(stoneId);
  };

  const selectedStoneData = selectedStone
    ? stones.find((s) => s.id === selectedStone) || null
    : null;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {stones.map((stone) => (
          <StoneCard
            key={stone.id}
            stone={stone}
            onClick={() => handleStoneClick(stone.id)}
          />
        ))}
      </div>

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

