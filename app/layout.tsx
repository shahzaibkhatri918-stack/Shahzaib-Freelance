import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shahzaib Soomro | Professional Video Editor",
  description: "Official portfolio of Shahzaib Soomro, professional video editor for talking head videos, VSL, Facebook ads, podcasts, reels and corporate videos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
