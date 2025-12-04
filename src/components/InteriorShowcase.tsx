import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Coffee, Utensils, Bed, Droplets, Wind, Sofa, Users } from "lucide-react";
import livingRoom1 from "figma:asset/9a830d8f444d6d2ed4f57663351794a32937c5c6.png";
import livingRoom2 from "figma:asset/6b1af5948907adae5f73deee53ad8b7ba4beed3a.png";
import bed1 from "figma:asset/523010959340e4eaa96e2d873a88afd17aaf8529.png";
import bed2 from "figma:asset/15c3e0c47e2afd075810485775c4ffa3054e6cd7.png";
import kitchen1 from "figma:asset/4dc76a41dad94404562447f87e2773867b08406e.png";
import kitchen2 from "figma:asset/3bc5f896c1fac38a845fe24178c3062f0fdab787.png";
import moltiRoom1 from "figma:asset/a142375427852b6b665d808ebad9759eed1aa3ab.png";
import moltiRoom2 from "figma:asset/50b614da75cb814e8ef6aa6de99fef828a8318b8.png";
import aiFLivingRoom1 from "figma:asset/993288d4194a7bb72c7449a2162441b45bdda5f6.png";
import aiFLivingRoom2 from "figma:asset/d1e7defa61478151680bec68181ae1fa798856f7.png";
import aiFKitchen1 from "figma:asset/34422ac6666734b04b8d3492c46ba0d694d1668c.png";
import aiFKitchen2 from "figma:asset/1dcfb0e083798c00f4e11c3595fba55107452fc9.png";
import aiFBed1 from "figma:asset/e7e6410dc09d8c2d5f6ee441a49da8449a62f756.png";
import aiFBed2 from "figma:asset/33dd987ffed19d3846cfec30aad494e0e26acaca.png";
import aiFMoltiRoom1 from "figma:asset/b35255781be5edb93fe333a48f18f8de1b27a107.png";
import aiFMoltiRoom2 from "figma:asset/6d254694e7d48081838b6bbbaaba485470858503.png";

const compactInterior = [
  {
    id: 1,
    title: "Living room",
    icon: Sofa,
    member: 7,
    images: [
      livingRoom1,
      livingRoom2
    ],
    description: "「時間」と「場所」を超える体験になることを約束します",
    highlights: [
      "大きな窓から光をたっぷり取り入れられる空。",
      "シートは長時間移動も疲れない設計になっております。",
      "大きな机を囲んで、ゲストを迎え入れての団欒に更なるゆとりを提供します。"
    ]
  },
  {
    id: 2,
    title: "BED",
    icon: Bed,
    member: 5,
    images: [
      bed1,
      bed2
    ],
    description: "あなたの快適な休息をサポートする特別な空間です",
    highlights: [
      "運転席の上にあるスライド式のボードを引き出せば、大人でも3人が就寝可能な超大型のバンクベッドが出現します。",
      "また座席を展開すればリビングルームも広々とした就寝スペースに変わります。"
    ]
  },
  {
    id: 3,
    title: "Kitchen",
    icon: Utensils,
    images: [
      kitchen1,
      kitchen2
    ],
    description: "機能的でコンパクトなシステムキッチンです",
    highlights: [
      "まな板付きシンクや電子レンジまで、限られた空間でもゆとりを持って調理を楽しめます。",
      "たくさん収納可能な大型の102L冷蔵庫も備け付けております。"
    ]
  },
  {
    id: 4,
    title: "Molti-room",
    icon: Droplets,
    images: [
      moltiRoom1,
      moltiRoom2
    ],
    description: "充実装備のマルチルーム",
    highlights: [
      "温水が使用可能なシャワールームと化粧室をコンパクトにまとめたデザイン",
      "ホテルにいるかのような雰囲気と機能面も充実しております。"
    ]
  }
];

const luxuryInterior = [
  {
    id: 1,
    title: "Living room",
    icon: Sofa,
    member: 7,
    images: [
      aiFLivingRoom1,
      aiFLivingRoom2
    ],
    description: "「時間」と「場所」を超える体験になることを約束します",
    highlights: [
      "大きな窓から光をたっぷり取り入れられる空間。",
      "シートは長時間移動も疲れない設計になっております。",
      "大きな机を囲んで、ゲストを迎え入ての団欒に更なるゆとりを提供します。"
    ]
  },
  {
    id: 2,
    title: "BED",
    icon: Bed,
    member: 5,
    images: [
      aiFBed1,
      aiFBed2
    ],
    description: "あなたの快適な休息をサポートする特別な空間です",
    highlights: [
      "運転席の上にあるスライド式のボードを引き出せば、大人でも3人が就寝可能な超大型のバンクベッドが出現します。",
      "また座席を展開すればリビングルームも広々とした就寝スペースに変わります。",
      "後方には二段ベッドがあり、就寝時は半個室のようになります。"
    ]
  },
  {
    id: 3,
    title: "Kitchen",
    icon: Utensils,
    images: [
      aiFKitchen1,
      aiFKitchen2
    ],
    description: "機能的でコンパクトなシステムキッチンです",
    highlights: [
      "まな板付きのシンクや電子レンジまで、限られた空間でもゆとりを持って調理を楽しめます。",
      "たくさん収納可能な大型の102L冷蔵庫も備え付けております。"
    ]
  },
  {
    id: 4,
    title: "Molti-room",
    icon: Droplets,
    images: [
      aiFMoltiRoom1,
      aiFMoltiRoom2
    ],
    description: "充実装備のマルチルーム",
    highlights: [
      "温水が使用可能なシャワールームと化粧室をコンパクトにまとめたデザイン",
      "ホテルにいるかのような雰囲気と機能面も充実しております。"
    ]
  }
];

export function InteriorShowcase() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-2">車内設備</p>
          <h2 className="mb-4">車の中の紹介</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            車種によて異なる備をご用意。
            それぞれの車内空間をご確認ください。
          </p>
        </div>

        <Tabs defaultValue="compact" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="compact">Ai</TabsTrigger>
            <TabsTrigger value="luxury">Ai F</TabsTrigger>
          </TabsList>
          
          <TabsContent value="compact">
            <div className="mb-8 text-center">
              <Badge className="bg-black text-white mb-4">Ai</Badge>
              <h3 className="mb-2">定員7名・就寝5名</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                ゆとりある空間設計で家族での旅行も快適。
                充実した設備で長期旅行にも対応します。
              </p>
            </div>
            <div className="space-y-16">
              {compactInterior.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.id}>
                    <div className="flex items-center gap-3 mb-6">
                      <Badge className="bg-black text-white">
                        <Icon className="h-4 w-4 mr-1" />
                        {feature.title}
                      </Badge>
                      {feature.member && (
                        <Badge variant="outline" className="gap-1">
                          <Users className="h-3 w-3" />
                          Member: {feature.member}
                        </Badge>
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
                      {feature.images.map((image, index) => (
                        <div key={index} className="group relative aspect-[3/4] overflow-hidden rounded-lg">
                          <img
                            src={image}
                            alt={`${feature.title} ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                    <h3 className="mb-3">{feature.description}</h3>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="luxury">
            <div className="mb-8 text-center">
              <Badge className="bg-black text-white mb-4">Ai F</Badge>
              <h3 className="mb-2">定員7名・就寝5名</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                コンパクトな全幅で運転しやすく、価格も抑えたモデル。
                家族での旅行も快適に楽しめます。
              </p>
            </div>
            <div className="space-y-16">
              {luxuryInterior.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.id}>
                    <div className="flex items-center gap-3 mb-6">
                      <Badge className="bg-black text-white">
                        <Icon className="h-4 w-4 mr-1" />
                        {feature.title}
                      </Badge>
                      {feature.member && (
                        <Badge variant="outline" className="gap-1">
                          <Users className="h-3 w-3" />
                          Member: {feature.member}
                        </Badge>
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
                      {feature.images.map((image, index) => (
                        <div key={index} className="group relative aspect-[3/4] overflow-hidden rounded-lg">
                          <ImageWithFallback
                            src={image}
                            alt={`${feature.title} ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                    <h3 className="mb-3">{feature.description}</h3>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}