import cartIcon from "/public/assets/icons/cart-large-2-svgrepo-com 5.svg";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className=" rounded-[20px]  flex-shrink-0 w-[322px] md:w-[560px] h-[470px] md:h-[770px] relative overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover" />

      <div className="absolute bottom-[13px] md:bottom-[20px] mx-[13px] md:mx-[20px] w-[calc(100%-26px)] md:w-[calc(100%-40px] h-[61px] md:h-[100px] rounded-[10px] bg-Cream-100 flex justify-between items-center py-[10px] md:p-[20px] px-[15px]">
        <div className="h-full flex flex-col justify-between">
          <h3 className="text-[14px] md:text-[20px] leading-[100%] tracking-[-5%]  uppercase text-Juniper">
            {name}
          </h3>
          <p className="text-[12px] md:text-[16px] leading-[100%] tracking-[-5%] text-Juniper opacity-50 ">
            {price}
          </p>
        </div>
        <button className="cursor-pointer">
          <img src={cartIcon} alt="Add to cart" className="w-[19px] h-[19px] md:w-[30px] md:h-[30px] " />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
