import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import { inter } from "./fonts";

export const metadata = {
  title: "VFX Artist Portfolio",
  description: "Cinematic VFX & 3D Motion Artist",
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
