import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { motion } from 'framer-motion';
import { products } from '../data/products';

export const LandingPage = () => {
  useEffect(() => {
    // Smooth scroll setup
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    scrollElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featuredProducts = products.filter(p => p.isNew).slice(0, 3);

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen" data-testid="landing-page">
      <Navigation isDark={true} />

      {/* Hero Section - Asymmetric Grid */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-12 gap-4 pt-20 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto" data-testid="hero-section">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 flex flex-col justify-center py-12 md:py-24"
        >
          <h1 className="font-['Bodoni_Moda',serif] text-4xl sm:text-5xl lg:text-7xl font-bold leading-none mb-6" data-testid="hero-heading">
            The Art of
            <br />
            <span className="text-[#C5A059]">Refined</span>
            <br />
            Masculinity
          </h1>
          <p className="font-['Manrope',sans-serif] text-base text-white/70 max-w-md mb-8 tracking-wide leading-relaxed" data-testid="hero-description">
            Discover a curated collection of timeless elegance. Where Italian craftsmanship meets contemporary design.
          </p>
          <div className="flex gap-4">
            <Link
              to="/shop"
              className="bg-white text-black hover:bg-[#C5A059] hover:text-white px-8 py-4 uppercase tracking-widest text-xs font-['Manrope',sans-serif] font-semibold transition-all duration-300"
              data-testid="hero-shop-btn"
            >
              Explore Collection
            </Link>
            <Link
              to="/shop?category=new"
              className="bg-transparent border border-white/20 text-white hover:border-white hover:bg-white hover:text-black px-8 py-4 uppercase tracking-widest text-xs font-['Manrope',sans-serif] font-semibold transition-all duration-300"
              data-testid="hero-new-btn"
            >
              New Arrivals
            </Link>
          </div>
        </motion.div>

        {/* Right Column - Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-7 grid grid-cols-2 gap-4"
        >
          <div className="col-span-2 md:col-span-1 h-[400px] md:h-full relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1754485115876-9221149ccc19?w=800"
              alt="Luxury Fashion"
              className="w-full h-full object-cover"
              data-testid="hero-image-1"
            />
          </div>
          <div className="col-span-2 md:col-span-1 grid grid-rows-2 gap-4">
            <div className="relative overflow-hidden h-[250px] md:h-full">
              <img
                src="https://images.unsplash.com/photo-1761522001672-5f1d45ce1b10?w=600"
                alt="Premium Clothing"
                className="w-full h-full object-cover"
                data-testid="hero-image-2"
              />
            </div>
            <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-8 flex flex-col justify-center h-[250px] md:h-full" data-testid="hero-info-card">
              <p className="font-['Manrope',sans-serif] text-xs uppercase tracking-[0.2em] text-[#C5A059] mb-2">Est. 2024</p>
              <h3 className="font-['Bodoni_Moda',serif] text-2xl font-bold mb-2">Luxury Redefined</h3>
              <p className="text-sm text-white/60 font-['Manrope',sans-serif]">Premium materials, timeless designs</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto" data-scroll data-testid="featured-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <p className="font-['Manrope',sans-serif] text-xs uppercase tracking-[0.2em] text-[#C5A059] mb-4" data-testid="featured-label">
              New Arrivals
            </p>
            <h2 className="font-['Bodoni_Moda',serif] text-4xl sm:text-5xl font-bold" data-testid="featured-heading">
              Featured Collection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`featured-product-${product.id}`}
              >
                <Link to={`/product/${product.id}`} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs text-white/60 font-['Manrope',sans-serif] uppercase tracking-wider mb-2">{product.brand}</p>
                  <h3 className="font-['Bodoni_Moda',serif] text-xl font-normal mb-2">{product.name}</h3>
                  <p className="font-['Manrope',sans-serif] text-lg font-semibold">${product.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/shop"
              className="inline-block bg-transparent border border-white/20 text-white hover:border-white hover:bg-white hover:text-black px-8 py-4 uppercase tracking-widest text-xs font-['Manrope',sans-serif] font-semibold transition-all duration-300"
              data-testid="featured-view-all-btn"
            >
              View All Products
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Brand Story */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto border-t border-white/10" data-scroll data-testid="brand-story-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-['Manrope',sans-serif] text-xs uppercase tracking-[0.2em] text-[#C5A059] mb-4" data-testid="story-label">
              Our Philosophy
            </p>
            <h2 className="font-['Bodoni_Moda',serif] text-4xl sm:text-5xl font-bold mb-6" data-testid="story-heading">
              Crafted for the Modern Gentleman
            </h2>
            <p className="font-['Manrope',sans-serif] text-base text-white/70 leading-relaxed mb-4" data-testid="story-text-1">
              At Atelier, we believe that true luxury lies in the details. Each piece in our collection is meticulously crafted using the finest materials sourced from renowned Italian mills.
            </p>
            <p className="font-['Manrope',sans-serif] text-base text-white/70 leading-relaxed" data-testid="story-text-2">
              Our commitment to excellence extends beyond aesthetics—we create timeless pieces that transcend seasonal trends, designed to become cherished staples in your wardrobe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
                data-testid="story-image-1"
              />
            </div>
            <div className="relative aspect-square overflow-hidden mt-12">
              <img
                src="https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600"
                alt="Quality"
                className="w-full h-full object-cover"
                data-testid="story-image-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 md:px-12 lg:px-24" data-testid="footer">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-['Bodoni_Moda',serif] text-xl font-bold mb-4">ATELIER</h3>
              <p className="text-sm text-white/60 font-['Manrope',sans-serif]">
                Redefining luxury menswear with timeless elegance.
              </p>
            </div>
            <div>
              <h4 className="font-['Manrope',sans-serif] text-xs uppercase tracking-widest font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-white/60 font-['Manrope',sans-serif]">
                <li><Link to="/shop?category=Shirts" className="hover:text-white transition-colors">Shirts</Link></li>
                <li><Link to="/shop?category=T-Shirts" className="hover:text-white transition-colors">T-Shirts</Link></li>
                <li><Link to="/shop?category=Pants" className="hover:text-white transition-colors">Pants</Link></li>
                <li><Link to="/shop?category=Jackets" className="hover:text-white transition-colors">Jackets</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Manrope',sans-serif] text-xs uppercase tracking-widest font-semibold mb-4">Help</h4>
              <ul className="space-y-2 text-sm text-white/60 font-['Manrope',sans-serif]">
                <li><Link to="/cart" className="hover:text-white transition-colors">Cart</Link></li>
                <li><Link to="/wishlist" className="hover:text-white transition-colors">Wishlist</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Manrope',sans-serif] text-xs uppercase tracking-widest font-semibold mb-4">Contact</h4>
              <p className="text-sm text-white/60 font-['Manrope',sans-serif]">support@atelier.com</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40 font-['Manrope',sans-serif]">
            © 2024 Atelier. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
