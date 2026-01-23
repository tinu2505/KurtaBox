import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { useCart } from '../context/CartContext';
import { CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CheckoutPage = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });

  if (cart.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  const shipping = 15;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock order placement
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="bg-white min-h-screen" data-testid="order-success-page">
        <Navigation isDark={false} />
        
        <div className="pt-20 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
            data-testid="order-success-message"
          >
            <CheckCircle2 size={80} className="mx-auto mb-6 text-green-500" />
            <h1 className="font-['Bodoni_Moda',serif] text-4xl sm:text-5xl font-bold mb-4">
              Order Confirmed!
            </h1>
            <p className="text-gray-600 font-['Manrope',sans-serif] text-lg mb-8">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
            <div className="bg-gray-50 p-8 mb-8 max-w-md mx-auto">
              <p className="text-sm text-gray-500 font-['Manrope',sans-serif] mb-2">Order Number</p>
              <p className="font-['Manrope',sans-serif] text-2xl font-bold mb-4" data-testid="order-number">
                #ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
              <p className="text-sm text-gray-500 font-['Manrope',sans-serif] mb-2">Total</p>
              <p className="font-['Manrope',sans-serif] text-3xl font-bold" data-testid="order-total">
                ${total.toFixed(2)}
              </p>
            </div>
            <p className="text-gray-600 font-['Manrope',sans-serif] mb-8">
              A confirmation email has been sent to {formData.email}
            </p>
            <button
              onClick={() => navigate('/shop')}
              className="bg-black text-white hover:bg-[#C5A059] px-8 py-4 uppercase tracking-widest text-xs font-['Manrope',sans-serif] font-semibold transition-colors"
              data-testid="order-continue-shopping-btn"
            >
              Continue Shopping
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen" data-testid="checkout-page">
      <Navigation isDark={false} />

      <div className="pt-20 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto py-12">
        <h1 className="font-['Bodoni_Moda',serif] text-4xl sm:text-5xl font-bold mb-8" data-testid="checkout-heading">
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8" data-testid="checkout-form">
              {/* Contact Information */}
              <div>
                <h2 className="font-['Bodoni_Moda',serif] text-2xl font-bold mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-['Manrope',sans-serif] font-semibold mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                      data-testid="checkout-first-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Manrope',sans-serif] font-semibold mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                      data-testid="checkout-last-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Manrope',sans-serif] font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                      data-testid="checkout-email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Manrope',sans-serif] font-semibold mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                      data-testid="checkout-phone"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="font-['Bodoni_Moda',serif] text-2xl font-bold mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-['Manrope',sans-serif] font-semibold mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                      data-testid="checkout-address"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-['Manrope',sans-serif] font-semibold mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        data-testid="checkout-city"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-['Manrope',sans-serif] font-semibold mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        data-testid="checkout-state"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-['Manrope',sans-serif] font-semibold mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        data-testid="checkout-zip"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h2 className="font-['Bodoni_Moda',serif] text-2xl font-bold mb-6">Payment Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-['Manrope',sans-serif] font-semibold mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                      data-testid="checkout-card-number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Manrope',sans-serif] font-semibold mb-2">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                      data-testid="checkout-card-name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-['Manrope',sans-serif] font-semibold mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        data-testid="checkout-expiry"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-['Manrope',sans-serif] font-semibold mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        required
                        maxLength="4"
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        data-testid="checkout-cvv"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 sticky top-24" data-testid="checkout-summary">
                <h2 className="font-['Bodoni_Moda',serif] text-2xl font-bold mb-6">Order Summary</h2>
                
                {/* Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-3" data-testid={`checkout-item-${item.id}`}>
                      <div className="w-16 h-20 flex-shrink-0 bg-gray-200 overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 text-sm font-['Manrope',sans-serif]">
                        <p className="font-semibold mb-1">{item.name}</p>
                        <p className="text-gray-600 text-xs">Size: {item.size}</p>
                        <p className="text-gray-600 text-xs">Qty: {item.quantity}</p>
                        <p className="font-semibold mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-3 mb-6 font-['Manrope',sans-serif] border-t border-gray-300 pt-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span data-testid="checkout-subtotal">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span data-testid="checkout-shipping">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span data-testid="checkout-tax">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3 flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span data-testid="checkout-total">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-[#C5A059] px-6 py-4 uppercase tracking-widest text-xs font-['Manrope',sans-serif] font-semibold transition-colors"
                  data-testid="checkout-place-order-btn"
                >
                  Place Order
                </button>

                <p className="text-xs text-gray-500 font-['Manrope',sans-serif] mt-4 text-center">
                  Mock checkout - No actual payment will be processed
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
