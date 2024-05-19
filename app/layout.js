import  { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation/navigation";
import Footer from "../components/Footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "Blog App",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-10 min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
