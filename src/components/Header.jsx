import React from "react";
import Navbar from "./Navbar";
import img1 from "../assets/images/Ellipse 262.png"
import img2 from "../assets/images/Ellipse 261.png"
import img3 from "../assets/images/Ellipse 255.png"
import img4 from "../assets/images/Ellipse 256.png"
import img5 from "../assets/images/Ellipse 257.png"
import img6 from "../assets/images/Ellipse 258.png";
import img7 from "../assets/images/Ellipse 259.png";
import img8 from "../assets/images/Ellipse 260.png"

const Header = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative bg-neutral-100 px-5 pt-16 pb-50 text-center overflow-hidden">
        {/* decorative squiggle */}
        <svg
          className="absolute -left-10 top-64 w-24 h-56"
          viewBox="0 0 90 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 0C60 20 10 50 40 70C70 90 20 120 40 150C55 175 30 200 45 220"
            stroke="#111"
            strokeWidth="3"
          />
          <path
            d="M30 0C60 20 10 50 40 70C70 90 20 120 40 150C55 175 30 200 45 220"
            stroke="#ff8fb8"
            strokeWidth="3"
            strokeDasharray="1 1"
            transform="translate(-6,4)"
          />
        </svg>

        {/* pink dash */}
        <div className="w-6 h-1 bg-pink-500 rounded-full mx-auto mb-6"></div>

        <div className="flex justify-center">
          <div className="max-w-4xl mt-0">
            <h1 className="text-6xl text-center font-gerbil leading-snug">
              The{" "}
              <span className="relative inline-block">
                thinkers
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3.5"
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
              and doers were{" "}
              <span className="bg-[#FFC2EA] px-1 py-1 rounded-full">
                changing
              </span>{" "}
              the{" "}
              <span className="bg-[#D7EEDD] px-1 py-1 rounded-full">
                status
              </span>{" "}
              Quo with
            </h1>
          </div>
        </div>

        <p className="max-w-xl mx-auto mt-7 text-sm leading-relaxed text-gray-600">
          We are a team of strategists, designers communicators, researchers.
          Togeather, we belive that progress only hghappens when you refuse to
          play things safe.
        </p>

        {/* AVATAR COLLAGE */}
        
        <div className="relative  h-70 mx-auto mt-12 hidden sm:block">
          <img
            className="absolute rounded-full border-[5px] border-white object-cover shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-[150px] h-[150px] left-[5%] top-[90px]"
            src={img1}
            alt="team member"
          />
          <img
            className="absolute rounded-full border-[5px] border-white object-cover shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-[150px] h-[150px] left-[13%] top-[60px]"
            src={img2}
            alt="team member"
          />
          <img
            className="absolute rounded-full border-[5px] border-white object-cover shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-[170px] h-[170px] left-[28%] top-0"
            src={img3}
            alt="team member"
          />
          <img
            className="absolute rounded-full border-[5px] border-white object-cover shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-[160px] h-[160px] left-[35%] top-[53%]"
            src={img4}
            alt="team member"
          />
          <img
            className="absolute rounded-full border-[5px] border-white object-cover shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-[170px] h-[170px] left-[50%] top-[30px]"
            src={img5}
            alt="team member"
          />
          <img
            className="absolute rounded-full border-[5px] border-white object-cover shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-[170px] h-[170px] left-[60%] top-[80px]"
          src={img6}
            alt="team member"
          />
          <img
            className="absolute rounded-full border-[5px] border-white object-cover shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-[170px] h-[170px] left-[75%] top-0"
            src={img7}
            alt="team member"
          />
          <img
            className="absolute rounded-full border-[5px] border-white object-cover shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-[170px] h-[170px] left-[85%] top-[100px]"
            src={img8}
            alt="team member"
          />
        </div>
      </section>
    </>
  );
};

export default Header;
