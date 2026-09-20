import {
  ShieldCheck,
  Stethoscope,
  Clock3,
  Microscope,
} from "lucide-react";

const features = [
  {
    icon: <Stethoscope size={40} />,
    title: "Expert Doctors",
    description:
      "Our experienced specialists provide world-class medical care with compassion and precision.",
  },
  {
    icon: <Clock3 size={40} />,
    title: "24/7 Emergency",
    description:
      "Emergency services available round the clock with rapid response and advanced care.",
  },
  {
    icon: <Microscope size={40} />,
    title: "Advanced Technology",
    description:
      "Modern diagnostic equipment and cutting-edge medical technology for accurate treatment.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Trusted Care",
    description:
      "Committed to patient safety, quality healthcare, and personalized treatment for every patient.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-sky-200 blur-1xl py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block bg-sky-50 text-sky-700 px-4 py-2 rounded-full font-medium">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Healthcare You Can
            <span className="text-sky-500"> Trust</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            We combine experienced doctors, advanced medical technology,
            compassionate care, and a patient-first approach to deliver
            exceptional healthcare for you and your family.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-sky-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
            >
              <div className="w-16 h-16 rounded-2xl bg-sky-100 text-sky-500 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}