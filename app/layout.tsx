import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Vinit Pithadiya - Full Stack Web3 Developer",
  description: "Portfolio of Vinit Pithadiya, a Full Stack Web3 Developer specializing in DeFi, DAOs, and blockchain technologies.",
  keywords: ["Web3", "Blockchain", "Full Stack Developer", "DeFi", "DAO", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased noise-bg">
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
