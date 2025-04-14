import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900", 
});


export const metadata: Metadata = {
  title: {
    default: "InterviewPro AI",
    template: "%s | InterviewPro AI"
  },
  description: "Practice interviews with AI-powered feedback and coaching",
  keywords: ["interview practice", "AI interview", "mock interview"],
  authors: [{ name: "Piyush Ghanghav", url: "https://www.linkedin.com/in/piyush-ghanghav/" }],
  // viewport: "width=device-width, initial-scale=1",
  // themeColor: "#ffffff"
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
        <ClerkProvider>    
          <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} antialiased`}>
              <main className="min-h-screen flex flex-col">
                <Toaster position="top-center" />
                {children}
              </main>
            </body>
          </html>
        </ClerkProvider>
  );
}
