import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";
import { useState, FormEvent } from "react";
import { toast } from "sonner@2.0.3";

export function BookingForm() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const copyPhoneNumber = () => {
    navigator.clipboard.writeText("0896-57-0189");
    toast.success("電話番号をコピーしました");
  };
  
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  // Check if selected date is weekend (Saturday=6, Sunday=0)
  const isWeekend = (dateString: string) => {
    if (!dateString) return false;
    const date = new Date(dateString + 'T00:00:00');
    const day = date.getDay();
    return day === 0 || day === 6;
  };
  
  const isSelectedWeekend = isWeekend(selectedDate);
  
  // Generate time slots based on business hours
  const getTimeSlots = () => {
    const startHour = isSelectedWeekend ? 10 : 9;
    const endHour = isSelectedWeekend ? 17 : 18;
    const slots = [];
    
    for (let hour = startHour; hour <= endHour; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
    }
    
    return slots;
  };
  
  const timeSlots = getTimeSlots();
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      date: selectedDate,
      time: selectedTime,
      message: formData.get('message')
    };
    
    // Create mailto link
    const subject = encodeURIComponent('ショールーム来店予約');
    const body = encodeURIComponent(
      `【来店予約】\n\n` +
      `お名前: ${data.name}\n` +
      `メールアドレス: ${data.email}\n` +
      `電話番号: ${data.phone}\n` +
      `希望日: ${data.date}\n` +
      `希望時間: ${data.time || '指定なし'}\n` +
      `ご質問・ご要望:\n${data.message || 'なし'}`
    );
    
    const mailtoLink = `mailto:gscustom459@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast.success('メールアプリを起動しました。メールを送信してください。');
    setIsSubmitting(false);
  };
  
  return (
    <section id="booking" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-2">来店予約</p>
          <h2 className="mb-4">ショールーム来店予約</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            実車をご覧いただけます。試乗も可能ですので、実際の乗り心地をお確かめください。専門スタッフがご案内いたしますので、お気軽にご予約ください。
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>予約フォーム</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    お名前<span className="text-red-500">*</span>
                  </Label>
                  <Input id="name" name="name" placeholder="山田 太郎" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    メールアドレス<span className="text-red-500">*</span>
                  </Label>
                  <Input id="email" name="email" type="email" placeholder="example@email.com" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    電話番号<span className="text-red-500">*</span>
                  </Label>
                  <Input id="phone" name="phone" type="tel" placeholder="090-1234-5678" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    希望日<span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="date" 
                    type="date" 
                    min={today}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  希望時間
                </Label>
                <Select disabled={!selectedDate} value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="時間を選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedDate && (
                  <p className="text-gray-600">
                    {isSelectedWeekend ? "土日祝: 10:00 - 17:00" : "平日: 9:00 - 18:00"}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  ご質問・ご要望
                </Label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="気になる車種、試乗希望、ご質問などがございましたらお書きください"
                  rows={5}
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="mb-2">営業時間</h4>
                <p className="text-gray-600 mb-2">平日: 9:00 - 18:00</p>
                <p className="text-gray-600">土日祝: 10:00 - 17:00</p>
              </div>

              <Button type="submit" size="lg" className="w-full bg-black text-white hover:bg-gray-800" disabled={isSubmitting}>
                {isSubmitting ? '送信中...' : '予約を送信する'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-gray-600">
          <p>営業時間外にご来店希望の方はお電話でご連絡ください</p>
          <button 
            onClick={copyPhoneNumber}
            className="text-black hover:underline cursor-pointer"
          >
            0896-57-0189
          </button>
        </div>
      </div>
    </section>
  );
}