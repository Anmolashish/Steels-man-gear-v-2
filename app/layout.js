import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Context } from "./productsData/Context";
import Loader from "./homeComponents/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Steelman Gears: High-Quality Gear Solutions ",
  description:
    "Steelman Gears delivers precision-engineered gears for diverse industries. Specializing in custom and standard gears, we ensure quality and performance. Contact us today! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Loader />
        <Context>{children}</Context>
      </body>
    </html>
  );
}
