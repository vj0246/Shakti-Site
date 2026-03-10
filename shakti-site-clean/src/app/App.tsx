import { useEffect } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { AboutSection } from "./components/about-section";
import { ProductsSection } from "./components/products-section";
import { FacilitiesSection } from "./components/facilities-section";
import { GlobalPresence } from "./components/global-presence";
import { Footer } from "./components/footer";

export default function App() {
  // Scroll-reveal: any element with class "reveal" fades in when visible
  useEffect(() => {
    document.body.classList.add('js-loaded');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "#F4F1EC", minHeight: "100vh" }}>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProductsSection />
        <FacilitiesSection />
        <GlobalPresence />
      </main>
      <Footer />
    </div>
  );
}
