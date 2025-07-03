import { useState } from "react";
import FaqItem from "./FaqItem";
import { faqData } from "../constants/landingPageData";
import necessaireLotion from "/public/assets/imgs/mathilde-langevin-p3O5f4u95Lo-unsplash 1.png";
import helpIcon from "/public/assets/icons/headphone-svgrepo-com 1.svg";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(() => {
    const defaultOpenItem = faqData.findIndex((item) => item.defaultOpen);
    return defaultOpenItem !== -1 ? defaultOpenItem : null;
  });

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-[100px] md:mt-[150px] lg:mt-[300px] flex flex-col-reverse lg:flex-row gap-[100px] lg:gap-[150px] lg:justify-center lg:items-center">
      <div className="  w-full  lg:w-[850px] h-[475px] md:h-[947px] lg:h-[900px] lg:rounded-[30px] overflow-hidden relative">
        <img
          src={necessaireLotion}
          alt="Necessaire body lotion on a white sheet"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-[20px] md:bottom-[50px] lg:bottom-[39px] w-[calc(100%-140px)] md:w-[calc(100%-344px)] lg:w-[calc(100%-450px)]  mx-[70px] md:mx-[172px] lg:mx-[225px] rounded-[200px] bg-Cream-200 p-[6px] ">
          <div className="flex gap-[20px] md:gap-[37px]   items-center">
            <div className=" border-dotted-pill  flex-shrink-0 w-[88px] md:w-[88px]  h-[58px] md:h-[88px]   rounded-full  overflow-hidden p-[4px] ">
              <div className="  w-full h-full rounded-[50px] md:rounded-full bg-Juniper  flex justify-center items-center">
                <img
                  src={helpIcon}
                  alt="help icon"
                  className="w:[30px] h-[30ox] md:w-[50px] md:h-[50px] lg:w-[40px] lg:h-[40px]"
                />
              </div>
            </div>
            <p className="text-[14px] md:text-[20px] leading-[100%] tracking-[0%] text-Juniper max-w-[152px]">
              24/7 We're Here
              to Help You
            </p>
          </div>
        </div>
      </div>

      <div className=" mx-[30px] md:mx-[40px] lg:mx-0 lg:h-[900px] lg:flex lg:flex-col lg:justify-between">
        <div className="w-fit md:w-[341px] h-[50px] md:h-[60px] rounded-[100px] border border-Juniper bg-Cream-100 py-[15px] md:py-[20px] px-[20px]  flex  gap-[20px] items-center">
          <span className="w-[20px] h-[20px] bg-Juniper rounded-full"></span>
          <p className="text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-Juniper text-nowrap">
            Frequently Asked Question
          </p>
        </div>

        <h2 className="mt-[50px] md:mt-[80px] lg:mt-0 text-[34px] md:text-[50px] lg:text-[60px] leading-[100%] tracking-[-5%] md:tracking-[-2%] text-Juniper  md:max-w-[533px] lg:max-w-[623px]">
          Answers to Your Skincare Questions, All in One Place.
        </h2>

        <div className="mt-[50px] md:mt-[80px] lg:mt-0 flex flex-col gap-[10px]">
          {faqData.map((item, index) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
