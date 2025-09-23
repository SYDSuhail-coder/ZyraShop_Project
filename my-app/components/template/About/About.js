import React from 'react'
import Image from "next/image";
import { assets } from "@/app/assets/assets";

const page = () => {
  return (
<section className="bg-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-emerald-50 rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-3">
          <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">ZyraShop</span>
          <span className="text-emerald-800 text-sm font-medium">Gadgets you'll love · Prices you'll trust</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-900 leading-tight">
          Welcome to ZyraShop
        </h2>

        <p className="text-emerald-800 text-base sm:text-lg">
          Your trusted online destination for the latest gadgets, accessories, and lifestyle picks. We make shopping <strong>easy, fun, and affordable</strong> — without compromising on quality.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-emerald-800">
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex items-center justify-center h-7 w-7 rounded-md bg-white text-emerald-600 ring-1 ring-emerald-200">✓</span>
            <span className="text-sm font-medium">Top-quality products</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex items-center justify-center h-7 w-7 rounded-md bg-white text-emerald-600 ring-1 ring-emerald-200">✓</span>
            <span className="text-sm font-medium">Prices starting from $4.90</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex items-center justify-center h-7 w-7 rounded-md bg-white text-emerald-600 ring-1 ring-emerald-200">✓</span>
            <span className="text-sm font-medium">Free shipping on orders over $50</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex items-center justify-center h-7 w-7 rounded-md bg-white text-emerald-600 ring-1 ring-emerald-200">✓</span>
            <span className="text-sm font-medium">Fast & friendly support</span>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
          <a href="/shop" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-emerald-700 text-white text-sm font-semibold shadow hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            Shop Now
          </a>
          <a href="/contact" className="text-emerald-700 text-sm font-medium hover:underline">
            Contact Us
          </a>
        </div>

        <p className="text-xs text-emerald-700/70 mt-2">Join thousands of happy customers who trust ZyraShop for great products and honest prices.</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-sm">
          <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-emerald-100 bg-white">
              <Image className="max-w-full max-h-full object-cover sm:h-60 md:h-90 items-center-safe " src={assets.hero_model_img} alt="" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-emerald-900">Best gadgets, great value</h3>
              <p className="text-sm text-emerald-700 mt-1">Curated picks, quality checked, ready to ship.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-extrabold text-emerald-800">$4.90</span>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Free shipping $50+</span>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 -left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm ring-1 ring-emerald-100 text-emerald-800 text-xs font-semibold">
            Trusted by thousands
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default page