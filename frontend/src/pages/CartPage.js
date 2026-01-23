import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { useCart } from '../context/CartContext';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  const shipping = cart.length > 0 ? 15 : 0;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  return (
    <div className="bg-white min-h-screen" data-testid="cart-page">
      <Navigation isDark={false} />

      <div className="pt-20 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto py-12">
        <h1 className="font-['Bodoni_Moda',serif] text-4xl sm:text-5xl font-bold mb-8" data-testid="cart-heading">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-24" data-testid="cart-empty">
            <ShoppingBag size={64} className="mx-auto mb-6 text-gray-300" />
            <p className="text-gray-500 font-['Manrope',sans-serif] text-lg mb-6">Your cart is empty</p>
            <Link
              to="/shop"
              className="inline-block bg-black text-white hover:bg-[#C5A059] px-8 py-4 uppercase tracking-widest text-xs font-['Manrope',sans-serif] font-semibold transition-colors"
              data-testid="cart-shop-btn"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6" data-testid="cart-items">
              {cart.map((item, index) => (
                <motion.div
                  key={`${item.id}-${item.size}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 border-b border-gray-200 pb-6"
                  data-testid={`cart-item-${item.id}-${item.size}`}
                >
                  <Link
                    to={`/product/${item.id}`}
                    className="w-32 h-40 flex-shrink-0 overflow-hidden bg-gray-100"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between mb-2">
                      <div>
                        <p className="text-xs text-gray-500 font-['Manrope',sans-serif] uppercase tracking-wider mb-1">
                          {item.brand}
                        </p>
                        <Link
                          to={`/product/${item.id}`}
                          className="font-['Bodoni_Moda',serif] text-lg font-normal hover:text-[#C5A059] transition-colors"
                        >
                          {item.name}
                        </Link>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        data-testid={`cart-remove-${item.id}-${item.size}`}
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="space-y-1 mb-4 text-sm text-gray-600 font-['Manrope',sans-serif]">
                      <p data-testid={`cart-item-size-${item.id}`}>Size: {item.size}</p>
                      <p data-testid={`cart-item-color-${item.id}`}>Color: {item.color}</p>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-3 border border-gray-300">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                          data-testid={`cart-decrease-${item.id}-${item.size}`}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-['Manrope',sans-serif] font-semibold w-8 text-center" data-testid={`cart-quantity-${item.id}-${item.size}`}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                          data-testid={`cart-increase-${item.id}-${item.size}`}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <p className="font-['Manrope',sans-serif] text-lg font-semibold" data-testid={`cart-item-price-${item.id}-${item.size}`}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 sticky top-24" data-testid="order-summary">
                <h2 className="font-['Bodoni_Moda',serif] text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 font-['Manrope',sans-serif]">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span data-testid="cart-subtotal">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span data-testid="cart-shipping">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span data-testid="cart-tax">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-4 flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span data-testid="cart-total">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-black text-white hover:bg-[#C5A059] px-6 py-4 uppercase tracking-widest text-xs font-['Manrope',sans-serif] font-semibold transition-colors mb-4"
                  data-testid="cart-checkout-btn"
                >
                  Proceed to Checkout
                </button>

                <Link
                  to="/shop"
                  className="block text-center text-sm text-gray-600 hover:text-black font-['Manrope',sans-serif] transition-colors"
                  data-testid="cart-continue-shopping"
                >
                  Continue Shopping
                </Link>

                {/* Payment Icons */}
                <div className="mt-8 pt-6 border-t border-gray-300">
                  <p className="text-xs text-gray-500 font-['Manrope',sans-serif] mb-3 uppercase tracking-wider">
                    We Accept
                  </p>
                  <div className="flex gap-3">
                    <div className="w-12 h-8 bg-gray-200 flex items-center justify-center text-[10px] font-semibold">VISA</div>
                    <div className="w-12 h-8 bg-gray-200 flex items-center justify-center text-[10px] font-semibold">MC</div>
                    <div className="w-12 h-8 bg-gray-200 flex items-center justify-center text-[10px] font-semibold">AMEX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
