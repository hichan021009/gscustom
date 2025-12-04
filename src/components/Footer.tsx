import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner@2.0.3";

export function Footer() {
  const copyPhoneNumber = () => {
    navigator.clipboard.writeText("0896-57-0189");
    toast.success("電話番号をコピーしました");
  };
  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1639517814066-4ff206697965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wZXJ2YW4lMjBzdW5zZXQlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYyNTAyOTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Campervan landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white mb-6">GScustom</h3>
            <p className="text-white/90 mb-6">
              あなたの冒険はここから始まる<br />
              時間と場所を超える体験であなたの旅をもっと特別なものに
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">会社概要</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/90">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>〒799-0101<br />愛媛県四国中央市川之江町4061-26</span>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <Phone className="h-5 w-5 shrink-0" />
                <button 
                  onClick={copyPhoneNumber} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  0896-57-0189
                </button>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:gscustom459@gmail.com" className="hover:text-white transition-colors">gscustom459@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-white/90 mb-4">
            最新情報をSNSでチェック
          </p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white/30 text-white hover:bg-white hover:text-black"
              asChild
            >
              <a href="https://www.instagram.com/gscustom3/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white/30 text-white hover:bg-white hover:text-black"
              asChild
            >
              <a href="https://www.tiktok.com/@gscustom1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white/30 text-white hover:bg-white hover:text-black"
              asChild
            >
              <a href="https://lin.ee/l44h2MJ" target="_blank" rel="noopener noreferrer" aria-label="LINE">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </a>
            </Button>
          </div>
        </div>

        <div className="text-center text-white/70 text-sm border-t border-white/20 pt-8 mt-8">
          © 2024 GScustom. All rights reserved.
        </div>
      </div>
    </footer>
  );
}