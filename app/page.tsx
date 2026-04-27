// 📄 app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}