import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const LandingPage = () => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("main > *", {
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
    <main ref={mainRef} className="bg-Cream-100 min-h-screen">
      <div className="p-10 border-b border-Sage">
        <h1 className="text-3xl text-Juniper">Navbar Section</h1>
      </div>
      <div className="p-10 h-[80vh] border-b border-Sage">
        <h1 className="text-3xl text-Juniper">Hero Section</h1>
      </div>
      <div className="p-10 h-[80vh] border-b border-Sage">
        <h1 className="text-3xl text-Juniper">Products Section</h1>
      </div>
    </main>
  );
};

export default LandingPage;
