export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{
        fontSize: '4rem',
        fontWeight: 'bold',
        margin: 0,
        background: 'linear-gradient(to right, #ec4899, #f59e0b)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Hello World
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: '#6b7280',
        marginTop: '1rem'
      }}>
        Welcome to Next.js!
      </p>
    </main>
  )
}
