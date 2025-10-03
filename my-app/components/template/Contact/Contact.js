import React from "react";
import Image from "next/image";


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
          <div className="bg-white rounded-xl shadow-lg ring-1 ring-emerald-100 p-6 sm:p-8 flex items-center justify-center">
            <Image
              src="/product_img17.jpg"
              alt="Contact illustration"
              width={250}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
