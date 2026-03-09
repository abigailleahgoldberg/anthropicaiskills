import Link from 'next/link'
import { posts } from './data'

export const metadata = {
  title: 'Blog | Anthropic AI Skills',
  description: 'Guides, comparisons, and practical advice on using Anthropic Claude for business and development.',
}

export default function BlogPage() {
  return (
    <main style={{ background: '#07090F', minHeight: '100vh', color: '#FAFAF8' }}>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(232,89,12,0.2)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #E8590C, #1D4ED8)', borderRadius: 8 }} />
          <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#FAFAF8', letterSpacing: '-0.02em' }}>Anthropic AI Skills</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/blog" style={{ color: '#00C896', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Blog</Link>
          <a href="https://thevoiceofcash.com/consultation" style={{ background: '#E8590C', color: '#FAFAF8', padding: '0.5rem 1.25rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            Get Early Access
          </a>
        </div>
      </nav>

      {/* Header */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem 3rem', maxWidth: 800, margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.3)', borderRadius: 100, padding: '0.4rem 1rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: '#00C896', fontWeight: 600, letterSpacing: '0.05em' }}>
          ANTHROPIC AI BLOG
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.03em', color: '#FAFAF8' }}>
          Guides on Anthropic AI
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>
          Practical articles on using Claude, the Anthropic API, and AI safety for business.
        </p>
      </section>

      {/* Post Grid */}
      <section style={{ padding: '1rem 2rem 5rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {posts.map((post) => (
            <article
              key={post.slug}
              style={{
                background: 'rgba(250,250,248,0.04)',
                border: '1px solid rgba(250,250,248,0.08)',
                borderRadius: 16,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                transition: 'border-color 0.2s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{
                  background: 'rgba(29,78,216,0.15)',
                  border: '1px solid rgba(29,78,216,0.3)',
                  color: '#60A5FA',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.6rem',
                  borderRadius: 6,
                  letterSpacing: '0.03em',
                }}>
                  {post.category}
                </span>
                <span style={{ color: 'rgba(250,250,248,0.4)', fontSize: '0.8rem' }}>{post.readTime}</span>
              </div>

              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FAFAF8', lineHeight: 1.4, margin: 0 }}>
                {post.title}
              </h2>

              <p style={{ color: 'rgba(250,250,248,0.6)', lineHeight: 1.6, fontSize: '0.9rem', margin: 0, flex: 1 }}>
                {post.excerpt}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                <span style={{ color: 'rgba(250,250,248,0.35)', fontSize: '0.8rem' }}>
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    color: '#00C896',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                >
                  Read more &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'rgba(29,78,216,0.08)', borderTop: '1px solid rgba(29,78,216,0.2)', borderBottom: '1px solid rgba(29,78,216,0.2)', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: '#FAFAF8', letterSpacing: '-0.02em' }}>
            Ready to deploy Anthropic AI?
          </h2>
          <p style={{ color: 'rgba(250,250,248,0.6)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Talk to an expert about implementing Claude in your business. Free 30-minute consultation.
          </p>
          <a
            href="https://thevoiceofcash.com/consultation"
            style={{
              display: 'inline-block',
              background: '#00C896',
              color: '#07090F',
              padding: '0.875rem 2rem',
              borderRadius: 10,
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
            }}
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(250,250,248,0.08)', padding: '2rem', textAlign: 'center', color: 'rgba(250,250,248,0.4)', fontSize: '0.875rem' }}>
        <p style={{ margin: 0 }}>2026 Anthropic AI Skills. Independent training resource. Not affiliated with Anthropic PBC.</p>
      </footer>
    </main>
  )
}
