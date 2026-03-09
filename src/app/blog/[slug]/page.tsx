import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '../data'

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.seoTitle,
    description: post.seoDescription,
  }
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FAFAF8', marginTop: '2.5rem', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} style={{ color: '#FAFAF8', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.7 }}>
          {line.slice(2, -2)}
        </p>
      )
    } else if (line.startsWith('```')) {
      const lang = line.slice(3)
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <pre key={i} style={{
          background: 'rgba(0,0,0,0.4)',
          border: '1px solid rgba(250,250,248,0.1)',
          borderRadius: 10,
          padding: '1.25rem 1.5rem',
          overflowX: 'auto',
          fontSize: '0.85rem',
          lineHeight: 1.6,
          margin: '1.5rem 0',
          color: '#A5D6A7',
        }}>
          <code>{codeLines.join('\n')}</code>
        </pre>
      )
    } else if (line.startsWith('- ')) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={i} style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
          {listItems.map((item, idx) => (
            <li key={idx} style={{ color: 'rgba(250,250,248,0.75)', lineHeight: 1.7, marginBottom: '0.35rem' }}>
              {item}
            </li>
          ))}
        </ul>
      )
      continue
    } else if (line.trim() === '') {
      // skip blank lines
    } else {
      // Regular paragraph -- handle inline markdown
      const rendered = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/`(.*?)`/g, '<code style="background:rgba(0,0,0,0.3);padding:0.15rem 0.4rem;border-radius:4px;font-size:0.875em;color:#A5D6A7">$1</code>')
        .replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" style="color:#00C896;text-decoration:none;font-weight:600">$1</a>')

      elements.push(
        <p key={i} dangerouslySetInnerHTML={{ __html: rendered }} style={{ color: 'rgba(250,250,248,0.75)', lineHeight: 1.8, marginBottom: '1.25rem' }} />
      )
    }
    i++
  }
  return elements
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3)

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

      {/* Breadcrumb */}
      <div style={{ padding: '1.25rem 2rem', maxWidth: 800, margin: '0 auto' }}>
        <p style={{ color: 'rgba(250,250,248,0.4)', fontSize: '0.875rem', margin: 0 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          {' / '}
          <Link href="/blog" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Blog</Link>
          {' / '}
          <span style={{ color: 'rgba(250,250,248,0.65)' }}>{post.category}</span>
        </p>
      </div>

      {/* Article */}
      <article style={{ maxWidth: 800, margin: '0 auto', padding: '0 2rem 4rem' }}>
        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <span style={{
            background: 'rgba(29,78,216,0.15)',
            border: '1px solid rgba(29,78,216,0.3)',
            color: '#60A5FA',
            fontSize: '0.75rem',
            fontWeight: 600,
            padding: '0.25rem 0.6rem',
            borderRadius: 6,
          }}>
            {post.category}
          </span>
          <span style={{ color: 'rgba(250,250,248,0.4)', fontSize: '0.875rem' }}>
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          <span style={{ color: 'rgba(250,250,248,0.4)', fontSize: '0.875rem' }}>{post.readTime}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.03em', color: '#FAFAF8' }}>
          {post.title}
        </h1>

        <p style={{ fontSize: '1.15rem', color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(250,250,248,0.08)' }}>
          {post.excerpt}
        </p>

        {/* Content */}
        <div>
          {renderContent(post.content)}
        </div>
      </article>

      {/* CTA Block */}
      <section style={{ background: 'rgba(0,200,150,0.06)', border: '1px solid rgba(0,200,150,0.2)', borderRadius: 16, margin: '0 2rem 4rem', maxWidth: 760, marginLeft: 'auto', marginRight: 'auto', padding: '2.5rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', color: '#FAFAF8', letterSpacing: '-0.02em' }}>
          Ready to deploy Anthropic AI in your business?
        </h2>
        <p style={{ color: 'rgba(250,250,248,0.6)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
          Book a free 30-minute consultation. We will help you find the right implementation path.
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
      </section>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '0 2rem 5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#FAFAF8' }}>More Articles</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {otherPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(250,250,248,0.04)',
                  border: '1px solid rgba(250,250,248,0.08)',
                  borderRadius: 10,
                  padding: '1rem 1.25rem',
                  textDecoration: 'none',
                  gap: '1rem',
                }}
              >
                <div>
                  <p style={{ color: '#FAFAF8', fontWeight: 600, margin: '0 0 0.25rem', fontSize: '0.95rem' }}>{related.title}</p>
                  <p style={{ color: 'rgba(250,250,248,0.4)', fontSize: '0.8rem', margin: 0 }}>{related.category} &bull; {related.readTime}</p>
                </div>
                <span style={{ color: '#00C896', fontSize: '1.1rem', flexShrink: 0 }}>&rarr;</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(250,250,248,0.08)', padding: '2rem', textAlign: 'center', color: 'rgba(250,250,248,0.4)', fontSize: '0.875rem' }}>
        <p style={{ margin: 0 }}>2026 Anthropic AI Skills. Independent training resource. Not affiliated with Anthropic PBC.</p>
      </footer>
    </main>
  )
}
