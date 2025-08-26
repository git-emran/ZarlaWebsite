import React from "react";

export default function Contact() {
  return (
    <section
      className="relative py-20 bg-gray-100"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
          >
            Get in Touch
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to book a service? Fill out the form or find
            us on the map.
          </p>
        </header>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            className="bg-white  rounded-2xl shadow-xl p-8 space-y-6 border border-gray-100"
            aria-label="Contact form"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={10}
                required
                className="mt-2 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>

          {/* Map + Contact Info */}
          <aside className="flex flex-col bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Map */}
            <div className="relative w-full h-64 lg:h-80">
              <iframe
                title="Company location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.163437769202!2d151.2092951155105!3d-33.86881908065725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae41e6d3f3df%3A0x5017d681632b5a0!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1679321764045!5m2!1sen!2sau"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Our Office
                </h3>
                <p className="mt-2 text-gray-600">
                  123 Sydney Street, NSW 2000 <br /> Australia
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="mt-2 text-gray-600">info@sydneyprodetailers.com</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <p className="mt-2 text-gray-600">+61 400 123 456</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

