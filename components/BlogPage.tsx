import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { SEO } from './SEO';
import { BreadcrumbJsonLd } from './JsonLd';
import { PAGE_SEO } from '../seo.config';

export const BlogPage: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO
                title={PAGE_SEO.blog.title}
                description={PAGE_SEO.blog.description}
                keywords={PAGE_SEO.blog.keywords}
                url="/blog"
            />
            <BreadcrumbJsonLd
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Blog', url: '/blog' }
                ]}
            />

            {/* Hero */}
            <section className="pt-48 pb-32 bg-linen text-center px-6">
                <h1 className="font-heading text-5xl md:text-6xl text-forest mb-6">The Journal</h1>
                <p className="font-body text-lg text-forest-light max-w-2xl mx-auto leading-relaxed">
                    Stories, tips, and inspiration from our photography adventures. Explore our latest posts on everything from styling advice to featured sessions.
                </p>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-[1290px]">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post, i) => (
                            <Link key={i} to={`/blog/${post.slug}`} className="group cursor-pointer flex flex-col h-full">
                                <div className="aspect-[3/2] overflow-hidden mb-6 bg-stone">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <span className="font-nav text-xs font-bold uppercase tracking-widest text-terracotta mb-3 block">
                                    {post.category}
                                </span>
                                <h3 className="font-heading text-2xl text-forest mb-3 group-hover:text-terracotta transition-colors">
                                    {post.title}
                                </h3>
                                <p className="font-body text-forest-light text-sm leading-relaxed mb-4 flex-grow">
                                    {post.excerpt}
                                </p>
                                <span className="font-nav text-xs text-sage">{post.date}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
