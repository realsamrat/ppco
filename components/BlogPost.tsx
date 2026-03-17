import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Button } from './Button';
import { SEO } from './SEO';
import { BlogPostJsonLd, BreadcrumbJsonLd } from './JsonLd';

export const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-heading text-4xl text-forest mb-4">Post Not Found</h1>
                    <Link to="/blog">
                        <Button variant="primary">Back to Blog</Button>
                    </Link>
                </div>
            </div>
        );
    }

    // Get 3 related posts (same category or random)
    const relatedPosts = BLOG_POSTS
        .filter(p => p.slug !== post.slug && p.category === post.category)
        .slice(0, 3);

    // If not enough related posts, fill with other posts
    if (relatedPosts.length < 3) {
        const otherPosts = BLOG_POSTS
            .filter(p => p.slug !== post.slug && !relatedPosts.includes(p))
            .slice(0, 3 - relatedPosts.length);
        relatedPosts.push(...otherPosts);
    }

    // Convert date string to ISO format for structured data
    const dateISO = new Date(post.date).toISOString();

    return (
        <div className="bg-white">
            <SEO
                title={`${post.title} | Portland Picture Co. Blog`}
                description={post.excerpt}
                keywords={`${post.category.toLowerCase()}, photography tips, portland photographer, ${post.title.toLowerCase()}`}
                url={`/blog/${post.slug}`}
                image={post.image}
                type="article"
                publishedTime={dateISO}
                section={post.category}
            />
            <BlogPostJsonLd
                title={post.title}
                description={post.excerpt}
                image={post.image}
                datePublished={dateISO}
                url={`/blog/${post.slug}`}
            />
            <BreadcrumbJsonLd
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Blog', url: '/blog' },
                    { name: post.title, url: `/blog/${post.slug}` }
                ]}
            />

            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/50 to-forest/70"></div>
                </div>
                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <span className="font-nav text-xs font-bold uppercase tracking-widest text-terracotta mb-4 block">
                        {post.category}
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl text-warmWhite mb-4 drop-shadow-lg">{post.title}</h1>
                    <p className="font-nav text-sm text-warmWhite/90 drop-shadow-md">{post.date}</p>
                </div>
            </section>

            {/* Content Section */}
            <article className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="prose prose-lg max-w-none">
                        {post.content.split('\n\n').map((paragraph, i) => (
                            <p key={i} className="font-body text-lg text-forest-light leading-relaxed mb-6">
                                {paragraph.split('**').map((part, j) =>
                                    j % 2 === 0 ? part : <strong key={j} className="font-bold text-forest">{part}</strong>
                                )}
                            </p>
                        ))}
                    </div>

                    {/* Back to Blog */}
                    <div className="mt-16 pt-8 border-t border-driftwood">
                        <Link to="/blog">
                            <Button variant="secondary">← Back to All Posts</Button>
                        </Link>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-24 bg-linen">
                    <div className="container mx-auto px-6 max-w-[1290px]">
                        <h2 className="font-heading text-3xl md:text-4xl text-forest mb-12 text-center">Related Posts</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost, i) => (
                                <Link key={i} to={`/blog/${relatedPost.slug}`} className="group cursor-pointer flex flex-col h-full">
                                    <div className="aspect-[3/2] overflow-hidden mb-6 bg-stone">
                                        <img
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <span className="font-nav text-xs font-bold uppercase tracking-widest text-terracotta mb-3 block">
                                        {relatedPost.category}
                                    </span>
                                    <h3 className="font-heading text-2xl text-forest mb-3 group-hover:text-terracotta transition-colors">
                                        {relatedPost.title}
                                    </h3>
                                    <p className="font-body text-forest-light text-sm leading-relaxed mb-4 flex-grow">
                                        {relatedPost.excerpt}
                                    </p>
                                    <span className="font-nav text-xs text-sage">{relatedPost.date}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};
