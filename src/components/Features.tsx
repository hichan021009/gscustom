import { Shield, Wrench, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "安心の品質保証",
    description: "すべての車両は厳格な検査を経て、最高の安全性と品質基準を満たしています。"
  },
  {
    icon: Wrench,
    title: "専門サービス",
    description: "経験豊富な技術者が、充実したメンテナンスとサポートでお客様の安心をお約束します。"
  },
  {
    icon: Clock,
    title: "柔軟なローン",
    description: "お客様のニーズに合わせた各種ローンプランをご用意。夢のキャンピングカーを手に入れるお手伝いをします。"
  },
  {
    icon: Award,
    title: "充実の保証",
    description: "すべての車両に充実した保証が付帯。安心して旅をお楽しみいただけます。"
  }
];

export function Features() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-2">選ばれる理由</p>
          <h2 className="mb-4">信頼のパートナー</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            お客様の旅の夢を実現するために、最高のサービスと品質の高い車両をご提供することをお約束します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-6">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}