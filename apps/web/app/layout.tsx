import "../globals.css";
import type { ReactNode } from "react";

import { SiteNav } from "../components/site/nav";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-black antialiased">
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
