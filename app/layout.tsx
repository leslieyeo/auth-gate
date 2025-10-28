import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'adhdai',
  description: 'Created with 心灵疗愈',
  generator: '心灵疗愈.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={GeistSans.variable}>
      <body className={`${GeistSans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
