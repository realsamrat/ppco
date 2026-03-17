import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { SEO } from './SEO';

export const NotFoundPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen flex items-center justify-center">
            <SEO
                title="Page Not Found | Portland Picture Co."
                description="The page you're looking for doesn't exist. Return to Portland Picture Co.'s homepage to explore our photography services."
                noindex={true}
            />

            <div className="text-center px-6 py-24">
                <h1 className="font-heading text-8xl md:text-9xl text-driftwood mb-4">404</h1>
                <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">Page Not Found</h2>
                <p className="font-body text-lg text-forest-light max-w-md mx-auto mb-10 leading-relaxed">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or no longer exists.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/">
                        <Button variant="primary">Back to Home</Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant="secondary">Contact Us</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
