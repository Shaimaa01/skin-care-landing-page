import ProductCard from "./ProductCard";
import { productsData } from "../constants/landingPageData";
import { useSlider } from "../hooks/useSlider";
import ArrowButtons from "./ArrowButtons";

const ProductsSection = () => {
  const { scrollerRef, handleScroll, canScrollPrev, canScrollNext } = useSlider(
    productsData.length
  );

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
          <div className="hidden lg:flex  ">
            <ArrowButtons
              onPrevClick={() => handleScroll(-1)}
              onNextClick={() => handleScroll(1)}
              canPrev={canScrollPrev}
              canNext={canScrollNext}
            />
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
      <div className=" lg:hidden ">
        <ArrowButtons
          onPrevClick={() => handleScroll(-1)}
          onNextClick={() => handleScroll(1)}
          canPrev={canScrollPrev}
          canNext={canScrollNext}
        />
      </div>
    </section>
  );
};

export default ProductsSection;
