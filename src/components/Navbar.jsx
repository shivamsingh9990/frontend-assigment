import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4">
        <h1 className="font-gerbil text-lg md:text-2xl lg:text-2xl">
          Elementum
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex  gap-8">
          <a href="#">Home</a>
          <a href="#">Studio</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">Creators</a>
          <a href="#">Faqs</a>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
        <button className="hidden md:flex flex-col gap-1 cursor-pointer">
          <span className="w-7 h-0.5 bg-black"></span>
          <span className="w-7 h-0.5 bg-black"></span>
        </button>
      </nav>

      {/* Background Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl transition-transform z-20 duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-8 mt-10 text-lg">
          <a href="#">Home</a>
          <a href="#">Studio</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">Creators</a>
          <a href="#">Faqs</a>
        </div>
      </div>
    </>
  );
}
