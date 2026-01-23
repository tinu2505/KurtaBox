import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = ({ isDark = false }) => {
  const { cartCount, wishlistCount } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const isLanding = location.pathname === '/';
  const textColor = isDark ? 'text-white' : 'text-[#0A0A0A]';
  const bgColor = isDark ? 'bg-[#0A0A0A]' : 'bg-white';
  const borderColor = isDark ? 'border-white/10' : 'border-[#0A0A0A]/10';

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${bgColor} ${textColor} border-b ${borderColor} backdrop-blur-lg ${isDark ? 'bg-[#0A0A0A]/80' : 'bg-white/80'}`}
      data-testid="navigation"
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-['Bodoni_Moda',serif] text-2xl font-bold tracking-tight"
            data-testid="nav-logo"
          >
            ATELIER
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/shop"
              className={`font-['Manrope',sans-serif] font-semibold text-xs uppercase tracking-[0.2em] hover:text-[#C5A059] transition-colors duration-300 ${location.pathname === '/shop' ? 'text-[#C5A059]' : ''}`}
              data-testid="nav-shop"
            >
              Shop
            </Link>
            <Link
              to="/shop?category=new"
              className="font-['Manrope',sans-serif] font-semibold text-xs uppercase tracking-[0.2em] hover:text-[#C5A059] transition-colors duration-300"
              data-testid="nav-new"
            >
              New Arrivals
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setSearchOpen(true)}
              className="hover:text-[#C5A059] transition-colors duration-300"
              data-testid="nav-search-btn"
            >
              <Search size={20} />
            </button>
            <Link
              to="/wishlist"
              className="relative hover:text-[#C5A059] transition-colors duration-300"
              data-testid="nav-wishlist-btn"
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-[#C5A059] text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center"
                  data-testid="nav-wishlist-count"
                >
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              className="relative hover:text-[#C5A059] transition-colors duration-300"
              data-testid="nav-cart-btn"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-[#C5A059] text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center"
                  data-testid="nav-cart-count"
                >
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            data-testid="search-overlay"
          >
            <div className="max-w-3xl w-full px-6">
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute top-8 right-8 text-white hover:text-[#C5A059] transition-colors"
                data-testid="search-close-btn"
              >
                <X size={32} />
              </button>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-white/20 focus:border-white text-white text-4xl py-6 px-0 placeholder:text-white/40 focus:outline-none font-['Bodoni_Moda',serif]"
                  autoFocus
                  data-testid="search-input"
                />
              </form>
              <p className="text-white/60 text-sm mt-4 font-['Manrope',sans-serif]">
                Press Enter to search
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
