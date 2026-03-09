import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anthropic AI Skills -- Professional Training Resources',
  description: 'The professional resource for teams adopting Anthropic AI. Guides, use cases, and implementation playbooks.',
  openGraph: {
    title: 'Anthropic AI Skills -- Professional Training Resources',
    description: 'The professional resource for teams adopting Anthropic AI. Guides, use cases, and implementation playbooks.',
    url: 'https://anthropicaiskills.com',
    siteName: 'Anthropic AI Skills',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthropic AI Skills -- Professional Training Resources',
    description: 'The professional resource for teams adopting Anthropic AI. Guides, use cases, and implementation playbooks.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: '#0A0A0F', color: '#FAFAF8' }}>
        {children}
      </body>
    </html>
  )
}
