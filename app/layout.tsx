import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar  } from "@/components/ui/app-sidebar"

import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});
const calFont = localFont({
  src: "../styles/CalSans-SemiBold.woff2",
  variable: "--font-cal",
  preload: true,
  display: "swap",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body className={`h-full bg-background ${inter.variable} ${calFont.variable} font-sans antialiased`}>
        <div className="flex h-screen flex-col">
          <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </div>
      </body>
    </html>
  )
}