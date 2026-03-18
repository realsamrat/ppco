import { blog } from 'fumadocs/server'
import { loader, type InferPageType } from 'fumadocs-core/source'

export const source = loader({
  baseUrl: '/blog',
  source: blog.toFumadocsSource(),
})

export type Page = NonNullable<ReturnType<typeof source.getPage>>

export function getPageOgImage(page: InferPageType<typeof source>) {
  return `/open-graph/${page.slugs[0]}`
}
