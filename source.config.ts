import { defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config'
import { z } from 'zod'

export const blog = defineDocs({
  dir: 'content',
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string(),
      description: z.string(),
      category: z.string(),
      image: z.string().optional(),
      video: z.string().optional(),
      author: z.string().default('Portland Picture Company'),
      keywords: z.array(z.string()).optional(),
    }),
  },
  meta: {},
})

export default defineConfig({
  mdxOptions: {
    providerImportSource: '@/mdx-components',
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
})
