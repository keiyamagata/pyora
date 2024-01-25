import localFont from "next/font/local";
import Header from "./components/header/Header";

import "./globals.css";

const bdogrotesk = localFont({
  src: "./fonts/BDOGrotesk-VF.woff2",
});

const switzer = localFont({
  src: [
    {
      path: "./fonts/switzer/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/switzer/Switzer-Bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Pyora",
  description:
    "Discover the ultimate in corporate mobility with Pyora, your premier destination for cutting-edge bicycle rental services tailored exclusively for company employees. Unveil a world of convenience and sustainability as Pyora revolutionizes commuting. Our brand-new design embodies innovation and freshness, reflecting Pyora's commitment to redefining workplace transportation. Elevate your corporate culture, promote employee well-being, and embrace eco-friendly commuting solutions with Pyora – where mobility meets modernity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bdogrotesk.className} bg-primary relative`}>
        <div className="hidden lg:block">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
