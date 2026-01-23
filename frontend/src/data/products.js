// Mock product data for luxury men's clothing e-commerce
export const products = [
  // Shirts
  {
    id: 1,
    name: "Classic Oxford Shirt",
    category: "Shirts",
    price: 189,
    originalPrice: 220,
    discount: 14,
    image: "https://images.unsplash.com/photo-1761522002366-870191e79f2a?w=600",
    images: [
      "https://images.unsplash.com/photo-1761522002366-870191e79f2a?w=600",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600"
    ],
    brand: "Atelier Noir",
    color: "White",
    material: "Cotton",
    style: "Formal",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 124,
    isNew: true,
    inStock: true,
    description: "Crafted from premium Egyptian cotton, this classic Oxford shirt embodies timeless elegance. Perfect for both boardroom meetings and evening affairs."
  },
  {
    id: 2,
    name: "Silk Blend Dress Shirt",
    category: "Shirts",
    price: 245,
    originalPrice: 245,
    discount: 0,
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600",
    images: [
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600",
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=600"
    ],
    brand: "Sovereign",
    color: "Black",
    material: "Silk Blend",
    style: "Formal",
    sizes: ["M", "L", "XL"],
    rating: 4.9,
    reviews: 89,
    isNew: true,
    inStock: true,
    description: "Luxurious silk blend fabric with a subtle sheen, tailored for the discerning gentleman."
  },
  {
    id: 3,
    name: "Linen Summer Shirt",
    category: "Shirts",
    price: 165,
    originalPrice: 210,
    discount: 21,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600"
    ],
    brand: "Meridian",
    color: "Beige",
    material: "Linen",
    style: "Casual",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 156,
    isNew: false,
    inStock: true,
    description: "Breathable linen construction perfect for warm weather elegance."
  },
  {
    id: 4,
    name: "Striped Business Shirt",
    category: "Shirts",
    price: 199,
    originalPrice: 199,
    discount: 0,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600"
    ],
    brand: "Atelier Noir",
    color: "Blue",
    material: "Cotton",
    style: "Business",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.7,
    reviews: 98,
    isNew: false,
    inStock: true,
    description: "Refined stripe pattern with precision tailoring for the modern professional."
  },

  // T-Shirts
  {
    id: 5,
    name: "Premium Cotton Tee",
    category: "T-Shirts",
    price: 89,
    originalPrice: 120,
    discount: 26,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600"
    ],
    brand: "Essentials",
    color: "White",
    material: "Cotton",
    style: "Casual",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.5,
    reviews: 234,
    isNew: false,
    inStock: true,
    description: "Supima cotton construction with a perfect weight and drape."
  },
  {
    id: 6,
    name: "Black Essential Tee",
    category: "T-Shirts",
    price: 95,
    originalPrice: 95,
    discount: 0,
    image: "https://images.unsplash.com/photo-1591280011281-7f86a0156682?w=600",
    images: [
      "https://images.unsplash.com/photo-1591280011281-7f86a0156682?w=600",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600"
    ],
    brand: "Essentials",
    color: "Black",
    material: "Cotton",
    style: "Casual",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 345,
    isNew: true,
    inStock: true,
    description: "The ultimate wardrobe staple in premium black cotton."
  },
  {
    id: 7,
    name: "V-Neck Luxury Tee",
    category: "T-Shirts",
    price: 115,
    originalPrice: 140,
    discount: 18,
    image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600",
    images: [
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600"
    ],
    brand: "Meridian",
    color: "Gray",
    material: "Modal Blend",
    style: "Casual",
    sizes: ["M", "L", "XL"],
    rating: 4.6,
    reviews: 167,
    isNew: false,
    inStock: true,
    description: "Soft modal blend with elegant v-neck design."
  },
  {
    id: 8,
    name: "Striped Casual Tee",
    category: "T-Shirts",
    price: 105,
    originalPrice: 105,
    discount: 0,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600"
    ],
    brand: "Essentials",
    color: "Blue",
    material: "Cotton",
    style: "Casual",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.4,
    reviews: 201,
    isNew: false,
    inStock: true,
    description: "Classic stripe pattern in premium cotton jersey."
  },

  // Pants
  {
    id: 9,
    name: "Tailored Wool Trousers",
    category: "Pants",
    price: 325,
    originalPrice: 425,
    discount: 24,
    image: "https://images.pexels.com/photos/2897533/pexels-photo-2897533.jpeg?w=600",
    images: [
      "https://images.pexels.com/photos/2897533/pexels-photo-2897533.jpeg?w=600",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600"
    ],
    brand: "Sovereign",
    color: "Charcoal",
    material: "Wool",
    style: "Formal",
    sizes: ["30", "32", "34", "36", "38"],
    rating: 4.9,
    reviews: 187,
    isNew: true,
    inStock: true,
    description: "Italian wool construction with precision tailoring and a modern slim fit."
  },
  {
    id: 10,
    name: "Chino Slim Fit",
    category: "Pants",
    price: 175,
    originalPrice: 175,
    discount: 0,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600"
    ],
    brand: "Meridian",
    color: "Beige",
    material: "Cotton Twill",
    style: "Casual",
    sizes: ["30", "32", "34", "36"],
    rating: 4.7,
    reviews: 234,
    isNew: false,
    inStock: true,
    description: "Versatile chino with stretch comfort and refined detailing."
  },
  {
    id: 11,
    name: "Black Dress Pants",
    category: "Pants",
    price: 285,
    originalPrice: 350,
    discount: 19,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600"
    ],
    brand: "Atelier Noir",
    color: "Black",
    material: "Wool Blend",
    style: "Formal",
    sizes: ["30", "32", "34", "36", "38"],
    rating: 4.8,
    reviews: 156,
    isNew: false,
    inStock: true,
    description: "Classic black dress pants with impeccable drape and fit."
  },
  {
    id: 12,
    name: "Linen Summer Pants",
    category: "Pants",
    price: 195,
    originalPrice: 195,
    discount: 0,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600"
    ],
    brand: "Meridian",
    color: "White",
    material: "Linen",
    style: "Casual",
    sizes: ["30", "32", "34", "36"],
    rating: 4.5,
    reviews: 123,
    isNew: true,
    inStock: true,
    description: "Breathable linen construction for effortless summer elegance."
  },

  // Jackets
  {
    id: 13,
    name: "Classic Leather Jacket",
    category: "Jackets",
    price: 895,
    originalPrice: 1200,
    discount: 25,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600"
    ],
    brand: "Atelier Noir",
    color: "Black",
    material: "Leather",
    style: "Casual",
    sizes: ["M", "L", "XL"],
    rating: 5.0,
    reviews: 89,
    isNew: true,
    inStock: true,
    description: "Premium full-grain leather with timeless design and superior craftsmanship."
  },
  {
    id: 14,
    name: "Wool Overcoat",
    category: "Jackets",
    price: 675,
    originalPrice: 675,
    discount: 0,
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600",
    images: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600"
    ],
    brand: "Sovereign",
    color: "Charcoal",
    material: "Wool",
    style: "Formal",
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 145,
    isNew: false,
    inStock: true,
    description: "Italian wool overcoat with classic tailoring and refined elegance."
  },
  {
    id: 15,
    name: "Bomber Jacket",
    category: "Jackets",
    price: 425,
    originalPrice: 550,
    discount: 23,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600"
    ],
    brand: "Essentials",
    color: "Navy",
    material: "Nylon",
    style: "Casual",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 234,
    isNew: false,
    inStock: true,
    description: "Contemporary bomber with premium nylon shell and ribbed details."
  },
  {
    id: 16,
    name: "Denim Trucker Jacket",
    category: "Jackets",
    price: 285,
    originalPrice: 285,
    discount: 0,
    image: "https://images.unsplash.com/photo-1523205771253-fa2300684e7e?w=600",
    images: [
      "https://images.unsplash.com/photo-1523205771253-fa2300684e7e?w=600"
    ],
    brand: "Meridian",
    color: "Blue",
    material: "Denim",
    style: "Casual",
    sizes: ["M", "L", "XL"],
    rating: 4.6,
    reviews: 178,
    isNew: true,
    inStock: false,
    description: "Classic denim jacket with vintage wash and modern fit."
  }
];

export const brands = ["All", "Atelier Noir", "Sovereign", "Meridian", "Essentials"];
export const colors = ["All", "White", "Black", "Blue", "Gray", "Beige", "Charcoal", "Navy"];
export const materials = ["All", "Cotton", "Silk Blend", "Linen", "Wool", "Leather", "Modal Blend", "Wool Blend", "Cotton Twill", "Nylon", "Denim"];
export const styles = ["All", "Formal", "Casual", "Business"];
export const sizes = ["All", "S", "M", "L", "XL", "XXL", "30", "32", "34", "36", "38"];
