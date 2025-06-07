import type { Metadata } from "next";
import { Space_Grotesk, Raleway } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chat Whiz",
  description: "Automating connections, driving results",
  keywords: [
    "automation",
    "bots",
    "digital transformation",
    "Chat Whiz",
    "AI",
    "chatbot"
  ],
  openGraph: {
    title: "Chat Whiz",
    description: "Automating connections, driving results",
    url: "https://chat-whiz.com",
    siteName: "Chat Whiz",
    images: [
      {
        url: "/icons/logo.ico",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: "index, follow",
  icons: {
    icon: "/icons/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}
