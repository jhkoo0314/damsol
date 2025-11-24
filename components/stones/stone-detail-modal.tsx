"use client";

import { useState } from "react";
import { Stone, ProductCategory } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface StoneDetailModalProps {
  stone: Stone | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const productCategories: { value: ProductCategory; label: string }[] = [
  { value: "classic", label: "Classic 刻" },
  { value: "premium", label: "Premium 刻" },
  { value: "masterpiece", label: "Masterpiece 刻" },
];

export function StoneDetailModal({
  stone,
  open,
  onOpenChange,
}: StoneDetailModalProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>("classic");

  if (!stone) return null;

  const handlePurchase = () => {
    const baseUrl = "https://smartstore.naver.com/damsol";
    const categoryParam = `category=${selectedCategory}`;
    const stoneParam = `stone=${stone.id}`;
    window.open(`${baseUrl}?${categoryParam}&${stoneParam}`, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{stone.name}</DialogTitle>
          <DialogDescription>
            No. {stone.number} · {stone.color}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* 돌 이미지 */}
          <div className="aspect-square w-full overflow-hidden rounded-lg">
            <ImagePlaceholder
              aspectRatio="square"
              className="h-full w-full"
              label={`${stone.name} 클로즈업`}
            />
          </div>

          {/* 돌 정보 */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">돌 정보</h3>
              <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium">색상:</span> {stone.color}
                </p>
                <p>
                  <span className="font-medium">결 특징:</span> {stone.texture}
                </p>
                <p>
                  <span className="font-medium">상태:</span>{" "}
                  {stone.status === "available" ? "판매중" : "품절"}
                </p>
              </div>
            </div>

            {/* 상품 선택 */}
            {stone.status === "available" && (
              <div className="space-y-3">
                <Label className="text-base font-semibold">
                  구매할 상품 선택
                </Label>
                <RadioGroup
                  value={selectedCategory}
                  onValueChange={(value) =>
                    setSelectedCategory(value as ProductCategory)
                  }
                >
                  {productCategories.map((category) => (
                    <div
                      key={category.value}
                      className="flex items-center space-x-2 rounded-lg border p-3 hover:bg-accent"
                    >
                      <RadioGroupItem
                        value={category.value}
                        id={category.value}
                      />
                      <Label
                        htmlFor={category.value}
                        className="flex-1 cursor-pointer font-medium"
                      >
                        {category.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
          </div>

          {/* 구매 버튼 */}
          {stone.status === "available" ? (
            <Button
              onClick={handlePurchase}
              className="w-full"
              size="lg"
            >
              네이버스토어에서 구매하기
            </Button>
          ) : (
            <Button disabled className="w-full" size="lg">
              품절된 상품입니다
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

