import { Calendar, Search, Phone, ShieldCheck, Star } from "lucide-react";
import heroImg from "../assets/hero.jpg"; // Change the path if needed
import FadeIn from "../components/FadeIn";

export default function Hero() {
  return (
    
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-00">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-20 h-150 w-150 rounded-full bg-blue-400/15 blur-3xl"></div>
      {/*<div className="absolute bottom-0 right-0 h-150 w-150 rounded-full bg-blue-300/20 blur-3xl"></div>*/}

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-20">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* LEFT CONTENT */}

          <div>

            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium">
              <ShieldCheck size={18} />
              Trusted Healthcare Since 1998
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Caring For
              <br />

              <span className="text-blue-500">
                Your Health 
              </span>
            <br/>
               Every Day.
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
              World-class healthcare with experienced doctors,
              modern technology, and compassionate patient care.
              Your health is our highest priority.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full shadow-lg font-semibold">

                <Search size={20} />
                Find a Doctor

              </button>

              <button className="flex items-center gap-2 border-3 border-blue-400 bg-white hover:bg-blue-50 px-8 py-4 rounded-full font-semibold">

                <Phone size={20} />
                Emergency

              </button>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>
                <h2 className="text-4xl font-bold text-blue-500">
                  25+
                </h2>

                <p className="text-gray-500 mt-2">
                  Years
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-500">
                  20K+
                </h2>

                <p className="text-gray-500 mt-2">
                  Patients
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-500">
                  24/7
                </h2>

                <p className="text-gray-500 mt-2">
                  Emergency
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative">

            {/* Floating Card */}

            <div className="absolute top-8 -left-8 bg-white rounded-2xl shadow-xl p-5 z-20 hidden md:block">

              <div className="flex items-center gap-3">

                <div className="bg-blue-100 p-3 rounded-full">
                  <Star className="text-blue-500" />
                </div>

                <div>
                  <h3 className="font-bold">
                    4.9/5 Rating
                  </h3>

                  <p className="text-gray-500 text-sm">
                    10,000+ Reviews
                  </p>
                </div>

              </div>

            </div>

            {/* Hero Image */}

            <div className="rounded-[40px] overflow-hidden shadow-2xl">

              <img
                src={heroImg}
                alt="Doctor"
                className="w-full h-[500px] object-cover"
              />

            </div>

            {/* Bottom Card */}

            <div className="absolute bottom-8 right-6 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6">

              <h3 className="text-3xl font-bold text-blue-500">
                98%
              </h3>

              <p className="text-gray-500">
                Patient Satisfaction
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}