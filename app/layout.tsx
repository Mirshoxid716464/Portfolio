import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navigation, MobileNavigation } from "@/components/navigation"
import { WorkTogetherButton } from "@/components/work-together-button"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Portfolio - IT Management Student",
  description: "Professional portfolio showcasing projects, education, and skills",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <MobileNavigation />
          <main className="min-h-screen">{children}</main>
          <WorkTogetherButton />
        </Suspense>
      </body>
    </html>
  )
}
