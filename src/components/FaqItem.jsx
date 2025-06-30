import {  useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import plus from "/public/assets/icons/plus-large-svgrepo-com 1.svg";
import minus from "/public/assets/icons/plus-large-svgrepo-com 2.svg";

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
 

  const answerRef = useRef(null);

  useLayoutEffect(() => {
    if (isOpen) {
      gsap.to(answerRef.current, {
        maxHeight: answerRef.current.scrollHeight,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(answerRef.current, {
        maxHeight: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div className="max-w-[342px] md:max-w-[664px] lg:max-w-[600px] p-[14px] md:py-[27px] md:px-[30px] border border-Juniper rounded-[5px] bg-Cream-100 flex flex-col ">
      <button
          onClick={onToggle}
        className="w-full flex justify-between items-center cursor-pointer "
      >
        <h3 className="text-[14px] md:text-[20px] leading-[100%] tracking-[0%] text-Juniper">
          {question}
        </h3>
        <span className="font-light text-Juniper">
          {isOpen ? (
            <img src={minus} alt="minus icon" className="w-[14px] h-[14px] md:w-[30px] md:h-[30px]" />
          ) : (
            <img src={plus} alt="plus icon" className="w-[14px] h-[14px] md:w-[30px] md:h-[30px]" />
          )}
        </span>
      </button>

      <div ref={answerRef} className="max-h-0 overflow-hidden">
        <p className=" pt-[20px] md:pt-[30px] text-[12px] md:text-[14px] leading-[100%] tracking-[-5%] text-Moss">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
