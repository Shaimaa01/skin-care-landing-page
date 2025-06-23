import womanWithEyePatches from "/public/assets/imgs/Jun 15, 2025, 11_52_20 PM 2.png"; // <-- REPLACE
import awardIcon from "/public/assets/icons/award-svgrepo-com 1.svg";

const valuesData = [
  {
    number: "01",
    title: "Bio Ingredients",
    description:
      "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
  },
  {
    number: "02",
    title: "Everything Natural",
    description:
      "Pure ingredients for pure skin. The Perfect solution for your skin care needs.",
  },
  {
    number: "03",
    title: "All Handmade",
    description:
      "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
  },
];

const ValuesSection = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between lg:mt-[300px] lg:mx-[100px]">
      <div className="mt-[100px] lg:m-0  mx-[30px]  md:mx-[40px]  flex flex-col">
        <div className="w-[220px] md:w-[260px] h-[50px] md:h-[60px] rounded-[100px] border border-Juniper bg-Cream-100 py-[15px] px-[20px] flex  gap-[20px] items-center">
          <span className="w-[20px] h-[20px] bg-Juniper rounded-full"></span>
          <p className="text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-Juniper">
            Why Our Products
          </p>
        </div>

        <h2 className="mt-[50px] md:mt-[80px] text-[34px] md:text-[50px] lg:text-[60px] leading-[100%] tracking-[-5%] md:tracking-[-2%] text-Juniper max-w-[350px] md:max-w-[533px] lg:max-w-[640px]">
          YOUR SKIN DESERVES THE BEST CARE.
        </h2>

        <p className="mt-[30px] md:mt-[50px] text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] tracking-[-3%] md:tracking-[-2%] text-Moss md:max-w-[621px]">
          Discover a curated collection of skincare products designed to
          rejuvenate, protect, and pamper your skin. Explore our rage crafted
          with love backed by science, and inspired by nature.
        </p>

        <ol className="mt-[80px]  flex flex-col gap-[60px] md:gap-[100px]">
          {valuesData.map((item , index) => (
            <li  key={index} className="flex gap-[27px] md:gap-[50px]">
              <span className="h-fit text-[34px] md:text-[60px] leading-[100%] tracing-[-2%]  bg-clip-text text-transparent bg-[linear-gradient(180deg,#293330_0%,#FEFFF4_100%)] ">
                {item.number}
              </span>
              <div className="flex flex-col gap-[20px] md:gap-[50px]">
                <h3 className="text-[34px] md:text-[60px] leading-[100%] tracking-[-4%] md:tracking-[-2%] text-Juniper">
                  {item.title}
                </h3>
                <p className=" text-[16px] md:text-[18px]  leading-[21px] md:leading-[24px] tracking-[-3%] md:tracking-[-2%] text-Moss md:max-w-[420px]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="mt-[100px]  lg:m-0 w-full  lg:w-[849px] h-[512px] md:h-[947px] lg:h-[1081px] lg:rounded-[30px] overflow-hidden relative">
          <img
            src={womanWithEyePatches}
            alt="Woman with eye patches"
            className="w-full"
          />
          <div className="absolute bottom-[40px] md:bottom-[50px] lg:bottom-[81px] w-[calc(100%-100px)] md:w-[calc(100%-344px)] lg:w-[calc(100%-448px)]  mx-[50px] md:mx-[172px] lg:mx-[224px] rounded-[200px] bg-Cream-200 p-[6px] ">
            <div className="flex gap-[20px] md:gap-[37px]   items-center">
              <div className=" border-dotted-pill  flex-shrink-0 w-[88px] md:w-[88px]  h-[58px] md:h-[88px]   rounded-full  overflow-hidden p-[4px] ">
                <div className="  w-full h-full rounded-[50px] md:rounded-full bg-Juniper  flex justify-center items-center">
                  <img
                    src={awardIcon}
                    alt="award icon" 
                    className="md:w-[50px] md:h-[50px]"
                  />
                </div>
              </div>
              <p className="text-[14px] md:text-[20px] leading-[100%] tracking-[0%] text-Juniper">
                Best Skin Care Product
                <br />
                Award Wining
              </p>
            </div>
          </div>
        </div>

        <div className=" mx-[30px] lg:mx-0 flex justify-between text-[16px] md:text-[20px] leading-[100%] tracking-[-3%] md:tracking-[-2%] uppercase text-Juniper">
          <span>Since 2001</span>
          <button>LEARN MORE</button>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
