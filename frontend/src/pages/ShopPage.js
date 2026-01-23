import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { ProductCard } from '../components/ProductCard';
import { products, brands, colors, materials, styles } from '../data/products';
import { Slider } from '../components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [priceRange, setPriceRange] = useState([0, 1200]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [showInStock, setShowInStock] = useState(false);
  const [showNewArrivals, setShowNewArrivals] = useState(searchParams.get('category') === 'new' || false);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  useEffect(() => {
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    
    if (category) {
      setSelectedCategory(category === 'new' ? 'All' : category);
      setShowNewArrivals(category === 'new');
    }
    
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = [...products];

    // Search
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sizes
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(p => p.sizes.some(s => selectedSizes.includes(s)));
    }

    // Colors
    if (selectedColors.length > 0) {
      filtered = filtered.filter(p => selectedColors.includes(p.color));
    }

    // Brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => selectedBrands.includes(p.brand));
    }

    // Materials
    if (selectedMaterials.length > 0) {
      filtered = filtered.filter(p => selectedMaterials.includes(p.material));
    }

    // Styles
    if (selectedStyles.length > 0) {
      filtered = filtered.filter(p => selectedStyles.includes(p.style));
    }

    // Rating
    if (minRating > 0) {
      filtered = filtered.filter(p => p.rating >= minRating);
    }

    // Discounted
    if (showDiscounted) {
      filtered = filtered.filter(p => p.discount > 0);
    }

    // In Stock
    if (showInStock) {
      filtered = filtered.filter(p => p.inStock);
    }

    // New Arrivals
    if (showNewArrivals) {
      filtered = filtered.filter(p => p.isNew);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [
    selectedCategory, priceRange, selectedSizes, selectedColors, selectedBrands,
    selectedMaterials, selectedStyles, minRating, showDiscounted, showInStock,
    showNewArrivals, sortBy, searchQuery
  ]);

  const categories = ['All', 'Shirts', 'T-Shirts', 'Pants', 'Jackets'];

  const toggleFilter = (value, selected, setSelected) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(v => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setPriceRange([0, 1200]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedBrands([]);
    setSelectedMaterials([]);
    setSelectedStyles([]);
    setMinRating(0);
    setShowDiscounted(false);
    setShowInStock(false);
    setShowNewArrivals(false);
    setSearchQuery('');
  };

  const FilterSection = () => (
    <div className="space-y-8" data-testid="filter-section">
      {/* Category */}
      <div>
        <h3 className="font-['Manrope',sans-serif] font-semibold text-sm uppercase tracking-wider mb-4" data-testid="filter-category-heading">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left py-2 px-3 text-sm font-['Manrope',sans-serif] transition-colors ${
                selectedCategory === cat
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              data-testid={`filter-category-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-['Manrope',sans-serif] font-semibold text-sm uppercase tracking-wider mb-4" data-testid="filter-price-heading">
          Price Range
        </h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={1200}
          step={10}
          className="mb-2"
          data-testid="filter-price-slider"
        />
        <div className="flex justify-between text-sm text-gray-600 font-['Manrope',sans-serif]">
          <span data-testid="filter-price-min">${priceRange[0]}</span>
          <span data-testid="filter-price-max">${priceRange[1]}</span>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="font-['Manrope',sans-serif] font-semibold text-sm uppercase tracking-wider mb-4" data-testid="filter-size-heading">
          Size
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {['S', 'M', 'L', 'XL', 'XXL', '30', '32', '34', '36', '38'].map(size => (
            <button
              key={size}
              onClick={() => toggleFilter(size, selectedSizes, setSelectedSizes)}
              className={`py-2 px-3 text-xs font-['Manrope',sans-serif] font-semibold border transition-colors ${
                selectedSizes.includes(size)
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
              data-testid={`filter-size-${size.toLowerCase()}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="font-['Manrope',sans-serif] font-semibold text-sm uppercase tracking-wider mb-4" data-testid="filter-color-heading">
          Color
        </h3>
        <div className="space-y-2">
          {colors.filter(c => c !== 'All').map(color => (
            <label key={color} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedColors.includes(color)}
                onCheckedChange={() => toggleFilter(color, selectedColors, setSelectedColors)}
                data-testid={`filter-color-${color.toLowerCase()}`}
              />
              <span className="text-sm font-['Manrope',sans-serif]">{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <h3 className="font-['Manrope',sans-serif] font-semibold text-sm uppercase tracking-wider mb-4" data-testid="filter-brand-heading">
          Brand
        </h3>
        <div className="space-y-2">
          {brands.filter(b => b !== 'All').map(brand => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleFilter(brand, selectedBrands, setSelectedBrands)}
                data-testid={`filter-brand-${brand.toLowerCase().replace(/\s+/g, '-')}`}
              />
              <span className="text-sm font-['Manrope',sans-serif]">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-['Manrope',sans-serif] font-semibold text-sm uppercase tracking-wider mb-4" data-testid="filter-material-heading">
          Material
        </h3>
        <div className="space-y-2">
          {materials.filter(m => m !== 'All').slice(0, 6).map(material => (
            <label key={material} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedMaterials.includes(material)}
                onCheckedChange={() => toggleFilter(material, selectedMaterials, setSelectedMaterials)}
                data-testid={`filter-material-${material.toLowerCase().replace(/\s+/g, '-')}`}
              />
              <span className="text-sm font-['Manrope',sans-serif]">{material}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Style */}
      <div>
        <h3 className="font-['Manrope',sans-serif] font-semibold text-sm uppercase tracking-wider mb-4" data-testid="filter-style-heading">
          Style
        </h3>
        <div className="space-y-2">
          {styles.filter(s => s !== 'All').map(style => (
            <label key={style} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedStyles.includes(style)}
                onCheckedChange={() => toggleFilter(style, selectedStyles, setSelectedStyles)}
                data-testid={`filter-style-${style.toLowerCase()}`}
              />
              <span className="text-sm font-['Manrope',sans-serif]">{style}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-['Manrope',sans-serif] font-semibold text-sm uppercase tracking-wider mb-4" data-testid="filter-rating-heading">
          Minimum Rating
        </h3>
        <div className="space-y-2">
          {[4.5, 4.0, 3.5].map(rating => (
            <button
              key={rating}
              onClick={() => setMinRating(minRating === rating ? 0 : rating)}
              className={`block w-full text-left py-2 px-3 text-sm font-['Manrope',sans-serif] transition-colors ${
                minRating === rating
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              data-testid={`filter-rating-${rating}`}
            >
              {rating}+ ★
            </button>
          ))}
        </div>
      </div>

      {/* Special Filters */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            checked={showDiscounted}
            onCheckedChange={setShowDiscounted}
            data-testid="filter-discounted"
          />
          <span className="text-sm font-['Manrope',sans-serif]">On Sale</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            checked={showInStock}
            onCheckedChange={setShowInStock}
            data-testid="filter-in-stock"
          />
          <span className="text-sm font-['Manrope',sans-serif]">In Stock</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            checked={showNewArrivals}
            onCheckedChange={setShowNewArrivals}
            data-testid="filter-new-arrivals"
          />
          <span className="text-sm font-['Manrope',sans-serif]">New Arrivals</span>
        </label>
      </div>

      {/* Clear Filters */}
      <button
        onClick={clearFilters}
        className="w-full bg-gray-100 hover:bg-gray-200 text-black py-3 text-xs uppercase tracking-widest font-['Manrope',sans-serif] font-semibold transition-colors"
        data-testid="filter-clear-btn"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <div className="bg-white min-h-screen" data-testid="shop-page">
      <Navigation isDark={false} />

      <div className="pt-20 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto">
        {/* Header */}
        <div className="py-12 border-b border-gray-200">
          <h1 className="font-['Bodoni_Moda',serif] text-4xl sm:text-5xl font-bold mb-4" data-testid="shop-heading">
            {searchQuery ? `Search Results: "${searchQuery}"` : selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-gray-600 font-['Manrope',sans-serif]" data-testid="shop-product-count">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm font-['Manrope',sans-serif] font-semibold"
                data-testid="mobile-filter-btn"
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]" data-testid="sort-select">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured" data-testid="sort-featured">Featured</SelectItem>
                  <SelectItem value="newest" data-testid="sort-newest">Newest</SelectItem>
                  <SelectItem value="price-low" data-testid="sort-price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high" data-testid="sort-price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating" data-testid="sort-rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 py-12">
          {/* Desktop Filters */}
          <aside className="hidden md:block">
            <FilterSection />
          </aside>

          {/* Products Grid */}
          <div>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16" data-testid="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24" data-testid="no-products">
                <p className="text-gray-500 font-['Manrope',sans-serif] text-lg mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-sm font-['Manrope',sans-serif] text-[#C5A059] hover:underline"
                  data-testid="no-products-clear-btn"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-white z-50 overflow-y-auto md:hidden"
            data-testid="mobile-filter-overlay"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-['Bodoni_Moda',serif] text-2xl font-bold">Filters</h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  data-testid="mobile-filter-close-btn"
                >
                  <X size={24} />
                </button>
              </div>
              <FilterSection />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
