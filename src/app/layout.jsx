import { Hanken_Grotesk, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "./app.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata = {
  title: "Anshu Sarkar®",
  description:
    "Software Engineer building scalable web applications, real-time systems, and workflow-driven platforms. Frontend focused with growing full-stack and GenAI experience.",
  icons: { icon: "/Name-icon-light.png" },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${jetbrains.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
