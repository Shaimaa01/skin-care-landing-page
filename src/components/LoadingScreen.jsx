import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LoadingScreen = () => {
  const [count, setCount] = useState(0);

  useGSAP(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: 100,
      duration: 2,
      ease: "power1.out",
      onUpdate: () => setCount(Math.round(obj.val)),
    });
  }, []);

  return (
    <div className="h-screen flex items-end justify-end bg-Cream-200 py-[80px] px-[50px] md:px-[80px] lg:py-[100px] lg:px-[100px]">
      <div className="font-inter text-[90px] md:text-[140px] leading-[60px] md:mb-[30px] md:mt-[30px] tracking-[-5%] uppercase text-Juniper ">
        <span>{count}</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
