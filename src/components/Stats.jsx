import { Users, Stethoscope, Building2, Award } from "lucide-react";

const stats = [
  {
    icon: <Users size={40} />,
    number: "50K+",
    title: "Happy Patients",
  },
  {
    icon: <Stethoscope size={40} />,
    number: "75+",
    title: "Expert Doctors",
  },
  {
    icon: <Building2 size={40} />,
    number: "20+",
    title: "Departments",
  },
  {
    icon: <Award size={40} />,
    number: "25+",
    title: "Years Experience",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-500 font-medium">
            Our Achievements
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Trusted By Thousands of
            <span className="text-sky-500"> Families</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We take pride in delivering exceptional healthcare with
            compassion, innovation, and medical excellence.
          </p>

        </div>

        {/* Stats Cards */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white border-1 border-sky-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center"
            >

              <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-sky-100 text-sky-500">
                {item.icon}
              </div>

              <h3 className="mt-6 text-5xl font-bold text-sky-500">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-600 text-lg">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}