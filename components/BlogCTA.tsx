import Link from 'next/link'

interface BlogCTAProps {
  heading?: string
  body?: string
  label?: string
  href?: string
}

export const BlogCTA: React.FC<BlogCTAProps> = ({
  heading = 'Ready to book your session?',
  body = 'Portland Picture Company works with clients across the Pacific Northwest year-round. Spots fill up fast — reach out early to lock in your date.',
  label = 'Get in Touch',
  href = '/contact',
}) => {
  return (
    <div className="my-12 not-prose">
      <div className="bg-linen border border-stone px-8 py-10">
        <div className="flex flex-col gap-6">
          <div className="flex-1">
            <p className="font-nav text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
              Portland Picture Company
            </p>
            <h3 className="font-heading text-2xl md:text-3xl text-forest mb-3 leading-tight">
              {heading}
            </h3>
            <p className="font-body text-forest-light leading-relaxed text-base">
              {body}
            </p>
          </div>
          <div>
            <Link
              href={href}
              className="inline-flex items-center gap-3 bg-terracotta text-warmWhite font-nav text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-terracotta-dark transition-colors"
            >
              {label}
              <span className="text-base">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
