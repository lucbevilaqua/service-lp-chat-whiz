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
  title: "Chat Whiz | Intelligent Automation & AI Bots for Business",
  description:
    "Chat Whiz is a leader in process automation and intelligent bots for business. We deliver AI-powered chatbots for WhatsApp, Salesforce, CRMs, ERPs, and more. Automate support, sales, and operations with secure, scalable, and integrated solutions.",
  keywords: [
    "automation",
    "process automation",
    "business automation",
    "intelligent bots",
    "AI bots",
    "chatbot",
    "WhatsApp bot",
    "Salesforce integration",
    "CRM automation",
    "ERP integration",
    "customer support automation",
    "lead generation",
    "digital transformation",
    "Chat Whiz",
    "artificial intelligence",
    "machine learning",
    "conversational AI",
    "support bot",
    "business chatbot",
    "integrated bots",
    "workflow automation",
    "customer service automation",
    "enterprise automation",
    "RPA",
    "automated sales",
    "automated support",
    "API integration",
    "messaging automation",
    "Facebook Messenger bot",
    "Instagram bot",
    "Telegram bot",
    "omnichannel automation",
    "B2B automation",
    "SaaS automation",
    "cloud automation",
    "secure automation",
    "scalable automation",
    "24/7 support bot",
    "lead qualification bot",
    "digital assistant",
    "virtual agent"
  ],
  openGraph: {
    title: "Chat Whiz | Intelligent Automation & AI Bots for Business",
    description:
      "Automate your business with Chat Whiz. We build AI-powered bots for WhatsApp, Salesforce, CRMs, ERPs, and more. Boost support, sales, and operations with secure, scalable automation.",
    url: "https://chat-whiz.com",
    siteName: "Chat Whiz",
    images: [
      {
        url: "/icons/logo.ico",
        width: 800,
        height: 600,
        alt: "Chat Whiz - Automation and AI Bots",
      },
      {
        url: "/images/og-banner-2.jpg",
        width: 1200,
        height: 630,
        alt: "Chat Whiz - Intelligent Automation for Business",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@chatwhiz",
    title: "Chat Whiz | Intelligent Automation & AI Bots for Business",
    description:
      "Automate your business with Chat Whiz. AI-powered bots for WhatsApp, Salesforce, CRMs, ERPs, and more. Boost support, sales, and operations.",
    images: ["/images/og-banner.jpg"],
    creator: "@chatwhiz",
  },
  alternates: {
    canonical: "https://chat-whiz.com",
    languages: {
      "en-US": "https://chat-whiz.com",
      "pt-BR": "https://chat-whiz.com",
    },
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  icons: {
    icon: "/icons/logo.ico",
    shortcut: "/icons/logo.ico",
    apple: "/icons/logo.ico",
  },
  metadataBase: new URL("https://chat-whiz.com"),
  authors: [
    { name: "Chat Whiz", url: "https://chat-whiz.com" },
    { name: "Lucas Bevilaqua" },
  ],
  publisher: "Chat Whiz",
  creator: "Chat Whiz",
  category: "Business, Automation, AI, SaaS",
  applicationName: "Chat Whiz",
  generator: "Next.js",
  verification: {
    google: "G-XXXXXXXXXX", // Substitua pelo seu Google Search Console ID
  },
  // Social profiles for Google Knowledge Panel
  // other: {
  //   "profile:facebook": "https://facebook.com/chatwhiz",
  //   "profile:instagram": "https://instagram.com/chatwhiz",
  //   "profile:linkedin": "https://linkedin.com/company/chatwhiz",
  //   "profile:twitter": "https://twitter.com/chatwhiz",
  //   "profile:youtube": "https://youtube.com/@chatwhiz",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${raleway.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
