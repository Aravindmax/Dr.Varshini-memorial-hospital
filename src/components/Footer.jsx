export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              CarePlus Hospital
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Delivering quality healthcare with experienced doctors,
              modern technology, and compassionate care for every patient.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#doctors" className="hover:text-blue-400 transition">
                  Doctors
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Departments
            </h3>

            <ul className="space-y-3">
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Orthopedics</li>
              <li>Pediatrics</li>
              <li>Emergency Care</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">
              <p>
                <span className="font-semibold text-white">Address:</span><br />
                123 Medical Avenue,<br />
                Chennai, Tamil Nadu
              </p>

              <p>
                <span className="font-semibold text-white">Phone:</span><br />
                +91 98765 43210
              </p>

              <p>
                <span className="font-semibold text-white">Email:</span><br />
                info@careplushospital.com
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-8">
              <a href="#" className="hover:text-blue-400 transition">
                Facebook
              </a>

              <a href="#" className="hover:text-blue-400 transition">
                Instagram
              </a>

              <a href="#" className="hover:text-blue-400 transition">
                LinkedIn
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} CarePlus Hospital. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}