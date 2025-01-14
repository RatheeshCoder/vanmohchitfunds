import React from "react";
import { Link } from "react-router-dom";

const DirectorsHero = () => {
  return (
    <div className="max-w-6xl px-4 mx-auto md:max-w-4xl sm:max-w-2xl sm:px-6 cta-team-top">
      <div className="text-center">
      <h1 className="max-w-md mx-auto text-3xl md:text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
  <span className="block">
    Vanmoh's{' '}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
      Leaders
    </span>
  </span>
</h1>

        <h2 className="max-w-md px-12 mx-auto mt-3 font-normal text-gray-500 text-md sm:mt-5 sm:text-md md:mt-5 md:text-xl sm:max-w-xl md:max-w-xl">
          Meet the visionaries steering Vanmoh toward success
        </h2>
        {/* <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <div className="rounded-full shadow">
          <Link to="/ContactMain " className="flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white no-underline bg-teal-400 border border-transparent rounded-full text-md hover:bg-teal-300 md:py-4 md:text-2xl md:px-10 cta-know-more" >
            Know More
          </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DirectorsHero;
