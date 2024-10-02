import React from "react";
import Cards from "./Cards";

const Hiring = () => {
  return (
    <section className="Hiring">
  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
    We are{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
      Hiring
    </span>
  </h1>
  <p className="kopuram text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl">
    Vanmoh is growing, be a part, and grow with us
  </p>
  <Cards />
</section>




  );
};


export default Hiring;

