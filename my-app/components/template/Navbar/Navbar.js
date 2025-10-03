"use client";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();


  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/shop?search=${search}`);
  };

  const linkClasses = (path) =>
    `relative pb-1 transition ${pathname === path
      ? "text-green-600 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-green-600"
      : "text-slate-600 hover:text-green-600"
    }`;

  return (
    <nav className="relative bg-white shadow">
      <div className="mx-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto py-4">
          <Link
            href="/"
            className="relative text-4xl font-semibold text-slate-700"
          >
            <span>Zyra</span>
            <span className="text-green-600 text-5xl leading-0">Shop</span>
            <p className="absolute text-xs font-semibold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-green-500">
              pro
            </p>
          </Link>
          <form
            onSubmit={handleSearch}
            className="hidden sm:flex items-center w-xs text-sm gap-2 bg-slate-100 px-4 py-2 rounded-full"
          >
            <Search size={18} className="text-slate-600" />
            <input
              className="w-full bg-transparent outline-none placeholder-slate-600"
              type="text"
              placeholder="Search products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />
          </form>
          <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600">
            <Link href="/" className={linkClasses("/")}>Home</Link>
            <Link href="/shop" className={linkClasses("/shop")}>Shop</Link>
            <Link href="/about" className={linkClasses("/about")}>About</Link>
            <Link href="/contact" className={linkClasses("/contact")}>Contact</Link>
            <Link
              href="/cart"
              className={`${linkClasses("/cart")} relative flex items-center gap-2 text-slate-600`}
            >
              <ShoppingCart size={18} />
              Cart
              <span className="absolute -top-1 left-3 text-[8px] text-white bg-slate-600 size-3.5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            <div className="flex gap-2">
              <button
                className="px-2 py-2 w-full text-white text-center font-bold rounded-full
               bg-gradient-to-r from-violet-500 via-purple-600 to-orange-500
               hover:opacity-85 transition"
                onClick={() => {
                  router.push("/login");
                  setMenuOpen(false);
                }}
              >
                Login
              </button>
              <button
                className="px-2 py-2  w-full text-white text-center font-bold rounded-full
               bg-gradient-to-r from-violet-500 via-purple-600 to-orange-500
               hover:opacity-85 transition"
                onClick={() => {
                  router.push("/signup");
                  setMenuOpen(false);
                }}
              >
              SignUp
              </button>
            </div>
          </div>
          <button
            className="sm:hidden text-slate-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <div className="sm:hidden mt-2 mb-2">
          <form
            onSubmit={handleSearch}
            className="flex items-center w-full text-sm gap-2 bg-slate-100 px-4 py-2 rounded-full"
          >
            <Search size={18} className="text-slate-600" />
            <input
              className="w-full bg-transparent outline-none placeholder-slate-600"
              type="text"
              placeholder="Search products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />
          </form>
        </div>
      </div>
      <div
        className={`sm:hidden position top-full left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[400px]" : "max-h-0"
          }`}
      >
        <div className="flex flex-col gap-4 p-4 text-slate-700">
          <Link href="/" onClick={() => setMenuOpen(false)} className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)} className={linkClasses("/shop")}>
            Shop
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className={linkClasses("/about")}>
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className={linkClasses("/contact")}>
            Contact
          </Link>
          <Link
            href="../../../src/app/cart/page.js"
            onClick={() => setMenuOpen(false)}
            className={`${linkClasses("/cart")} relative flex items-center gap-2 text-slate-600`}
          >
            <ShoppingCart size={18} />
            Cart
            <span className="absolute -top-1 left-3 text-[8px] text-white bg-slate-600 size-3.5 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          <div className="flex gap-3">
            <button
              className="px-2 py-2 w-full text-white text-center rounded-full
               bg-gradient-to-r from-violet-500 via-purple-600 to-orange-500
               hover:opacity-90 transition"
              onClick={() => {
                router.push("/login");
                setMenuOpen(false);
              }}
            >
              Login
            </button>
            <button
              className="px-2 py-2 w-full text-white text-center rounded-full
               bg-gradient-to-r from-violet-500 via-purple-600 to-orange-500
               hover:opacity-90 transition"
              onClick={() => {
                router.push("/signup");
                setMenuOpen(false);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-300" />
    </nav>
  );
};

export default Navbar;
