import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Igor Marinho - Portfolio',
  description: 'Igor Marinho - Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
