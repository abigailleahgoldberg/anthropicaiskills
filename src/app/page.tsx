'use client'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(232,89,12,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #E8590C, #1D4ED8)', borderRadius: 8 }} />
          <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#FAFAF8', letterSpacing: '-0.02em' }}>Anthropic AI Skills</span>
        </div>
        <a href="#notify" style={{ background: '#E8590C', color: '#FAFAF8', padding: '0.5rem 1.25rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
          Get Early Access
        </a>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '6rem 2rem 4rem', maxWidth: 800, margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: 'rgba(232,89,12,0.12)', border: '1px solid rgba(232,89,12,0.35)', borderRadius: 100, padding: '0.4rem 1rem', marginBottom: '2rem', fontSize: '0.85rem', color: '#E8590C', fontWeight: 600, letterSpacing: '0.05em' }}>
          PROFESSIONAL AI TRAINING
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em', color: '#FAFAF8' }}>
          Master Anthropic AI<br />
          <span style={{ background: 'linear-gradient(135deg, #E8590C, #1D4ED8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>for Your Business</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'rgba(250,250,248,0.7)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 560, margin: '0 auto 2.5rem' }}>
          The professional resource for teams adopting Anthropic AI. Guides, use cases, and implementation playbooks.
        </p>
        <a href="#notify" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #E8590C, #C2410C)', color: '#FAFAF8', padding: '1rem 2.5rem', borderRadius: 12, textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 8px 32px rgba(232,89,12,0.35)' }}>
          Browse Resources
        </a>
      </section>

      {/* Stats Bar */}
      <section style={{ borderTop: '1px solid rgba(250,250,248,0.06)', borderBottom: '1px solid rgba(250,250,248,0.06)', padding: '2rem', display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
        {[
          { value: '500+', label: 'Use Cases' },
          { value: '50+', label: 'Playbooks' },
          { value: '10k+', label: 'Professionals' },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#E8590C', letterSpacing: '-0.03em' }}>{stat.value}</div>
            <div style={{ color: 'rgba(250,250,248,0.5)', fontSize: '0.9rem', marginTop: '0.25rem' }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Feature Cards */}
      <section style={{ padding: '5rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800, marginBottom: '3rem', color: '#FAFAF8', letterSpacing: '-0.02em' }}>
          Everything your team needs to adopt AI
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              number: '01',
              title: 'Enterprise Use Cases',
              desc: 'Browse 500+ real-world applications of Anthropic AI across industries including finance, healthcare, legal, and operations.',
              accent: '#E8590C',
            },
            {
              number: '02',
              title: 'Implementation Guides',
              desc: 'Step-by-step playbooks for deploying Anthropic AI safely and effectively within your organization\'s existing systems.',
              accent: '#1D4ED8',
            },
            {
              number: '03',
              title: 'Team Training',
              desc: 'Structured learning paths and workshops to upskill your entire team on AI tools, best practices, and responsible use.',
              accent: '#E8590C',
            },
          ].map((card) => (
            <div key={card.title} style={{ background: 'rgba(250,250,248,0.04)', border: '1px solid rgba(250,250,248,0.08)', borderRadius: 16, padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: `${card.accent}18`, position: 'absolute', top: '1rem', right: '1.5rem', letterSpacing: '-0.05em', lineHeight: 1 }}>
                {card.number}
              </div>
              <div style={{ width: 4, height: 40, background: card.accent, borderRadius: 2, marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: '#FAFAF8' }}>{card.title}</h3>
              <p style={{ color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section id="notify" style={{ padding: '4rem 2rem 6rem', textAlign: 'center', background: 'rgba(232,89,12,0.04)' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', color: '#FAFAF8' }}>
            Get notified when we launch
          </h2>
          <p style={{ color: 'rgba(250,250,248,0.6)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Join professionals who are getting ready to master Anthropic AI.
          </p>
          {submitted ? (
            <div style={{ background: 'rgba(29,78,216,0.15)', border: '1px solid rgba(29,78,216,0.4)', borderRadius: 12, padding: '1rem', color: '#60A5FA', fontWeight: 600 }}>
              You're on the list. We'll reach out soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email address"
                required
                style={{ flex: '1 1 240px', padding: '0.875rem 1.25rem', borderRadius: 10, border: '1px solid rgba(250,250,248,0.15)', background: 'rgba(250,250,248,0.06)', color: '#FAFAF8', fontSize: '1rem', outline: 'none' }}
              />
              <button type="submit" style={{ padding: '0.875rem 1.75rem', background: '#E8590C', color: '#FAFAF8', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
                Notify Me
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(250,250,248,0.08)', padding: '2rem', textAlign: 'center', color: 'rgba(250,250,248,0.4)', fontSize: '0.875rem' }}>
        <p style={{ margin: 0 }}>2026 Anthropic AI Skills. Independent training resource. Not affiliated with Anthropic PBC.</p>
      </footer>
    </main>
  )
}
