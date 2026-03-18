import React from 'react';

interface Review {
    author: string;
    rating: number;
    text: string;
    date: string;
}

const REVIEWS: Review[] = [
    {
        author: 'Jennifer Martinez',
        rating: 5,
        text: 'Absolutely phenomenal experience! The team made us feel so comfortable and the photos turned out stunning.',
        date: '2 weeks ago'
    },
    {
        author: 'Michael Chen',
        rating: 5,
        text: 'Professional, creative, and a joy to work with. Our corporate headshots exceeded expectations.',
        date: '1 month ago'
    },
    {
        author: 'Sarah Thompson',
        rating: 5,
        text: 'Best photography studio in Portland! They captured our wedding day perfectly.',
        date: '3 weeks ago'
    },
    {
        author: 'David Rodriguez',
        rating: 5,
        text: 'Incredible attention to detail and artistic vision. Highly recommend for any photography needs.',
        date: '1 week ago'
    },
    {
        author: 'Emily Wilson',
        rating: 5,
        text: 'The team was amazing with our family, especially the kids. Photos are beautiful!',
        date: '2 months ago'
    },
    {
        author: 'James Anderson',
        rating: 5,
        text: 'Top-notch service and stunning results. Will definitely be returning for future sessions.',
        date: '3 weeks ago'
    }
];

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
            <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

export const GoogleReviews: React.FC = () => {
    return (
        <section className="py-8 bg-warmWhite border-y border-driftwood overflow-hidden">
            <div className="flex gap-6 animate-scroll">
                {/* Duplicate reviews for seamless loop */}
                {[...REVIEWS, ...REVIEWS].map((review, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 w-[350px] bg-white p-5 shadow-sm border border-stone"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <GoogleIcon />
                                <span className="font-nav text-xs font-semibold text-forest">Google Review</span>
                            </div>
                            <StarRating rating={review.rating} />
                        </div>
                        <p className="font-body text-sm text-forest-light mb-3 line-clamp-2">
                            "{review.text}"
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="font-nav text-xs font-medium text-forest">{review.author}</span>
                            <span className="font-nav text-xs text-sage">{review.date}</span>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};
