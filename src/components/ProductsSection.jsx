import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ProductCard from "./ProductCard";
import rightArrow from "/assets/icons/right arrow 1.svg";
import leftArrow from "/assets/icons/left arrow 1.svg";
import alyaSkin from "/assets/imgs/filip-knezevic-k-ElrinXWAk-unsplash 2.png";
import ritualOfSakura from "/assets/imgs/cierra-henderson-LWIQp-0_b98-unsplash 1.png";
import theBodyLotion from "/assets/imgs/mathilde-langevin-p3O5f4u95Lo-unsplash 1.png";

gsap.registerPlugin(ScrollToPlugin);

const productsData = [
  { image: alyaSkin, name: "ALYA SKIN CLEANSER", price: "FROM $29.99" },
  { image: ritualOfSakura, name: "RITUAL OF SAKURA", price: "FROM $19.99" },
  { image: theBodyLotion, name: "THE BODY LOTION", price: "FROM $32.99" },
  { image: alyaSkin, name: "ALYA SKIN CLEANSER 2", price: "FROM $29.99" },
  { image: ritualOfSakura, name: "RITUAL OF SAKURA 2", price: "FROM $19.99" },
];

const ProductsSection = () => {
  const scrollerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    const container = scrollerRef.current;
    if (!container) return;

    const newIndex = Math.max(
      0,
      Math.min(productsData.length - 1, currentIndex + direction)
    );

    const targetCard = container.children[newIndex];
    if (targetCard) {
      setCurrentIndex(newIndex);
      gsap.to(container, {
        duration: 1.2,
        scrollTo: {
          x: targetCard.offsetLeft,
        },
        ease: "power3.inOut",
      });
    }
  };

  const canScrollPrev = currentIndex > 0;
  const canScrollNext = currentIndex < productsData.length - 1;

  return (
    <section className="mt-[78px] md:mt-[150px] lg:mt-[200px] overflow-hidden">
      <div className=" mx-[30px] md:mx-[40px] lg:mx-[100px] flex justify-between items-center">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full">
          <div className="w-[242px] md:w-[290px] h-[50px] md:h-[60px] rounded-[100px] border border-Juniper bg-Cream-100 py-[15px] md:py-[20px] px-[20px]  flex  gap-[20px] items-center">
            <span className="w-[20px] h-[20px] bg-Juniper rounded-full"></span>
            <p className="text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-Juniper">
              Best Selling Products
            </p>
          </div>

          <h2 className="mt-[50px] md:mt-[80px] lg:mt-0 text-[34px] md:text-[50px] lg:text-[60px] leading-[100%] tracking-[-5%] md:tracking-[-2%] text-Juniper max-w-[350px] md:max-w-[533px] lg:max-w-[680px] lg:text-center">
            Skincare That Brings Out Your Natural Radiance
          </h2>

          {/* arrow buttons for desktop */}
          <div className="hidden lg:flex items-center justify-center gap-[80px] ">
            <button
              onClick={() => handleScroll(-1)}
              disabled={!canScrollPrev}
              className=" cursor-pointer w-[80px] h-[80px] rounded-full border border-Juniper flex justify-center items-center hover:bg-Cream-100 transition-colors"
            >
              <img src={leftArrow} alt="left Arrow icon" />
            </button>
            <button
              onClick={() => handleScroll(1)}
              disabled={!canScrollNext}
              className=" cursor-pointer w-[80px] h-[80px] rounded-full bg-Juniper  flex justify-center items-center hover:opacity-80 transition-opacity"
            >
              <img src={rightArrow} alt="right arrow icon" />
            </button>
          </div>
        </div>
      </div>

      {/* --- Product Slider/Scroller --- */}
      <div className="mt-[50px] md:mt-[80px] lg:mt-[100px] ml-[30px] md:ml-[40px] lg:mx-[100px]">
        <div
          ref={scrollerRef}
          className="flex gap-[10px] md:gap-[20px] lg:gap-[25px] overflow-x-auto  no-scrollbar"
        >
          {productsData.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>

      {/* arrow buttons for mobile and tablet */}
      <div className="flex lg:hidden items-center justify-center gap-[50px] mt-[40px]">
        <button
          onClick={() => handleScroll(-1)}
          disabled={!canScrollPrev}
          className=" cursor-pointer w-[60px] h-[60px] rounded-full border border-Juniper flex justify-center items-center hover:bg-Cream-100 transition-colors"
        >
          <img src={leftArrow} alt="left Arrow icon" />
        </button>
        <button
          onClick={() => handleScroll(1)}
          disabled={!canScrollNext}
          className=" cursor-pointer w-[60px] h-[60px] rounded-full bg-Juniper  flex justify-center items-center hover:opacity-80 transition-opacity"
        >
          <img src={rightArrow} alt="right arrow icon" />
        </button>
      </div>
    </section>
  );
};

export default ProductsSection;
