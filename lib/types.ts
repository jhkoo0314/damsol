export type StoneStatus = "available" | "sold_out";

export interface Stone {
  id: number;
  name: string;
  number: string;
  color: string;
  texture: string;
  status: StoneStatus;
  imageUrl: string;
}

export type ProductCategory = "classic" | "premium" | "masterpiece";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description?: string;
  imageUrl?: string;
  naverStoreUrl?: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  badge?: string;
  naverStoreUrl?: string;
  details?: {
    title?: string;
    content?: string;
    features?: string[];
  };
}