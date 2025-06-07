import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
import Head from "next/head";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Chat Whiz",
  description: "Automation, bots, digital transformation, Chat Whiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Chat Whiz</title>
        <meta name="description" content="Automating connections, driving results" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="automation, bots, digital transformation, Chat Whiz" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <body className={`${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
