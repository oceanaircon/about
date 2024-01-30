import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Script from "next/script";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oliver Thek",
  description: "About",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Head>
        <Script type="text/javascript" src="../../public/scripts.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></Script>
      </Head>
      <body id="page-top">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
