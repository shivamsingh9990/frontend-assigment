import React from "react";
import img1 from "../assets/images/Ellipse 263.png"
import img2 from "../assets/images/Ellipse 266.png";
import img3 from "../assets/images/Ellipse 267.png";
import img4 from "../assets/images/Ellipse 268.png";
import img5 from "../assets/images/Ellipse 264.png";
import img6 from "../assets/images/Ellipse 265.png";
import img7 from "../assets/images/Ellipse 269.png";
import img8 from "../assets/images/Ellipse 270.png";

const Testimonial = () => {
  return (
    <section className="relative bg-white px-6 md:px-16 py-20 overflow-hidden">
      {/* left side avatars */}
      <img
        src={img1}
        alt="customer"
        className="hidden lg:block absolute rounded-full  border-4 border-white shadow-md object-cover w-20 h-20 left-25 top-30"
      />
      <img
        src={img2}
        alt="customer"
        className="hidden lg:block absolute rounded-full border-4 border-white shadow-md object-cover w-18 h-18 left-4 top-60"
      />
      <img
        src={img4}
        alt="customer"
        className="hidden lg:block absolute rounded-full border-4 border-white shadow-md object-cover w-40 h-40 left-40 top-62"
      />
      <img
        src={img3}
        alt="customer"
        className="hidden lg:block absolute rounded-full border-4 border-white shadow-md object-cover w-30 h-30 left-2 top-[350px]"
      />

      {/* right side avatars */}
      <img
        src={img8}
        alt="customer"
        className="hidden lg:block absolute rounded-full border-4 border-white shadow-md object-cover w-25 h-25 right-45 top-20"
      />
      <img
        src={img5}
        alt="customer"
        className="hidden lg:block absolute rounded-full border-4 border-white shadow-md object-cover w-20 h-20 right-87 top-30"
      />
      <img
        src={img6}
        alt="customer"
        className="hidden lg:block absolute rounded-full border-4 border-white shadow-md object-cover w-28 h-28 right-70 top-56"
      />
      <img
        src={img7}
        alt="customer"
        className="hidden lg:block absolute rounded-full border-4 border-white shadow-md object-cover w-50 h-50 right-30 top-[330px]"
      />

      {/* center content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="font-gerbil text-3xl md:text-4xl leading-snug">
          <span className="bg-[#D7EEDD] px-2 py-1 rounded-full">What</span> our
          customer
          <br />
          says{" "}
          <span className="relative inline-block">
            About Us
            <svg
              className="absolute left-0 -bottom-1 w-full h-3"
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0 15 Q50 2 100 12 T200 8"
                stroke="#f5a623"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </span>
        </h2>

        <div className="relative bg-[#EFF7F1] w-[100%]  rounded-3xl mt-10 px-10 py-20">
          <span className="absolute left-6 top-2 text-9xl text-gray-300 font-serif select-none">
            &#8220;
          </span>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Elementum delivered the site with inthe timeline as they requested.
            Inthe end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn't used, which have also proved to
            be easy to use and reliable
          </p>
          <span className="absolute right-6 text-9xl text-gray-300 font-serif select-none">
            &#8221;
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;