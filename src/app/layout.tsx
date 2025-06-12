import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gabriel Morishita - Full Stack Developer",
  description:
    "Gabriel Morishita is a Full Stack Developer with expertise in building modern web applications. Explore my portfolio to see my projects and skills.",
  keywords:
    "Gabriel Morishita, Full Stack Developer, Software Engineer, Web Developer, Portfolio",
  authors: [{ name: "Gabriel Morishita" }],
  openGraph: {
    title: "Gabriel Morishita - Full Stack Developer",
    description:
      "Gabriel Morishita is a Full Stack Developer with expertise in building modern web applications. Explore my portfolio to see my projects and skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
