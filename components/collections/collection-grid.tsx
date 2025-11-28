"use client";

import { useState, useMemo } from "react";
import { getCollections } from "@/lib/data";
import { CollectionCard } from "./collection-card";
import { CollectionDetailModal } from "./collection-detail-modal";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 9;

interface CollectionGridProps {
  limit?: number;
}

export function CollectionGrid({ limit }: CollectionGridProps = {}) {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const collections = getCollections();

  // limit이 있으면 해당 개수만큼만 표시, 없으면 전체 컬렉션 사용
  const displayCollections = limit ? collections.slice(0, limit) : collections;

  // limit이 있으면 페이지네이션 없이 전체 표시, 없으면 페이지네이션 적용
  const currentCollections = useMemo(
    () => {
      if (limit) {
        return displayCollections;
      }
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      return displayCollections.slice(startIndex, endIndex);
    },
    [displayCollections, limit, currentPage]
  );

  // 페이지네이션 계산 (limit이 없을 때만 필요)
  const totalPages = limit ? 1 : Math.ceil(displayCollections.length / ITEMS_PER_PAGE);

  const handleCollectionClick = (collectionId: string) => {
    console.log("[Collection] 컬렉션 클릭:", collectionId);
    setSelectedCollection(collectionId);
  };

  const selectedCollectionData = selectedCollection
    ? collections.find((c) => c.id === selectedCollection) || null
    : null;

  // limit이 있으면 페이지네이션 숨김
  const showPagination = !limit && totalPages > 1;

  // 페이지 번호 생성
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      // 전체 페이지가 5개 이하면 모두 표시
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 첫 페이지
      pages.push(1);

      if (currentPage > 3) {
        pages.push("ellipsis-start");
      }

      // 현재 페이지 주변
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("ellipsis-end");
      }

      // 마지막 페이지
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {currentCollections.map((collection) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
            onClick={() => handleCollectionClick(collection.id)}
          />
        ))}
      </div>

      {/* 페이지네이션 */}
      {showPagination && (
        <div className="mt-12 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => {
                    if (currentPage > 1) {
                      setCurrentPage(currentPage - 1);
                      console.log("[Collection] 이전 페이지:", currentPage - 1);
                    }
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>

              {getPageNumbers().map((page, index) => {
                if (page === "ellipsis-start" || page === "ellipsis-end") {
                  return (
                    <PaginationItem key={`ellipsis-${index}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }

                const pageNumber = page as number;
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      isActive={currentPage === pageNumber}
                      onClick={() => {
                        setCurrentPage(pageNumber);
                        console.log("[Collection] 페이지 변경:", pageNumber);
                      }}
                      className="cursor-pointer"
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  onClick={() => {
                    if (currentPage < totalPages) {
                      setCurrentPage(currentPage + 1);
                      console.log("[Collection] 다음 페이지:", currentPage + 1);
                    }
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

      {/* 모달 */}
      {selectedCollectionData && (
        <CollectionDetailModal
          collection={selectedCollectionData}
          open={selectedCollection !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedCollection(null);
          }}
        />
      )}
    </>
  );
}

