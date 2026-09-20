import { Search, PhoneCall, ArrowRight } from "lucide-react";

export default function AppointmentCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-600">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-[32px] shadow-2xl p-8 lg:p-14">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side */}
            <div>

              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium">
                Book an Appointment
              </span>

              <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your Health Deserves
                <span className="text-blue-600"> Expert Care</span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-8">
                Schedule an appointment with our experienced specialists and
                receive world-class healthcare using advanced medical
                technology.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full shadow-lg font-semibold">

                <Search size={20} />
                Find a Doctor

              </button>

                <button className="flex items-center gap-2 border-2 border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold transition">

                  <PhoneCall size={20} />
                  Call Now

                </button>

              </div>

            </div>

            {/* Right Side */}

            <div className="bg-blue-50 rounded-3xl p-8">

              <h3 className="text-2xl font-bold text-gray-900">
                Why Book With Us?
              </h3>

              <div className="space-y-5 mt-8">

                <div className="flex items-center justify-between border-b pb-4">
                  <span>Experienced Specialists</span>
                  <span>✔</span>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <span>24/7 Emergency Care</span>
                  <span>✔</span>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <span>Modern Diagnostic Labs</span>
                  <span>✔</span>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <span>Online Appointment</span>
                  <span>✔</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Patient-Centered Care</span>
                  <span>✔</span>
                </div>

              </div>

              <button className="w-full mt-10 bg-blue-500 hover:bg-blue-700 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-semibold transition">

                Get Started
                <ArrowRight size={20} />

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}