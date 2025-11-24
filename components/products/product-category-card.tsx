import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { ProductCategory } from "@/lib/types";

interface ProductCategoryCardProps {
  category: ProductCategory;
  title: string;
  description: string;
  customerInsight: string;
  products: string[];
  href?: string;
}

const categoryLabels: Record<ProductCategory, string> = {
  classic: "Classic 刻",
  premium: "Premium 刻",
  masterpiece: "Masterpiece 刻",
};

export function ProductCategoryCard({
  category,
  title,
  description,
  customerInsight,
  products,
  href,
}: ProductCategoryCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <div className="aspect-video overflow-hidden rounded-t-xl">
        <ImagePlaceholder
          aspectRatio="video"
          className="w-full h-full"
          label={`${title} 대표 이미지`}
        />
      </div>
      
      <CardHeader>
        <CardTitle className="font-serif text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{categoryLabels[category]}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <div className="pt-4 border-t">
          <p className="text-sm font-medium mb-2">고객 인식</p>
          <p className="text-sm text-muted-foreground italic">&quot;{customerInsight}&quot;</p>
        </div>
        <div className="pt-4 border-t">
          <p className="text-sm font-medium mb-2">주력 제품</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            {products.map((product, index) => (
              <li key={index}>• {product}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter>
        {href ? (
          <Button asChild className="w-full" variant="outline">
            <Link href={href}>자세히 보기</Link>
          </Button>
        ) : (
          <Button asChild className="w-full" variant="outline">
            <a
              href="https://smartstore.naver.com/damsol"
              target="_blank"
              rel="noopener noreferrer"
            >
              네이버스토어 상품페이지 보기
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

