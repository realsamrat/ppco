import { ImageResponse } from 'next/og'
import { source } from '../../../lib/source'

export async function generateStaticParams() {
  return source.getPages().map((page) => ({ slug: page.slugs[0] }))
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const page = source.getPage([slug])

  const title = page?.data.title ?? 'Portland Picture Company'
  const category = page?.data.category ?? 'Photography'

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FAF9F7',
          padding: '80px',
          justifyContent: 'space-between',
        }}
      >
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#C4705B',
            }}
          />
          <span
            style={{
              fontFamily: 'sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#C4705B',
            }}
          >
            {category}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '900px',
          }}
        >
          <div
            style={{
              fontFamily: 'serif',
              fontSize: title.length > 40 ? '64px' : '76px',
              fontWeight: 500,
              lineHeight: 1.1,
              color: '#161613',
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom: branding */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '2px',
                backgroundColor: '#C4705B',
              }}
            />
            <span
              style={{
                fontFamily: 'sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#2D3E36',
              }}
            >
              Portland Picture Company
            </span>
          </div>
          <span
            style={{
              fontFamily: 'sans-serif',
              fontSize: '14px',
              color: '#757575',
              letterSpacing: '1px',
            }}
          >
            portlandpictureco.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
