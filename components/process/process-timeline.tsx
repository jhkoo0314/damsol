import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "돌을 선택합니다",
    description: "수십 개의 천연석 중 이름과 어울리는 단 하나를 고릅니다.",
  },
  {
    number: 2,
    title: "결을 읽습니다",
    description: "빛을 비춰 결의 방향과 흐름을 확인합니다.",
  },
  {
    number: 3,
    title: "이름을 디자인합니다",
    description: "획의 의미, 이름의 무게, 돌의 표정을 고려해 밑그림을 구성합니다.",
  },
  {
    number: 4,
    title: "칼로 새깁니다",
    description: "한 획씩, 결을 따라, 손의 감각으로 조각합니다.",
  },
  {
    number: 5,
    title: "다듬고 완성합니다",
    description: "표면을 연마하고, 빛과 그림자를 조정해 마지막 깊이를 더합니다.",
  },
];

export function ProcessTimeline() {
  return (
    <div className="relative">
      {/* 연결선 (데스크톱) */}
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
      
      <div className="space-y-12 md:space-y-16">
        {processSteps.map((step) => (
          <div key={step.number} className="relative">
            {/* 번호 원 (데스크톱) */}
            <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl font-bold z-10 border-4 border-background">
                {step.number}
              </div>
            </div>
            
            {/* 모바일 번호 */}
            <div className="md:hidden mb-4">
              <div className="inline-flex w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center font-serif text-lg font-bold">
                {step.number}
              </div>
            </div>
            
            {/* 콘텐츠 */}
            <div className="md:ml-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* 텍스트 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* 이미지 */}
                <div>
                  <ImagePlaceholder
                    aspectRatio="wide"
                    className="w-full rounded-xl"
                    label={`${step.title} 이미지`}
                    showIcon
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

