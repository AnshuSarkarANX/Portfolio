import {
  Bricolage_Grotesque,
  Hanken_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import TileField from "./_components/TileField";
import "./globals.css";
import "./app.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Anshu Sarkar®",
  description:
    "Software Engineer building scalable web applications, real-time systems, and workflow-driven platforms. Frontend focused with growing full-stack and GenAI experience.",
  icons: { icon: "/Name-icon-light.png" },
};

const DIRECTION_CONTRACT = `<!-- DESIGN CONTRACT (riso-edition, pinned by user 2026-08-26)
THESIS: the portfolio is a risograph print workshop's flat plan; every project is a numbered edition printed in two inks on uncoated paper. It refuses the dark-terminal dev-portfolio default.
OWN-WORLD: paper #F5F0E6 ground, fluorescent pink #FF48B0 dominant ink, riso blue #0078BF second pass, soot #1D1B16 text. Grain overlay, registration crosshairs, multiply overprint where inks meet. Display voice: Bricolage Grotesque; mono reserved for printer's marks.
STORY: the visitor flips through editions of shipped work, reads the press log of experience, and takes a copy (resume) home from the colophon.
FIRST VIEWPORT: full-viewport sheet; ANSHU / SARKAR set huge in two misregistered ink layers that breathe and follow the pointer; role line beneath; two stamped controls bottom-left; edition stamp bottom-right; skills ribbon along the fold.
FORM: riso-edition world, user-pinned (no roll). Seed key: riso-edition.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance. -->`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${hanken.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
        <TileField />
        <div aria-hidden className="grain" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
