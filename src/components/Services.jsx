import React from "react";

const rows = [
  {
    label: "Office of multiple\ninterest content",
    title: "Colaborative & partnership",
    badge: false,
  },
  {
    label: "The hanger US Air force\ndigital experimental",
    title: "We talk about our weight",
    badge: false,
  },
  {
    label: "Delta faucet content,\nsocial, digital",
    title: "Piloting digital confidence",
    badge: true,
  },
];

const Services = () => {
  return (
    <section className="relative bg-white px-6 md:px-16 py-20">
      {/* decorative squiggle top right */}
      <svg
        className="absolute right-0 -top-2 w-40 h-24"
        viewBox="0 0 160 100"
        fill="none"
      >
        <path
          d="M0 90C30 95 40 60 70 55C100 50 90 15 130 5C145 0 150 -2 160 0"
          stroke="#FF6B6B"
          strokeWidth="2"
        />
      </svg>

      {/* heading */}
      <h2 className="font-gerbil text-4xl md:text-5xl leading-snug">
        What we <span className="bg-[#D7EEDD] px-2 py-1 rounded-full">can</span>
        <br />
        <span className="relative inline-block">
          offer
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
        you!
      </h2>

      {/* rows */}
      <div className="mt-10">
        {rows.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_2.5fr_auto] items-center gap-4 py-6 border-t border-gray-200 last:border-b"
          >
            <p className="text-lg text-[#000000] leading-snug whitespace-pre-line">
              {row.label}
            </p>

            <div className="relative">
              <h3 className="font-gerbil text-4xl ">{row.title}</h3>
              {row.badge && (
                <img
                  src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=100&h=100&fit=crop"
                  alt=""
                  className="w-9 h-9 rounded-full object-cover absolute right-16 -top-2 opacity-90"
                />
              )}
            </div>

            <span className="text-gray-800 text-lg">&#10230;</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
