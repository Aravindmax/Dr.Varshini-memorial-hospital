export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-medium">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            We're Here To
            <span className="text-blue-600"> Help You</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need medical assistance? Reach out to us
            anytime. Our team is ready to help.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h3 className="text-3xl font-bold text-gray-900">
              Get In Touch
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Contact us through the details below or fill out the
              appointment form.
            </p>

            <div className="mt-10 space-y-8">

              <div>
                <h4 className="font-semibold text-blue-600">Address</h4>
                <p className="mt-2 text-gray-600">
                  123 Medical Avenue,
                  <br />
                  Chennai, Tamil Nadu - 600001
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600">Phone</h4>
                <p className="mt-2 text-gray-600">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600">Email</h4>
                <p className="mt-2 text-gray-600">
                  info@careplushospital.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600">
                  Working Hours
                </h4>
                <p className="mt-2 text-gray-600">
                  Monday - Saturday
                  <br />
                  8:00 AM - 8:00 PM
                  <br />
                  Emergency: 24 Hours
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h3 className="text-3xl font-bold text-gray-900">
              Send a Message
            </h3>

            <form className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}