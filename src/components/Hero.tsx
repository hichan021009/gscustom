import { Button } from "./ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "figma:asset/d02a7583ada3161042196608063d6ed1e0892cd5.png";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="GScustom Campervan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-white tracking-wider">GScustom</div>
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => {
                const element = document.getElementById('vehicles');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-black"
            >
              車について
            </Button>
            <Button 
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-black"
            >
              お問い合わせ
            </Button>
            <Button 
              asChild
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-black"
            >
              <a href="https://lin.ee/l44h2MJ" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                LINE
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-white mb-6">
          あなたの冒険はここから始まる
        </h1>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          時間と場所を超える体験であなたの旅をもっと特別なものに
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-black"
            onClick={() => {
              const element = document.getElementById('vehicles');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            車について知る
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent text-white border-white hover:bg-white hover:text-black"
            asChild
          >
            <a href="#booking">来店予約をする</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}