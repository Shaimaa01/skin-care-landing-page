function Footer() {
  return (
    <footer className="h-[550px] md:h-[748px] lg:h-[930px] bg-Juniper pt-[50px] md:pt-[100px] lg:pt-[200px] overflow-hidden ">
      <div className="mx-[30px] md:mx-[40px] lg:mx-[100px] flex flex-col gap-[80px] md:gap-[100px] lg:flex-row justify-between">
        <div className="flex flex-col gap-[80px] md:gap-[60px] lg:gap-[270px]">
          <h2 className="text-[34px] md:text-[50px] lg:text-[60px] leading-[100%] tracking-[-2%] text-Stone max-w-[275px] md:max-w-[405px] lg:max-w-[485px]">
            Join The Skincare Community Now.
          </h2>
          <div className="flex justify-between  lg:gap-[100px] text-[14px] md:text-[20px] leading-[100%] tracking-[-5%] text-Cream-200">
            <button>Facebook</button>
            <button>Instagram</button>
            <button>YouTube</button>
          </div>
        </div>

        <div className="flex flex-col gap-[80px] md:gap-[100px]  lg:gap-[270px] text-right md:text-left">
          <div>
            <p className="mb-[10px] md:mb-[20px] text-[14px] md:text-[20px] lg:text-[30px] leading-[100%] tracking-[-2%] text-Stone ">
              Get in Touch
            </p>
            <h2 className="text-[34px] md:text-[50px] lg:text-[60px] leading-[100%] tracking-[2%] text-Stone">
              contact.skincare.com
            </h2>
          </div>

          <div className="flex justify-between  lg:gap-[100px] text-[14px] md:text-[20px] leading-[100%] tracking-[-5%] text-Cream-200">
            <button>Terms of Service</button>
            <button>Privacy Policy</button>
            <button>Cookies Policy</button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center text-center  mt-[60px] md:mt-[75px] lg:mt-[25px] ">
        <h2 className="font-black lg:font-bold text-[90px] md:text-[170px] lg:text-[420px] leading-[60%] lg:leading-[100%]  lg:tracking-[0%] tracking-[-5%] uppercase text-Sage lg:text-[#3D4B4680]  ">
          skincare
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
