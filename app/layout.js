import './globals.css'

export const metadata = {
  title: 'Next.js Hello World',
  description: 'A simple Next.js hello world application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
