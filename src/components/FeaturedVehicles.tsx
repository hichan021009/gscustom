import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Users, Bed, Gauge, Ruler, Weight } from "lucide-react";
import aiImage from "figma:asset/1319519e9fa29ef62df8a0e607522157551c516b.png";
import aiFImage from "figma:asset/8d3175af046300bfcf74fd2e4d8fbf1cfb305079.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const vehicles = [
  {
    id: 1,
    name: "Ai",
    type: "Ai",
    image: aiImage,
    price: "¥9,300,000",
    passengers: 7,
    beds: 5,
    length: "4.95m",
    width: "208cm",
    height: "292cm",
    description: "7人乗り・5人就寝可能なゆとりある空間設計。家族での旅行に最適なモデル。"
  },
  {
    id: 2,
    name: "Ai F",
    type: "Ai F",
    image: aiFImage,
    price: "¥8,900,000",
    passengers: 7,
    beds: 5,
    length: "4.95m",
    width: "205cm",
    height: "292cm",
    description: "コンパクトな全幅で運転しやすく、7人乗り・5人就寝可能。価格も抑えたモデル。"
  }
];

export function FeaturedVehicles() {
  return (
    <section id="vehicles" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-2">車種ラインナップ</p>
          <h2 className="mb-4">2つのタイプから選べる</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            用途に合わせて選べる2種類のキャンピングカー。
            それぞれの魅力をご確認ください。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="relative h-[500px] overflow-hidden rounded-lg group cursor-pointer">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <Badge className="absolute top-4 right-4 bg-black text-white z-20">
                {vehicle.type}
              </Badge>
              
              {/* ホバー時の説明オーバーレイ */}
              <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-8">
                <h3 className="mb-4 text-black">{vehicle.name}</h3>
                <p className="text-gray-700 mb-6">{vehicle.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-300">
                  <div className="text-center">
                    <Users className="h-5 w-5 mx-auto mb-1 text-gray-600" />
                    <p className="text-gray-600">定員</p>
                    <p className="text-black">{vehicle.passengers}名</p>
                  </div>
                  <div className="text-center">
                    <Bed className="h-5 w-5 mx-auto mb-1 text-gray-600" />
                    <p className="text-gray-600">就寝</p>
                    <p className="text-black">{vehicle.beds}名</p>
                  </div>
                  <div className="text-center">
                    <Ruler className="h-5 w-5 mx-auto mb-1 text-gray-600" />
                    <p className="text-gray-600">全長</p>
                    <p className="text-black">{vehicle.length}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-black">{vehicle.price}〜</span>
                  <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                    詳細を見る
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-500 mt-6">
          ※画像にカーソルを乗せると詳細情報が表示されます
        </p>
      </div>
    </section>
  );
}