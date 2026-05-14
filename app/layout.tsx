import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shahzaib Soomro | Professional Video Editor",
  description: "Portfolio website for Shahzaib Soomro, professional video editor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
