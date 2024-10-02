import React from "react";
import img from "../../../asset/imgs/companyProfileHerosection.jpg";

const HeroSection = () => {
  return (
    <div className="relative  cta-h-half text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
  <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Who We Are</h1>
  <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 mb-8">A Commitment to Growth</p>
</div>

    </div>
  );
};

export default HeroSection;
