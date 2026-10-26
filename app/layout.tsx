import type { Metadata } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: '--font-fraunces',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.outinasia.com'),
  title: 'Gay Group Tours in Asia & Private Trips | Out in Asia',
description: 'Discover gay group tours and bespoke private trips across Southeast Asia with Out in Asia. Explore Bali, Thailand, Vietnam and more with expert guides.',
  verification: {
  google: 'zHWIfFlcCM-8SJl83A2XFMg5Hzxs04bH6BtFwFvQP0s',
},
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen">
        {/* forcedTheme="light" locks the site to light mode — no dark mode toggle exists in the UI */}
        <ThemeProvider attribute="class" forcedTheme="light">
          <div className="pb-32 md:pb-0">
            {children}
          </div>
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
