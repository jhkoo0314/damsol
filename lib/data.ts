import { Stone } from "./types";
import stonesData from "@/data/stones.json";

/**
 * 돌 목록을 가져옵니다.
 * 서버와 클라이언트 모두에서 사용 가능합니다.
 * @returns 돌 배열
 */
export function getStones(): Stone[] {
  // JSON import는 빌드 타임에 처리되므로 클라이언트에서도 안전하게 사용 가능
  return stonesData as Stone[];
}

/**
 * ID로 특정 돌을 가져옵니다.
 * @param id 돌 ID
 * @returns 돌 객체 또는 undefined
 */
export function getStoneById(id: number): Stone | undefined {
  return getStones().find((stone) => stone.id === id);
}

/**
 * 판매 가능한 돌만 필터링합니다.
 * @returns 판매 가능한 돌 배열
 */
export function getAvailableStones(): Stone[] {
  return getStones().filter((stone) => stone.status === "available");
}
