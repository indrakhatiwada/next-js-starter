import type { Metadata } from "next";

import Providers from "@/components/providers";
import "./globals.css";


export const metadata: Metadata = {
  title: "Nextjs starter",
  description: "By indra Khatiwada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"></link>
      <body
        
      >
       <Providers>
        {children}
       </Providers>
      </body>
    </html>
  );
}
