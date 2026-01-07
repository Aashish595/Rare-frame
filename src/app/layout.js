import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import { inter } from "./fonts";

export const metadata = {
  title: "RAREFRAME",
  description: "RareFrame delivers high-end compositing and shot finishing for films and commercials, with a focus on realism, continuity, and cinematic quality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
