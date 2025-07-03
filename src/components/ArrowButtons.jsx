import rightArrow from "/assets/icons/right arrow 1.svg";
import leftArrow from "/assets/icons/left arrow 1.svg";

const ArrowButtons = ({ onPrevClick, onNextClick, canPrev, canNext }) => {
  const buttonBaseClasses = `
    cursor-pointer w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]  rounded-full flex justify-center items-center 
    disabled:opacity-50 disabled:cursor-not-allowed
    transform transition-transform duration-200 ease-in-out
    hover:scale-105 active:scale-95
  `;
  return (
    <div className="flex items-center justify-center gap-[50px] lg:gap-[80px]  mt-[40px] lg:mt-0 ">
      <button
        onClick={onPrevClick}
        disabled={!canPrev}
        className={`${buttonBaseClasses}  border border-Juniper  hover:bg-Cream-100 transition-colors`}
      >
        <img src={leftArrow} alt="left Arrow icon" />
      </button>
      <button
        onClick={onNextClick}
        disabled={!canNext}
        className={`${buttonBaseClasses}  bg-Juniper  hover:opacity-80 transition-opacity`}
      >
        <img src={rightArrow} alt="right arrow icon" />
      </button>
    </div>
  );
};

export default ArrowButtons;
