import React from "react";
import { Link } from "react-router-dom";

const Footer1 = () => {
  return (
    <section className="py-28 relative bg-[#0c52a6] text-center">
  <div className="relative max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
    <div className="max-w-xl md:mx-auto text-center">
      <p className="cta-footer-text text-white text-2xl md:text-3xl lg:text-4xl font-semibold sm:text-4xl">
        Build the future with us
      </p>
      <p className="cta-footer-text text-blue-100 my-0.5 text-sm sm:text-base lg:text-lg text-center">
        Shape Your Financial Tomorrow with Us
      </p>
      <p className="cta-footer-text text-blue-100 text-sm sm:text-base lg:text-lg">
        Every month brings you closer to financial security. Your journey to prosperity starts here.
      </p>
    </div>
    <div className="mt-4">
      <Link
        to="/Products/Product"
        className="inline-block py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full"
      >
        Start Your Chitfund Journey Now.
      </Link>
    </div>
  </div>
</section>

  );
};

export default Footer1;
