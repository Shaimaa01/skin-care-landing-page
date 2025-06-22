import girl from "/public/assets/imgs/ChatGPT Image Jun 15, 2025, 10_24_47 PM 3.png";
import plumCream from "/public/assets/imgs/skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 4.png";

function Hero() {
  return (
    <section className="mt-[90px] md:mt-0 flex flex-col justify-center items-center md:relative ">
      <div className="w-full flex justify-center text-center   overflow-hidden md:absolute md:top-[364px] md:z-50 lg:hidden ">
        <h1 className="  font-extrabold text-[75px] md:text-[135px] leading-[60px] md:leading-[110px] tracking-[-5%] md:tracking-[-3%] uppercase text-Juniper">
          Glowwww Naturally
        </h1>
      </div>

      <div className="md:flex md:mt-[136px] lg:mt-[138px] md:mx-[40px] lg:mx-[100px] md:gap-[93px] lg:gap-0 lg:justify-between lg:items-center lg:w-[calc(100%-200px)]">
        <p className="font-normal max-w-[370px] md:max-w-[271px] lg:max-w-[335px]  mt-[30px] h-fit  md:mt-[100px] mx-[30px] md:mx-0 lg:m-0 text-[16px] md:text-[14px] lg:text-[20px] leading-[22px] md:leading-[100%] tracking-[-5%] md:tracking-[0%] text-Juniper md:indent-[71px] lg:indent-[105px] ">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </p>

        <div className=" hidden lg:block ">
          <h1 className=" max-w-[398px] font-bold text-[100px]  leading-[90px]  tracking-[-3%]  uppercase text-Juniper">
            Glow Natur-ally
          </h1>
        </div>

        <div className="h-[399px] overflow-hidden hidden md:block md:w-[335.9px] lg:w-[222.6px] md:h-[332px] lg:h-[220px] lg:rounded-[20px]">
          <img
            src={plumCream}
            alt="plum Cream photo"
            className="md:w-full md:h-full md:object-cover"
          />
        </div>
      </div>

      <div className="md:w-[calc(100%-80px)] md:flex md:justify-between lg:justify-center md:items-center md:mt-[254px] md:mx-[40px] lg:m-0">
        <div className="mt-[50px] md:mt-0 lg:mt-[100px] w-full md:w-[360px] lg:w-[610px] h-[441px] md:h-[400px] lg:h-[676px] lg:rounded-[30px] overflow-hidden relative">
          <img src={girl} alt="Girl Img" />
          <div className="absolute bottom-[30px] md:bottom-[20px] w-[calc(100%-70px)] md:w-[calc(100%-42px)] lg:w-[calc(100%-134px)]  mx-[35px] md:mx-[21px] lg:mx-[67px] rounded-[200px] bg-Cream-200 p-[6px] md:p-[5px]">
            <div className="flex gap-[20px] md:gap-[15px] lg:gap-[42px]  items-center">
              <div
                style={{ backgroundImage: "var(--border-dashed-circle)" }}
                className="flex-shrink-0 w-[68px] md:w-[57px] lg:w-[80px] h-[68px] md:h-[57px] lg:h-[80px]  rounded-full  overflow-hidden p-[4px] md:p-[3px] "
              >
                <img
                  src={plumCream}
                  alt="Cream photo"
                  className="rounded-full w-full h-full"
                />
              </div>
              <p className="text-[14px] lg:text-[20px] leading-[100%] tracking-[0%] text-Juniper">
                While giving you an invigorating cleansing experience.
              </p>
            </div>
          </div>
        </div>

        {/* for table media */}
        <button className="w-[178px] md:w-[138px] lg:w-[180px]  h-[50px] lg:h-[60px] mt-[40px] mx-auto md:mx-0 rounded-[100px] bg-Juniper flex items-center justify-center text-[16px] lg:text-[20px] leading-[100%] tracking-[0%] text-Cream-200 hidden md:block lg:absolute lg:left-[100px]  ">
          Shop Now
        </button>
      </div>

      <div className="w-full flex justify-center text-center overflow-hidden md:absolute md:top-[1019px] lg:top-[865px] md:-z-1">
        <h2 className="font-extrabold text-[85px] md:text-[170px] lg:text-[378px] leading-[100%] tracking-[0%] md:tracking-[-5%] uppercase text-Juniper mt-[-19px] mb-[-19px] md:my-0">
          skincare
        </h2>
      </div>

      <div className="h-[399px] overflow-hidden md:hidden">
        <img src={plumCream} alt="plum Cream photo" />
      </div>

      <button className="w-[178px]  h-[50px] mt-[40px] mx-auto rounded-[100px] bg-Juniper flex items-center justify-center font-[16px] leading-[100%] tracking-[0%] text-Cream-200 md:hidden">
        Shop Now
      </button>

      <p className="mt-[50px] md:mt-[150px] lg:mt-[100px] mx-auto px-[30px] md:px-[40px] lg:px-[102px] text-[20px] md:text-[31px] lg:text-[53px] leading-[30px] md:leading-[46px] lg:leading-[78px] tracking-[-3.5%] md:tracking-[-5%] text-Juniper">
        Experience the ultimate in skincare with our expertly formulated
        products, crafted to nourish, protect, and rejuvenate your skin.
        Combining the finest natural ingredients with advanced science, our
        collection ensures every skin type can achieve a radiant, healthy glow.
        Embrace your beauty with confidence every day. Experience the ultimate
        in skincare with our expertly formulated products, crafted to nourish,
        protect, and rejuvenate your skin.
      </p>
    </section>
  );
}

export default Hero;
