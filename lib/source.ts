import { blog } from 'fumadocs/server'
import { loader } from 'fumadocs-core/source'

export const source = loader({
  baseUrl: '/blog',
  source: blog.toFumadocsSource(),
})
