const LoadingScreen = () => {
  return (
    <div className="h-screen flex items-end justify-end bg-Cream-200 py-[80px] px-[50px] md:px-[80px] lg:py-[100px] lg:px-[100px]">
      <div className="font-inter text-[90px] md:text-[140px] leading-[60px] md:mb-[30px] md:mt-[30px] tracking-[-5%] uppercase text-Juniper ">
        <span className="md:hidden">67</span>
        <span className="hidden md:block lg:hidden">99</span>
        <span className="hidden lg:block">100</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
