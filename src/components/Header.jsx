import bag from "/assets/icons/bag-4-svgrepo-com 1.svg";
import person from "/assets/icons/person 1.svg";
import heart from "/assets/icons/heart-svgrepo-com (1) 1.svg";

function Header() {
  return (
    <header className="pt-[37px] md:pt-[40px] lg:pt-[50px] px-[30px] md:px-[40px] lg:px-[100px] flex items-center justify-between">
      <h2 className="text-Juniper font-extrabold text-[20px] md:text-[25px] lg:text-[30px] leading-[100%] tracking-[0%] uppercase">
        skincare
      </h2>

      <nav className="hidden md:flex items-center gap-[30px] lg:gap-[60px] font-normal text-[12px] lg:text-[20px] leading-[100%] tracking-[-5%] text-Juniper">
        <a href="/all-products" className="cursor-pointer hover:underline">
          All Products
        </a>
        <a href="/serum" className="cursor-pointer hover:underline">
          Serum
        </a>
        <a href="/sunscreen" className="cursor-pointer hover:underline">
          Sunscreen
        </a>
        <a href="/bundle" className="cursor-pointer hover:underline">
          Bundle
        </a>
      </nav>

      <div className="flex items-center gap-[10px] ">
        <div className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] bg-Lime-100 rounded-full flex justify-center items-center">
          <img
            src={bag}
            alt="Bag Icon"
            className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
          />
        </div>
        <p className=" hidden lg:block font-normal text-[20px] leading-[100%] tracking-[-5%] text-Juniper">
          Cart (1)
        </p>
        <div className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] bg-Lime-100 rounded-full flex justify-center items-center">
          <img
            src={heart}
            alt="Heart Icon"
            className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
          />
        </div>
        <div className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] bg-Lime-100 rounded-full flex justify-center items-center">
          <img
            src={person}
            alt="Person Icon"
            className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
