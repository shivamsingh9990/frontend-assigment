import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#DCEEDD] px-6 md:px-16 pt-16 pb-10 overflow-hidden">
      {/* decorative purple blob */}
      <svg
        className="hidden md:block absolute right-10 top-24 w-28 h-28"
        width="183"
        height="228"
        viewBox="0 0 183 228"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60.9994 227.653C47.1247 219.642 34.9637 208.977 25.2106 196.267C15.4576 183.557 8.30358 169.05 4.15701 153.575C0.0104461 138.099 -1.04745 121.959 1.04372 106.075C3.1349 90.1908 8.33419 74.8742 16.3447 60.9995C24.3553 47.1248 35.0202 34.9638 47.7306 25.2108C60.441 15.4577 74.948 8.30369 90.4232 4.15712C105.898 0.0105569 122.039 -1.04734 137.923 1.04383C153.807 3.13501 169.123 8.3343 182.998 16.3449L121.999 121.999L60.9994 227.653Z"
          fill="#934CEC"
        />
      </svg>

      {/* red curved arrows */}
      <svg
        className="absolute left-[38%] top-0 w-32 h-16 hidden md:block"
        viewBox="0 0 130 60"
        fill="none"
      >
        <path d="M20 0C15 25 30 35 30 55" stroke="#FF6B6B" strokeWidth="2" />
        <path d="M22 46L30 55L38 47" stroke="#FF6B6B" strokeWidth="2" />

        <path d="M90 0C95 22 82 32 82 55" stroke="#FF6B6B" strokeWidth="2" />
        <path d="M74 46L82 55L90 47" stroke="#FF6B6B" strokeWidth="2" />
      </svg>

      {/* subscribe section */}
      <div className="relative z-10 text-center max-w-2xl mx-auto pt-8">
        <h2 className="font-gerbil text-4xl md:text-6xl leading-tight">
          Subscribe to
          <br />
          our newsletter
        </h2>
        <p className="text-sm text-gray-700 mt-4">
          To make your stay special and even more memorable
        </p>
        <button className="bg-black text-white text-sm font-medium px-6 py-3 rounded-full mt-6">
          Subscribe Now
        </button>
      </div>

      {/* divider */}
      <div className="border-t border-gray-400/50 mt-16"></div>

      {/* link columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12 text-sm">
        <div>
          <h3 className="font-gerbil text-lg mb-4">Company</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Studio</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-gerbil text-lg mb-4">Terms &amp; Policies</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Accesibility</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-gerbil text-lg mb-4">Follow Us</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-gerbil text-lg mb-4">Terms &amp; Policies</h3>
          <p className="text-gray-700 leading-relaxed">
            1498w Fluton ste, STE
            <br />
            2D Chicgo, IL 63867.
          </p>
          <p className="text-gray-700 mt-4">(123) 456789000</p>
          <p className="text-gray-700 mt-4">info@elementum.com</p>
        </div>
      </div>

      {/* copyright */}
      <p className="text-center text-lg text-[#000000] mt-16">
        &copy;2023 Elementum. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
