import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";

import "./globals.css";

const themeInitScript = `
  (function () {
    try {
      var savedTheme = localStorage.getItem("cloudstudy-theme");
      var systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var theme = savedTheme || (systemPrefersDark ? "dark" : "light");
      document.documentElement.dataset.theme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = "light";
    }
  })();
`;

const displayFont = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Certificloud | CloudStudy",
  description:
    "CloudStudy ajuda voce a passar na certificacao AWS com trilhas adaptativas, simulados inteligentes e tutor IA contextual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
