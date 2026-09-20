import { useState } from "react";
import { Calendar, HeartPulse, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl">

      {/* Navbar */}
      <div className="flex items-center justify-between px-8 py-4 rounded-full bg-white/80 backdrop-blur-lg border border-blue-100 shadow-2xl">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 p-3 rounded-full text-white">
            <HeartPulse size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-blue-500">
              Dr.Varshini Memorial
            </h1>

            <p className="text-xs text-gray-600">
              Hospital
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">

          {["Home", "Services", "Doctors", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-700 hover:text-blue-500
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-3
              after:h-[2px]
              after:w-0
              after:bg-blue-600
              after:transition-all
              after:duration-300
              hover:after:w-full"
            >
              {item}
            </a>
          ))}

        </nav>

        {/* Desktop Button */}
        <button className=" hidden md:block bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition">
         <div className="flex items-center gap-2"> <Calendar size={20} />Book Appointment</div>
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-600"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-6">

          <nav className="flex flex-col gap-5 text-lg font-medium">

            <a href="#" onClick={() => setIsOpen(false)}>Home</a>

            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>

            <a href="#doctors" onClick={() => setIsOpen(false)}>
              Doctors
            </a>

            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>

          </nav>

          <button className="w-full mt-6 bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition">
           <div className="flex items-center gap-2 justify-center"> <Calendar size={20} />Book Appointment</div>
          </button>

        </div>
      </div>

    </header>
  );
}