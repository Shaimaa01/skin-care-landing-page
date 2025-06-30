import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Header from "./Header";
import Hero from "./Hero";
import ValuesSection from "./ValuesSection";
import Footer from "./Footer";
import ProductsSection from "./ProductsSection";
import CtaSection from "./CtaSection";
import ProductExplorer from "./ProductExplorer";
import FaqSection from "./FaqSection";

gsap.registerPlugin(ScrollTrigger, SplitText);

const LandingPage = () => {
  const componentRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(["header", "main > *:first-child"], {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      });

      const sectionsToReveal = gsap.utils.toArray("main > *:not(:first-child)");

      sectionsToReveal.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "-100px 85%",
            toggleActions: "play none none none",
            // markers:true,
          },
        });
      });

      const paragraph = document.querySelector(".paragraph-reveal");

      if (paragraph) {
        document.fonts.ready.then(() => {
          const split = SplitText.create(paragraph, { type: "words" });
          gsap.from(split.words, {
            autoAlpha: 0,
            yPercent: "random([-100 , 100])",
            rotation: "random([-30 , 30])",
            stagger: {
              amount: 2,
              from: "random",
            },
            scrollTrigger: {
              trigger: paragraph,
              start: "top 85%",
              // markers: true,
            },
          });
        });
      }
    },
    { scope: componentRef }
  );

  return (
    <div ref={componentRef} className="bg-Cream-200 font-inter">
      <Header />
      <main>
        <Hero />
        <ValuesSection />
        <ProductsSection />
        <CtaSection />
        <ProductExplorer />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
