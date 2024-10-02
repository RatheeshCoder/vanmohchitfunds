import React from "react";
import { Link } from "react-router-dom";
import img from '../../../asset/imgs/NewImg (1).jpg'

const DoorstepHero = () => {
  return (
<section className="text-gray-600 body-font cta-list-top">
  <div className="container flex flex-col items-center justify-center mx-auto md:flex-row">
    <div data-aos="fade-right" className="flex flex-col items-center mx-auto text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 custom-class-for-add">
      <h1 className="mb-3 text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 title-font">
        Delivered To Your Doorstep
        <br className="hidden lg:inline-block" />
        &nbsp; In Coimbatore & Nilgiris.
      </h1>

      <p className="mb-8 leading-relaxed text-base sm:text-lg">
        Experience hassle-free financial empowerment with Vanmoh chitfunds.
        We redefine convenience with online services, delivering solutions
        directly to your doorstep in the regions of Coimbatore and Nilgiris.
        Curious to explore?
      </p>
      <div className="flex justify-center">
        <Link
          to="/ContactMain"
          className="inline-flex text-white bg-[#0c52a6] border-0 py-2 px-6 mr-4"
        >
          Coimbatore
        </Link>

        <Link
          to="/ContactMain"
          className="inline-flex text-white bg-[#0c52a6] border-0 py-2 px-6"
        >
          Nilgiris
        </Link>
      </div>
    </div>
  </div>
</section>


  );
};

export default DoorstepHero;
