import { useState, useRef } from "react";
import { useSlider } from "../hooks/useSlider";
import ArrowButtons from "./ArrowButtons";
import ProductCard from "./ProductCard";
import { productsData } from "./ProductsData";
import gsap from "gsap";

const categories = ["NEW ARRIVAL", "CLEANSING", "ACNE FIGHTER", "ANTI AGGING"];

const ProductExplorer = () => {
  const filterScrollerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("NEW ARRIVAL");
  const { scrollerRef, handleScroll, canScrollPrev, canScrollNext } = useSlider(
    productsData.length
  );

  const handleArrowClick = (direction) => {
    handleScroll(direction);

    if (filterScrollerRef.current) {
      const scrollAmount = direction * 200;
      gsap.to(filterScrollerRef.current, {
        duration: 1.2,
        scrollTo: { x: `+=${scrollAmount}` },
        ease: "power3.inOut",
      });
    }
  };
  return (
    <section className="mt-[100px] md:mt-[150px] lg:mt-[200px] ">
      <h2 className=" mx-[30px] md:mx-[40px] lg:mx-auto text-[34px] md:text-[50px] lg:text-[60px] leading-[100%] tracking-[-5%] md:tracking-[-2%] text-Juniper lg:text-center lg:max-w-[778px]">
        Feel Beautiful Inside and Out with Every Product.
      </h2>

      {/* --- Filter Buttons --- */}
      <div
        ref={filterScrollerRef}
        className="mx-[30px] md:ml-[40px] md:mr-0 lg:mx-0 mt-[50px] lg:mt-[70px] flex lg:justify-center gap-[10px] lg:gap-[20px] flex-wrap md:flex-nowrap overflow-x-auto  no-scrollbar"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`md:last:mr-[40px] lg:last:m-0 flex items-center justify-center cursor-pointer py-[19px] md:py-[22px] px-[20px] md:px-[30px] text-nowrap text-[16px] md:text-[20px] leading-[100%] tracking-[0%] rounded-full  transition-colors duration-200
                ${
                  activeFilter === category
                    ? " bg-Juniper text-Cream-100"
                    : " bg-Cream-100 border border-Juniper text-Juniper hover:bg-Cream-200"
                }
              `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* --- Product Slider/Scroller --- */}
      <div className="mt-[50px]  lg:mt-[70px] ml-[30px] md:ml-[40px] lg:mx-[100px]">
        <div
          ref={scrollerRef}
          className="flex gap-[10px] md:gap-[20px] lg:gap-[25px] overflow-x-auto   no-scrollbar lg:flex-wrap lg:justify-center lg:items-center lg:max-h-[770px]"
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
      <div className=" lg:hidden ">
        <ArrowButtons
         onPrevClick={() => handleArrowClick(-1)}
          onNextClick={() => handleArrowClick(1)}
          canPrev={canScrollPrev}
          canNext={canScrollNext}
        />
      </div>
    </section>
  );
};

export default ProductExplorer;
