import "../globals.css";
import type { ReactNode } from "react";

import { SmoothScroll } from "../components/site/smooth-scroll";
import { SiteNav } from "../components/site/nav";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-black antialiased">
        <SmoothScroll>
          <SiteNav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
