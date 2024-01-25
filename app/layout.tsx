import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
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
      <body id="page-top">{children}</body>
    </html>
  );
}
