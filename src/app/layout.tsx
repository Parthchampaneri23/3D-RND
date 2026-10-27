import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "NovaTech — Ideas to Impact | Premium Digital Growth Partner",
  description:
    "We Build Digital Experiences That Drive Real Business Growth. We turn your ideas into powerful digital products with modern technology, creative design and reliable support.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${geistMono.variable} ${bebasNeue.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#06070a] text-white antialiased font-[family-name:var(--font-jakarta)] selection:bg-[#FFD400] selection:text-black">
        {children}
      </body>
    </html>
  );
}
