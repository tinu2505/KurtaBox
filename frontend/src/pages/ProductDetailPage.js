import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Heart, ShoppingBag, Ruler, Star } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { motion } from 'framer-motion';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist } = useCart();
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p data-testid="product-not-found">Product not found</p>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize);
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="bg-white min-h-screen" data-testid="product-detail-page">
      <Navigation isDark={false} />

      <div className="pt-20 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto py-12">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm font-['Manrope',sans-serif] text-gray-500" data-testid="breadcrumb">
          <button onClick={() => navigate('/shop')} className="hover:text-black">Shop</button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate(`/shop?category=${product.category}`)} className="hover:text-black">
            {product.category}
          </button>
          <span className="mx-2">/</span>
          <span className="text-black">{product.name}</span>
        </div>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Left - Images */}
          <div className="space-y-4" data-testid="product-images">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                data-testid="product-main-image"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-black' : 'border-transparent'
                  }`}
                  data-testid={`product-thumbnail-${index}`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Details */}
          <div className="sticky top-24 h-fit" data-testid="product-info">
            {/* Brand */}
            <p className="text-xs text-gray-500 font-['Manrope',sans-serif] uppercase tracking-wider mb-2" data-testid="product-brand">
              {product.brand}
            </p>

            {/* Name */}
            <h1 className="font-['Bodoni_Moda',serif] text-4xl sm:text-5xl font-bold mb-4" data-testid="product-name">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6" data-testid="product-rating">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? '#C5A059' : 'none'}
                    stroke={i < Math.floor(product.rating) ? '#C5A059' : '#D1D5DB'}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 font-['Manrope',sans-serif]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-['Manrope',sans-serif] text-3xl font-bold" data-testid="product-price">
                ${product.price}
              </span>
              {product.discount > 0 && (
                <>
                  <span className="font-['Manrope',sans-serif] text-xl text-gray-400 line-through" data-testid="product-original-price">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-black text-white text-xs px-2 py-1 font-['Manrope',sans-serif] font-semibold" data-testid="product-discount">
                    -{product.discount}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Stock Status */}
            <p className={`text-sm font-['Manrope',sans-serif] mb-6 ${product.inStock ? 'text-green-600' : 'text-red-600'}`} data-testid="product-stock">
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </p>

            {/* Description */}
            <p className="text-base text-gray-700 font-['Manrope',sans-serif] leading-relaxed mb-8" data-testid="product-description">
              {product.description}
            </p>

            {/* Product Details */}
            <div className="border-t border-gray-200 pt-6 mb-8 space-y-3">
              <div className="flex justify-between text-sm font-['Manrope',sans-serif]">
                <span className="text-gray-600">Color:</span>
                <span className="font-semibold" data-testid="product-color">{product.color}</span>
              </div>
              <div className="flex justify-between text-sm font-['Manrope',sans-serif]">
                <span className="text-gray-600">Material:</span>
                <span className="font-semibold" data-testid="product-material">{product.material}</span>
              </div>
              <div className="flex justify-between text-sm font-['Manrope',sans-serif]">
                <span className="text-gray-600">Style:</span>
                <span className="font-semibold" data-testid="product-style">{product.style}</span>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-['Manrope',sans-serif] font-semibold uppercase tracking-wider">
                  Select Size
                </label>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className="text-xs text-[#C5A059] hover:underline font-['Manrope',sans-serif] flex items-center gap-1"
                      data-testid="size-guide-btn"
                    >
                      <Ruler size={14} />
                      Size Guide
                    </button>
                  </DialogTrigger>
                  <DialogContent data-testid="size-guide-modal">
                    <DialogTitle>Size Guide</DialogTitle>
                    <DialogHeader>
                      <h3 className="font-['Bodoni_Moda',serif] text-2xl font-bold mb-4">Size Guide</h3>
                    </DialogHeader>
                    <div className="space-y-4">
                      {product.category === 'Pants' ? (
                        <div>
                          <h4 className="font-['Manrope',sans-serif] font-semibold mb-2">Pants Sizing</h4>
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">Size</th>
                                <th className="text-left py-2">Waist (inches)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="py-2">30</td><td>30"</td></tr>
                              <tr><td className="py-2">32</td><td>32"</td></tr>
                              <tr><td className="py-2">34</td><td>34"</td></tr>
                              <tr><td className="py-2">36</td><td>36"</td></tr>
                              <tr><td className="py-2">38</td><td>38"</td></tr>
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div>
                          <h4 className="font-['Manrope',sans-serif] font-semibold mb-2">Standard Sizing</h4>
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">Size</th>
                                <th className="text-left py-2">Chest (inches)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="py-2">S</td><td>34-36"</td></tr>
                              <tr><td className="py-2">M</td><td>38-40"</td></tr>
                              <tr><td className="py-2">L</td><td>42-44"</td></tr>
                              <tr><td className="py-2">XL</td><td>46-48"</td></tr>
                              <tr><td className="py-2">XXL</td><td>50-52"</td></tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="grid grid-cols-5 gap-2" data-testid="size-selection">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 text-sm font-['Manrope',sans-serif] font-semibold border transition-colors ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-300 hover:border-black'
                    }`}
                    data-testid={`size-option-${size.toLowerCase()}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-black text-white hover:bg-[#C5A059] px-6 py-4 uppercase tracking-widest text-xs font-['Manrope',sans-serif] font-semibold transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                data-testid="add-to-cart-btn"
              >
                <ShoppingBag size={18} />
                Add to Cart
              </button>
              <button
                onClick={handleWishlistToggle}
                className={`px-6 py-4 border-2 transition-colors ${
                  inWishlist
                    ? 'border-red-500 text-red-500'
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}
                data-testid="wishlist-toggle-btn"
              >
                <Heart size={20} fill={inWishlist ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-gray-200 pt-12 mb-24" data-testid="reviews-section">
          <h2 className="font-['Bodoni_Moda',serif] text-3xl font-bold mb-8">Customer Reviews</h2>
          <div className="space-y-6">
            {[
              { name: 'James M.', rating: 5, comment: 'Exceptional quality and fit. Worth every penny.', date: '2024-01-15' },
              { name: 'Robert K.', rating: 5, comment: 'The craftsmanship is outstanding. Highly recommend!', date: '2024-01-10' },
              { name: 'Michael S.', rating: 4, comment: 'Great product, runs slightly large.', date: '2024-01-05' }
            ].map((review, index) => (
              <div key={index} className="border-b border-gray-100 pb-6" data-testid={`review-${index}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < review.rating ? '#C5A059' : 'none'}
                        stroke={i < review.rating ? '#C5A059' : '#D1D5DB'}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-['Manrope',sans-serif] font-semibold">{review.name}</span>
                  <span className="text-xs text-gray-400 font-['Manrope',sans-serif]">{review.date}</span>
                </div>
                <p className="text-gray-700 font-['Manrope',sans-serif]">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-gray-200 pt-12" data-testid="related-products">
            <h2 className="font-['Bodoni_Moda',serif] text-3xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <div key={p.id} data-testid={`related-product-${p.id}`}>
                  <button
                    onClick={() => {
                      navigate(`/product/${p.id}`);
                      window.scrollTo(0, 0);
                    }}
                    className="w-full text-left"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <p className="text-xs text-gray-500 font-['Manrope',sans-serif] uppercase tracking-wider mb-1">{p.brand}</p>
                    <h3 className="font-['Bodoni_Moda',serif] text-lg font-normal mb-2">{p.name}</h3>
                    <p className="font-['Manrope',sans-serif] text-base font-semibold">${p.price}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
