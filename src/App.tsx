import { Hero } from "./components/Hero";
import { FeaturedVehicles } from "./components/FeaturedVehicles";
import { InteriorShowcase } from "./components/InteriorShowcase";
import { VehicleSpecs } from "./components/VehicleSpecs";
import { Features } from "./components/Features";
import { BookingForm } from "./components/BookingForm";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner@2.0.3";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      <Hero />
      <FeaturedVehicles />
      <InteriorShowcase />
      <VehicleSpecs />
      <Features />
      <BookingForm />
      <Footer />
    </div>
  );
}