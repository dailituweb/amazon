export const metadata = {
  title: 'LaunchFast - Amazon FBA Product Research',
  description: 'Find your next Amazon winner with market analysis, profit validation, and supplier connections.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}

