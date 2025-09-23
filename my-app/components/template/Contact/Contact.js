import React from "react";

const Contact = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Get in Touch
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-emerald-900 leading-tight">
                Contact ZyraShop
              </h2>
              <p className="mt-2 text-emerald-800 text-base sm:text-lg">
                Have questions about your order, our products, or need support?
                We’d love to hear from you. Reach out anytime!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shadow ring-1 ring-emerald-100">
                  📍
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-900">
                    Our Office
                  </p>
                  <p className="text-sm text-emerald-700">
                   Not Menstion
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shadow ring-1 ring-emerald-100">
                  📞
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-900">
                    Call Us
                  </p>
                  <p className="text-sm text-emerald-700">+7 (054) 530-763</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shadow ring-1 ring-emerald-100">
                  📧
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-900">Email</p>
                  <p className="text-sm text-emerald-700">
                    support@zyrashop.com
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-emerald-700/70">
              We usually reply within 24 hours (Mon-Fri).
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg ring-1 ring-emerald-100 p-6 sm:p-8">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-emerald-900"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full px-4 py-2 border border-emerald-200 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-emerald-900"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 w-full px-4 py-2 border border-emerald-200 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-emerald-900"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="mt-1 w-full px-4 py-2 border border-emerald-200 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-md bg-emerald-700 text-white text-sm font-semibold shadow hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
