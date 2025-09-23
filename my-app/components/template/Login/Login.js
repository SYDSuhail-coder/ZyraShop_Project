// // 

// "use client";

// import React from "react";
// import { Mail, Lock, Github, Chrome } from "lucide-react";

// const LoginPage = () => {
//   return (
//     <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-100 via-white to-emerald-50 px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl ring-1 ring-emerald-100 p-8">
//         {/* Title */}
//         <h2 className="text-3xl font-extrabold text-emerald-900 text-center mb-2">
//           Welcome Back
//         </h2>
//         <p className="text-center text-emerald-600 text-sm mb-6">
//           Login to continue exploring 🚀
//         </p>

//         {/* Login Form */}
//         <form className="space-y-5">
//           {/* Email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-emerald-900 mb-1"
//             >
//               Email Address
//             </label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-2.5 h-5 w-5 text-emerald-500" />
//               <input
//                 type="email"
//                 id="email"
//                 required
//                 placeholder="you@example.com"
//                 className="w-full pl-10 pr-4 py-2 border border-emerald-200 rounded-md 
//                            focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-emerald-900 mb-1"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-2.5 h-5 w-5 text-emerald-500" />
//               <input
//                 type="password"
//                 id="password"
//                 required
//                 placeholder="••••••••"
//                 className="w-full pl-10 pr-4 py-2 border border-emerald-200 rounded-md 
//                            focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
//               />
//             </div>
//             <div className="text-right mt-1">
//               <a
//                 href="#"
//                 className="text-xs text-emerald-600 hover:underline font-medium"
//               >
//                 Forgot Password?
//               </a>
//             </div>
//           </div>

//           {/* Gradient Login Button */}
//           <button
//             type="submit"
//             className="w-full py-3 rounded-md text-white font-semibold 
//                        bg-gradient-to-r from-violet-500 via-purple-600 to-orange-500
//                        shadow-md hover:opacity-90 transition"
//           >
//             Login
//           </button>
//         </form>

//         {/* Social Login */}
//         <div className="mt-6">
//           <p className="text-xs text-center text-emerald-600 mb-3">Or login with</p>
//           <div className="flex gap-3">
//             <button
//               type="button"
//               className="flex items-center justify-center w-1/2 gap-2 border border-emerald-200 py-2 rounded-md text-sm font-medium hover:bg-emerald-50"
//             >
//               <Chrome className="h-5 w-5 text-red-500" />
//               Google
//             </button>
//             <button
//               type="button"
//               className="flex items-center justify-center w-1/2 gap-2 border border-emerald-200 py-2 rounded-md text-sm font-medium hover:bg-emerald-50"
//             >
//               <Github className="h-5 w-5" />
//               GitHub
//             </button>
//           </div>
//         </div>

//         {/* Footer */}
//         <p className="text-sm text-center text-emerald-700 mt-6">
//           Don’t have an account?{" "}
//           <a
//             href="/signup"
//             className="font-semibold text-emerald-600 hover:underline"
//           >
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default LoginPage;



"use client";

import React from "react";
import { Mail, Phone, Lock, Github, Chrome } from "lucide-react";

const LoginPage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-100 via-white to-emerald-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl ring-1 ring-emerald-100 p-8">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-emerald-900 text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-emerald-600 text-sm mb-6">
          Login to continue exploring 🚀
        </p>

        {/* Login Form */}
        <form className="space-y-5">
          {/* Email / Phone */}
          <div>
            <label
              htmlFor="emailOrPhone"
              className="block text-sm font-medium text-emerald-900 mb-1"
            >
              Email or Phone
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-emerald-500" />
              <input
                type="text"
                id="emailOrPhone"
                required
                placeholder="you@example.com or phone number"
                className="w-full pl-10 pr-4 py-2 border border-emerald-200 rounded-md 
                           focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-emerald-900 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-emerald-500" />
              <input
                type="password"
                id="password"
                required
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2 border border-emerald-200 rounded-md 
                           focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
              />
            </div>
            <div className="text-right mt-1">
              <a
                href="#"
                className="text-xs text-emerald-600 hover:underline font-medium"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Gradient Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-md text-white font-semibold 
                       bg-gradient-to-r from-violet-500 via-purple-600 to-orange-500
                       shadow-md hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-6">
          <p className="text-xs text-center text-emerald-600 mb-3">Or login with</p>
          <div className="flex gap-3">
            <button
              type="button"
              className="flex items-center justify-center w-1/2 gap-2 border border-emerald-200 py-2 rounded-md text-sm font-medium hover:bg-emerald-50"
            >
              <Chrome className="h-5 w-5 text-red-500" />
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-1/2 gap-2 border border-emerald-200 py-2 rounded-md text-sm font-medium hover:bg-emerald-50"
            >
              <Github className="h-5 w-5" />
              GitHub
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm text-center text-emerald-700 mt-6">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="font-semibold text-emerald-600 hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
