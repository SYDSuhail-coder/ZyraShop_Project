import Navbar from "@/app/navbar/page";
import Footer from "@/app/footer/page";
import "./globals.css";
import Banner from "@/app/bannar/page"
import { Providers } from "../redux/providers"

export const metadata = {
  title: "My App",
  description: "Next.js app with Navbar and Footer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Providers>
        <Banner/>
        <Navbar />
        <main className="flex-1 overflow-y-auto"> <Providers>{children}</Providers></main>
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
