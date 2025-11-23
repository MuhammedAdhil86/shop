import { Geist, Geist_Mono, Pacifico, Poppins } from "next/font/google";
import "./globals.css";

// Geist Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Pacifico Font
const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: "400",
  subsets: ["latin"],
});

// Poppins Font
const poppins = Poppins({
  variable: "--font-poppins",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["latin"],
});

export const metadata = {
  title: "Salala Mobiles",
  description: "Mobile Store Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${pacifico.variable}
          ${poppins.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
