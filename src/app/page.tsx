import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import HeroBanner from "@/components/HeroBanner";
import MarqueeText from "@/components/MarqueeText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// app/page.tsx
export default function Home() {
  return (
    <>
          <Navbar />
          <HeroBanner />
          <MarqueeText />
          <AboutSection />
          <MarqueeText />
          <ContactForm />
          <Footer />
    </>
  );
}
