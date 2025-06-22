import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Header from "./Header";
import Hero from "./Hero";

const LandingPage = () => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(mainRef.current.children, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="bg-Cream-200 font-inter">
      <Header />
      <main>
        <Hero/>
      </main>
    </div>
  );
};

export default LandingPage;
