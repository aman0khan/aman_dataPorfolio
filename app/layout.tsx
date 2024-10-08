import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
// import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aman Khan - Data Analyst",
  description:
    "Data Analyst with Some great problem solving Skills and some Frontend.",
  generator: "Next.js",
  applicationName: "Victor Williams",
  keywords: [
    "freelance",
    "Data Analyst",
    "freelance developer",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Aman Khan - Data Analyst",
    description:
      "Data Analyst with Some great problem solving Skills and Some Frontend.",
    images: [
      {
        url: "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
        width: 1200,
        height: 630,
        alt: "Aman Khan - Data Analyst",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Khan - Data Analyst",
    description:
      "Data Analyst with Some great problem solving Skills and Some Frontend.",
    // creator: "victorwill__",
    // creatorId: "1243720976552144897",
    // images: [
    //   "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
    // ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
