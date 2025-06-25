import womanWithLeaf from "/assets/imgs/ChatGPT Image Jun 16, 2025, 01_32_50 AM 1.png";

const CtaSection = () => {
  return (
    <section className="hidden  lg:flex justify-center items-center w-[calc(100%-200px)] h-[1146px] mt-[300px]  mx-[100px] rounded-[30px] overflow-hidden relative">
      <img
        src={womanWithLeaf}
        alt="Woman holding skincare product"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 right-0 h-[400px] rounded-b-[30px] bg-gradient-to-b from-transparent to-[#293330]" />

      <div className="absolute top-[796px]  flex flex-col items-center gap-[65px] justify-end text-center ">
        <h2 className="text-[80px] leading-[100%] tracking-[-2%] max-w-[1037px] text-Cream-100">
          Feel Beautiful Inside and Out with Every Product.
        </h2>

        <button className=" rounded-[100px] text-[20px] bg-Cream-100 text-Juniper  leading-[100%] tracking-[0%] py-[22px] px-[41px] hover:bg-Cream-200 transition-colors">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
