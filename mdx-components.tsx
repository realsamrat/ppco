import type { MDXComponents } from 'mdx/types'
import { BlogCTA } from './components/BlogCTA'
import MediaPlayer from './components/MediaPlayer'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <h1 className="font-heading text-4xl md:text-5xl text-forest mt-12 mb-6 leading-tight tracking-[-0.022em]" {...props} />
    ),
    h2: (props) => (
      <h2 style={{ fontSize: '34px', lineHeight: 1.25, letterSpacing: '-0.012em', marginTop: '3.5rem', marginBottom: '1rem' }} className="font-heading text-forest" {...props} />
    ),
    h3: (props) => (
      <h3 style={{ fontSize: '28px', lineHeight: 1.3, letterSpacing: '-0.012em', marginTop: '3.5rem', marginBottom: '0.75rem' }} className="font-heading text-forest" {...props} />
    ),
    p: (props) => (
      <p className="text-[17px] font-[510] text-forest-light leading-[1.6] tracking-[0] mb-5 md:mb-8 max-md:text-[15px] max-md:tracking-[-0.011em]" {...props} />
    ),
    strong: (props) => (
      <strong className="font-[680] text-forest" {...props} />
    ),
    ul: (props) => (
      <ul className="text-[17px] font-[510] text-forest-light leading-[1.6] mb-8 list-disc pl-6 space-y-2 max-md:text-[15px] max-md:tracking-[-0.011em]" {...props} />
    ),
    ol: (props) => (
      <ol className="text-[17px] font-[510] text-forest-light leading-[1.6] mb-8 list-decimal pl-6 space-y-2 max-md:text-[15px] max-md:tracking-[-0.011em]" {...props} />
    ),
    li: (props) => (
      <li className="leading-[1.6]" {...props} />
    ),
    blockquote: (props) => (
      <figure className="my-8">
        <blockquote className="text-[24px] font-[590] leading-[1.33] tracking-[-0.012em] text-forest" {...props} />
      </figure>
    ),
    hr: () => (
      <hr className="border-driftwood my-12" />
    ),
    a: (props) => (
      <a className="text-terracotta hover:text-terracotta-dark underline underline-offset-2 transition-colors" {...props} />
    ),
    BlogCTA,
    MediaPlayer: (props: React.ComponentProps<typeof MediaPlayer>) => <MediaPlayer {...props} compact />,
  }
}

export const useMDXComponents = getMDXComponents
