"use client";

import React, { useState } from "react";
import { User, Mail, Lock, Phone, Eye, EyeOff } from "lucide-react";

const SignupPage = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length !== 6) {
      setError("Password must be exactly 6 characters long.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setError(""); 
    alert("Signup Successful ✅");
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-100 via-white to-emerald-50 px-4 m-1">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl ring-1 ring-emerald-100 p-8">

        <h2 className="text-3xl font-extrabold text-emerald-900 text-center mb-2">
          Create My Account
        </h2>
        <p className="text-center text-emerald-600 text-sm mb-6">
          Join us and start your journey 🚀
        </p>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-emerald-900 mb-1"
            >
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-5 w-5 text-emerald-500" />
              <input
                type="text"
                id="name"
                required
                placeholder="Enter your  name"
                className="w-full pl-10 pr-4 py-2 border border-emerald-200 rounded-md 
                           focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-emerald-900 mb-1"
            >
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-2.5 h-5 w-5 text-emerald-500" />
              <input
                type="tel"
                id="phone"
                required
                placeholder="+91"
                className="w-full pl-10 pr-4 py-2 border border-emerald-200 rounded-md 
                           focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-emerald-900 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-emerald-500" />
              <input
                type="email"
                id="email"
                required
                placeholder="Enter your @email.com"
                className="w-full pl-10 pr-4 py-2 border border-emerald-200 rounded-md 
                           focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-emerald-900 mb-1"
            >
              Password (6 Characters Only)
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-emerald-500" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                maxLength={6}
                className="w-full pl-10 pr-10 py-2 border border-emerald-200 rounded-md 
                           focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 cursor-pointer text-emerald-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="confirm"
              className="block text-sm font-medium text-emerald-900 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-emerald-500" />
              <input
                type={showPassword ? "text" : "password"}
                id="confirm"
                required
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="••••••"
                maxLength={6}
                className="w-full pl-10 pr-10 py-2 border border-emerald-200 rounded-md 
                           focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 cursor-pointer text-emerald-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-md text-white font-semibold 
                       bg-gradient-to-r from-violet-500 via-purple-600 to-orange-500
                       shadow-md hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-emerald-700 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-emerald-600 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default SignupPage;
