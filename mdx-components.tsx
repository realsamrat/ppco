import type { MDXComponents } from 'mdx/types'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <h1 className="font-heading text-4xl md:text-5xl text-forest mt-12 mb-6 leading-tight" {...props} />
    ),
    h2: (props) => (
      <h2 className="font-heading text-3xl text-forest mt-10 mb-4 leading-tight" {...props} />
    ),
    h3: (props) => (
      <h3 className="font-heading text-2xl text-forest mt-8 mb-3" {...props} />
    ),
    p: (props) => (
      <p className="font-body text-lg text-forest-light leading-relaxed mb-6" {...props} />
    ),
    strong: (props) => (
      <strong className="font-bold text-forest" {...props} />
    ),
    ul: (props) => (
      <ul className="font-body text-lg text-forest-light leading-relaxed mb-6 list-disc pl-6 space-y-2" {...props} />
    ),
    ol: (props) => (
      <ol className="font-body text-lg text-forest-light leading-relaxed mb-6 list-decimal pl-6 space-y-2" {...props} />
    ),
    li: (props) => (
      <li className="leading-relaxed" {...props} />
    ),
    blockquote: (props) => (
      <blockquote className="border-l-4 border-terracotta pl-6 italic text-forest-light my-8" {...props} />
    ),
    hr: () => (
      <hr className="border-driftwood my-12" />
    ),
    a: (props) => (
      <a className="text-terracotta hover:text-terracotta-dark underline underline-offset-2 transition-colors" {...props} />
    ),
  }
}

export const useMDXComponents = getMDXComponents
