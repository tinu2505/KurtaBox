import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { useCart } from '../context/CartContext';
import { X, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useCart();

  return (
    <div className="bg-white min-h-screen" data-testid="wishlist-page">
      <Navigation isDark={false} />

      <div className="pt-20 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto py-12">
        <h1 className="font-['Bodoni_Moda',serif] text-4xl sm:text-5xl font-bold mb-8" data-testid="wishlist-heading">
          My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-center py-24" data-testid="wishlist-empty">
            <p className="text-gray-500 font-['Manrope',sans-serif] text-lg mb-6">Your wishlist is empty</p>
            <Link
              to="/shop"
              className="inline-block bg-black text-white hover:bg-[#C5A059] px-8 py-4 uppercase tracking-widest text-xs font-['Manrope',sans-serif] font-semibold transition-colors"
              data-testid="wishlist-shop-btn"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <p className="text-gray-600 font-['Manrope',sans-serif] mb-8" data-testid="wishlist-count">
              {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-testid="wishlist-grid">
              {wishlist.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                  data-testid={`wishlist-item-${product.id}`}
                >
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-red-500 hover:text-white transition-colors"
                    data-testid={`wishlist-remove-${product.id}`}
                  >
                    <X size={16} />
                  </button>

                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-xs text-gray-500 font-['Manrope',sans-serif] uppercase tracking-wider mb-1">
                      {product.brand}
                    </p>
                    <h3 className="font-['Bodoni_Moda',serif] text-lg font-normal mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-['Manrope',sans-serif] text-base font-semibold">
                        ${product.price}
                      </span>
                      {product.discount > 0 && (
                        <span className="font-['Manrope',sans-serif] text-sm text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </Link>

                  <Link
                    to={`/product/${product.id}`}
                    className="w-full bg-black text-white hover:bg-[#C5A059] px-4 py-2 text-xs uppercase tracking-widest font-['Manrope',sans-serif] font-semibold transition-colors flex items-center justify-center gap-2"
                    data-testid={`wishlist-view-${product.id}`}
                  >
                    <ShoppingBag size={14} />
                    View Product
                  </Link>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
