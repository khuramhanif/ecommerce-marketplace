import Image from "next/image";

const ProductsType = () => {
  return (
    <div className="py-16 px-2">
      <div className="text-center space-y-3">
        <p className="text-blue-600 font-semibold text-xs">PROMOTIONS</p>
        <h3 className="text-gray-800 font-semibold text-3xl">
          Our Promotions Events
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 px-2 md:px-20 py-4 ">
        <div className="col-span-2 bg-[#D6D6D8] flex ">
          <div className="max-w-[15rem] py-8 px-7">
            <h3 className="font-bold text-3xl">GET UP TO 60% </h3>
            <p className="font-medium text-lg">For the summer season</p>
          </div>
          <div>
            <Image src={"/img.webp"} alt="image" width={250} height={250} />
          </div>
        </div>
        <div className="w-auto h-auto row-span-2 bg-[#EFE1C7]">
          <div className="p-4 w-64 text-lg font-medium ">
            <p>Flex Sweatshirt</p>
            <p>
              <del>$100.00</del> &nbsp;{" "}
              <b>
                <ins>$75.00</ins>
              </b>
            </p>
          </div>
          <div>
            <Image src={"/img2.webp"} alt="Image" width={1000} height={1000} />
          </div>
        </div>
        <div className="w-auto h-auto row-span-2 bg-[#D6D6D8]">
          <div className="p-4 w-64 text-lg font-medium ">
            <p>Flex Push Button Bomber</p>
            <p>
              <del>$225.00</del> &nbsp;{" "}
              <b>
                <ins>$190.00</ins>
              </b>
            </p>
          </div>
          <div>
            <Image src={"/img3.webp"} alt="Image" width={1000} height={1000} />
          </div>
        </div>

        <div className="w-auto h-auto md:h-48 col-span-2 flex flex-col justify-center items-center bg-[#212121] text-white  ">
          <div className="text-4xl font-extrabold">
            <h4>GET 30% Off</h4>
          </div>
          <div className="py-3 text-center ">
            <p>USE PROMO CODE</p>
            <button className="bg-[#474747] text-lg font-medium tracking-widest py-2 px-10  md:px-20 rounded-lg">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsType;
