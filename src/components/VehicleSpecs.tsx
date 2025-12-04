import { Card, CardContent } from "./ui/card";
import { 
  Gauge, 
  Fuel, 
  Wind, 
  Zap, 
  Shield, 
  Thermometer,
  Wifi,
  Battery,
  Sun,
  Droplets,
  Snowflake,
  Waves,
  Usb,
  MonitorPlay,
  DoorOpen
} from "lucide-react";

const specifications = [
  {
    category: "電源・エネルギー",
    specs: [
      { icon: Battery, label: "リチウムイオンバッテリー", value: "400Ah" },
      { icon: Zap, label: "インバーター", value: "3000W" },
      { icon: Sun, label: "ソーラーパネル", value: "400W" },
      { icon: Zap, label: "AC100Vコンセント", value: "標準装備" },
      { icon: Usb, label: "USB", value: "充電対応" }
    ]
  },
  {
    category: "空調・快適装備",
    specs: [
      { icon: Wind, label: "家庭用エアコン", value: "標準装備" },
      { icon: Thermometer, label: "FFヒーター", value: "全室暖房対応" },
      { icon: Waves, label: "ルーフベンチレーター", value: "換気システム" },
      { icon: MonitorPlay, label: "タッチパネルコントロール", value: "一括制御" }
    ]
  },
  {
    category: "水回り・キッチン設備",
    specs: [
      { icon: Droplets, label: "清水排水タンク", value: "大容量" },
      { icon: Thermometer, label: "ボイラー", value: "給湯システム" },
      { icon: Droplets, label: "温水シャワー", value: "標準装備" },
      { icon: Snowflake, label: "冷蔵庫", value: "標準装備" },
      { icon: Zap, label: "電子レンジ", value: "標準装備" }
    ]
  }
];

const additionalFeatures = [
  "サイドオーニング",
  "オリジナルトランクドア",
  "エントランススライドドア"
];

export function VehicleSpecs() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-2">主要諸元</p>
          <h2 className="mb-4">共通の装備</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            すべての車種に標準装備される充実の装備で、快適な車中泊をサポートします。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {specifications.map((category, idx) => (
            <Card key={idx} className="bg-white">
              <CardContent className="p-8">
                <h3 className="mb-6 pb-4 border-b border-gray-200">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.specs.map((spec, index) => {
                    const Icon = spec.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-black" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-600 mb-1">{spec.label}</p>
                          <p className="text-black">{spec.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* その他の装備 */}
        <div className="mt-12">
          <Card className="bg-black text-white">
            <CardContent className="p-8">
              <h3 className="text-white mb-6">その他の標準装備</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-white/70 shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}