import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

export const ProductCard = ({ product }) => {
  const { addToWishlist, isInWishlist, removeFromWishlist } = useCart();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link to={`/product/${product.id}`} data-testid={`product-card-${product.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="group relative"
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            data-testid={`product-image-${product.id}`}
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span
                className="bg-[#C5A059] text-white text-[10px] font-['Manrope',sans-serif] font-semibold px-3 py-1 uppercase tracking-widest"
                data-testid={`product-new-badge-${product.id}`}
              >
                New
              </span>
            )}
            {product.discount > 0 && (
              <span
                className="bg-black text-white text-[10px] font-['Manrope',sans-serif] font-semibold px-3 py-1 uppercase tracking-widest"
                data-testid={`product-discount-badge-${product.id}`}
              >
                -{product.discount}%
              </span>
            )}
            {!product.inStock && (
              <span
                className="bg-gray-500 text-white text-[10px] font-['Manrope',sans-serif] font-semibold px-3 py-1 uppercase tracking-widest"
                data-testid={`product-out-of-stock-badge-${product.id}`}
              >
                Sold Out
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistClick}
            className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 ${inWishlist ? 'text-red-500' : 'text-black'}`}
            data-testid={`product-wishlist-btn-${product.id}`}
          >
            <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
          </button>

          {/* Quick View Overlay - shows on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
            <Link
              to={`/product/${product.id}`}
              className="bg-white text-black px-6 py-3 text-xs uppercase tracking-widest font-['Manrope',sans-serif] font-semibold hover:bg-[#C5A059] hover:text-white transition-colors duration-300"
              data-testid={`product-quick-view-${product.id}`}
            >
              Quick View
            </Link>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <p
            className="text-xs text-gray-500 font-['Manrope',sans-serif] uppercase tracking-wider"
            data-testid={`product-brand-${product.id}`}
          >
            {product.brand}
          </p>
          <h3
            className="font-['Bodoni_Moda',serif] text-lg font-normal tracking-tight"
            data-testid={`product-name-${product.id}`}
          >
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span
              className="font-['Manrope',sans-serif] text-base font-semibold"
              data-testid={`product-price-${product.id}`}
            >
              ${product.price}
            </span>
            {product.discount > 0 && (
              <span
                className="font-['Manrope',sans-serif] text-sm text-gray-400 line-through"
                data-testid={`product-original-price-${product.id}`}
              >
                ${product.originalPrice}
              </span>
            )}
          </div>
          {product.rating && (
            <div className="flex items-center gap-1" data-testid={`product-rating-${product.id}`}>
              <span className="text-[#C5A059]">{'★'.repeat(Math.floor(product.rating))}</span>
              <span className="text-gray-300">{'★'.repeat(5 - Math.floor(product.rating))}</span>
              <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
};
