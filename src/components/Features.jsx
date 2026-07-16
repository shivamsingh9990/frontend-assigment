import React from "react";
import img1 from "../assets/images/image 348.png"
import img2 from "../assets/images/image 349.png"

const Features = () => {
  return (
    <section className="relative bg-neutral-50 px-6 md:px-16 py-20 overflow-hidden">
      {/* soft pink glow background, top */}
      <div className="absolute -top-20 left-10 w-[420px] h-[420px] bg-pink-300/30 rounded-full blur-3xl pointer-events-none"></div>

      <span className="text-sm text-gray-400 relative z-10">Features</span>

      {/* ROW 1 */}
      <div className="relative grid md:grid-cols-2 gap-10 items-center mt-6">
        {/* text */}
        <div className="relative z-10">
          <h2 className="font-gerbil text-4xl md:text-5xl leading-snug">
            <span className="relative inline-block">
              Tomorrow
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
            </span>{" "}
            should
            <br />
            be better than{" "}
            <span className="bg-[#D7EEDD] px-2 py-1 rounded-full">today</span>
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mt-5 max-w-sm">
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse to
            play things safe.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium mt-6"
          >
            Read more
            <span className="w-10 border-t border-dashed border-gray-400"></span>
            <span>&rarr;</span>
          </a>
        </div>

        {/* image with decorative shapes */}
        <div className="relative flex justify-center">
          <div className="absolute top-15 right-25 w-30 h-30 bg-[#FF6B6B] rotate-18"></div>
          <img
            src={img1}
            alt="Team meeting"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover relative z-10"
          />
        </div>
      </div>

      {/* connecting squiggly line between rows */}
      <svg
        className="absolute right-10 top-[380px] w-40 h-40 hidden md:block"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M180 0C150 40 190 70 150 100C120 125 60 110 40 150C25 178 40 195 20 200"
          stroke="#FF6B6B"
          strokeWidth="2"
        />
      </svg>

      {/* ROW 2 */}
      <div className="relative grid md:grid-cols-2 gap-10 items-center mt-24">
        {/* image with decorative shapes */}
        <div className="relative flex justify-center md:justify-start">
          <div className="absolute -top-5 left-2 w-30 h-30 border-l-[60px] border-r-[60px] border-b-[100px] border-l-transparent border-r-transparent border-b-[#FF6B6B]"></div>
          <div className="absolute bottom-0 left-65 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[100px] border-l-transparent border-r-transparent border-b-[#FF6B6B] z-20"></div>
          <img
            src={img2}
            alt="Colleagues working"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover relative z-10"
          />
        </div>

        {/* text */}
        <div>
          <h2 className="font-gerbil text-4xl md:text-5xl leading-snug">
            <span className="bg-[#D7EEDD] px-2 py-1 rounded-full">See</span> how
            we can
            <br />
            help you{" "}
            <span className="relative inline-block">
              progress
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

          <p className="text-sm text-gray-600 leading-relaxed mt-5 max-w-md">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium mt-6"
          >
            Read more
            <span className="w-10 border-t border-dashed border-gray-400"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
