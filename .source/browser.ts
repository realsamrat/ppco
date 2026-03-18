// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blog: create.doc("blog", {"behind-scenes-portland-wedding/index.mdx": () => import("../content/behind-scenes-portland-wedding/index.mdx?collection=blog"), "best-portland-engagement-locations/index.mdx": () => import("../content/best-portland-engagement-locations/index.mdx?collection=blog"), "choosing-right-photography-package/index.mdx": () => import("../content/choosing-right-photography-package/index.mdx?collection=blog"), "family-photo-tips-kids/index.mdx": () => import("../content/family-photo-tips-kids/index.mdx?collection=blog"), "golden-hour-mt-hood-session/index.mdx": () => import("../content/golden-hour-mt-hood-session/index.mdx?collection=blog"), "natural-looking-headshots-tips/index.mdx": () => import("../content/natural-looking-headshots-tips/index.mdx?collection=blog"), "prepare-for-branding-session/index.mdx": () => import("../content/prepare-for-branding-session/index.mdx?collection=blog"), "gorge-engagement-session/index.mdx": () => import("../content/gorge-engagement-session/index.mdx?collection=blog"), "senior-portrait-trends-2024/index.mdx": () => import("../content/senior-portrait-trends-2024/index.mdx?collection=blog"), "what-to-wear-fall-edition/index.mdx": () => import("../content/what-to-wear-fall-edition/index.mdx?collection=blog"), "value-of-professional-photography/index.mdx": () => import("../content/value-of-professional-photography/index.mdx?collection=blog"), "why-rain-is-great-for-photos/index.mdx": () => import("../content/why-rain-is-great-for-photos/index.mdx?collection=blog"), }),
};
export default browserCollections;