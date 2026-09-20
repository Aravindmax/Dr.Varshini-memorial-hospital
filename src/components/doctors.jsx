import { Star, Calendar } from "lucide-react";
import Heroimg from "../assets/hero.jpg";

const doctors = [
  {
    image:Heroimg,
    name: "Dr. Sarah Johnson",
    speciality: "Cardiologist",
    experience: "15+ Years",
  },
  {
    image:Heroimg,
    name: "Dr. Michael Lee",
    speciality: "Neurologist",
    experience: "12+ Years",
  },
  {
    image:Heroimg,
    name: "Dr. Emily Davis",
    speciality: "Pediatrician",
    experience: "10+ Years",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 bg-gradient-to-t from-blue-200 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="bg-blue-50 text-blue-700 px-5 py-2 rounded-full font-medium">
            Our Specialists
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Meet Our
            <span className="text-blue-500"> Expert Doctors</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Dedicated medical professionals committed to providing
            exceptional healthcare with compassion and expertise.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16">

          {doctors.map((doctor, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
            >

              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold text-gray-900">
                  {doctor.name}
                </h3>

                <p className="mt-1 text-blue-500 font-semibold">
                  {doctor.speciality}
                </p>

                <div className="flex items-center justify-between mt-1">

                  <span className="text-gray-600">
                    {doctor.experience}
                  </span>

                  <div className="flex items-center gap-1 text-yellow-500">

                    {/*<Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />*/}

                  </div>

                </div>

                <button className="mt-5 w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold">

                  <Calendar size={20} />
                  Book Appointment

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}