import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Churn Predictor — Stop Losing Subscribers',
  description: 'Predict which Stripe subscribers are about to cancel and take action before it is too late. AI-powered churn scoring for SaaS founders.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="802ec179-f794-49d1-ade9-d230bb94a2b4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
