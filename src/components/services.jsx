import {
  HeartPulse,
  Brain,
  Baby,
  Bone,
  Eye,
  Ambulance,
  Microscope,
  Pill,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <HeartPulse size={36} />,
    title: "Cardiology",
    description: "Advanced heart care with experienced cardiologists and modern equipment.",
  },
  {
    icon: <Brain size={36} />,
    title: "Neurology",
    description: "Comprehensive diagnosis and treatment for neurological disorders.",
  },
  {
    icon: <Baby size={36} />,
    title: "Pediatrics",
    description: "Complete healthcare services for infants, children, and adolescents.",
  },
  {
    icon: <Bone size={36} />,
    title: "Orthopedics",
    description: "Expert care for bones, joints, muscles, and sports injuries.",
  },
  {
    icon: <Eye size={36} />,
    title: "Ophthalmology",
    description: "Comprehensive eye care using the latest diagnostic technology.",
  },
  {
    icon: <Microscope size={36} />,
    title: "Laboratory",
    description: "Fast and accurate diagnostic tests with modern laboratory facilities.",
  },
  {
    icon: <Ambulance size={36} />,
    title: "Emergency Care",
    description: "24/7 emergency services with rapid response and critical care.",
  },
  {
    icon: <Pill size={36} />,
    title: "Pharmacy",
    description: "In-house pharmacy providing genuine medicines and healthcare products.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="bg-sky-50 text-sky-700 px-5 py-2 rounded-full font-medium">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Complete Healthcare
            <span className="text-sky-500"> Solutions</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            We provide comprehensive healthcare services delivered by experienced
            specialists using advanced medical technology.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-sky-200 rounded-3xl p-8 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:-translate-y-3 shadow-md hover:shadow-2xl"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white text-sky-500 group-hover:bg-sky-500 group-hover:text-white shadow-md">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600 group-hover:text-sky-100">
                {service.description}
              </p>

              <button className="flex items-center gap-2 mt-8 font-semibold">
                Learn More
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}