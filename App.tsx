import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './Home';
import { ServicesPage } from './components/ServicesPage';
import { PortfolioPage } from './components/PortfolioPage';
import { BlogPage } from './components/BlogPage';
import { BlogPost } from './components/BlogPost';
import { ContactPage } from './components/ContactPage';
import { ServiceGallery } from './components/ServiceGallery';
import { NotFoundPage } from './components/NotFoundPage';
import { ScrollToTop } from './components/ScrollToTop';
import { GALLERY_DATA } from './constants';

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-body selection:bg-terracotta/20 selection:text-forest">
            <ScrollToTop />
            <Header />

            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services/weddings" element={<ServiceGallery {...GALLERY_DATA.weddings} />} />
                    <Route path="/services/engagements" element={<ServiceGallery {...GALLERY_DATA.engagements} />} />
                    <Route path="/services/families" element={<ServiceGallery {...GALLERY_DATA.families} />} />
                    <Route path="/services/branding" element={<ServiceGallery {...GALLERY_DATA.branding} />} />
                    <Route path="/services/headshots" element={<ServiceGallery {...GALLERY_DATA.headshots} />} />
                    <Route path="/services/seniors" element={<ServiceGallery {...GALLERY_DATA.seniors} />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
};

export default App;