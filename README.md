# ATELIER - Luxury Men's Fashion E-Commerce

A sophisticated e-commerce platform for premium men's clothing, featuring a modern React frontend with comprehensive filtering, wishlist functionality, and a seamless shopping experience.

![Landing Page](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.110.1-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4.5.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## ✨ Features

### 🎨 Design
- **Luxury Aesthetic**: Dark hero section with premium Bodoni Moda and Manrope typography
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion for elegant page transitions and interactions
- **Modern UI Components**: Shadcn/UI and Radix UI primitives

### 🛍️ E-Commerce Functionality
- **Product Catalog**: 16 curated luxury products across 4 categories (Shirts, T-Shirts, Pants, Jackets)
- **Advanced Filtering**: 
  - Category, Price Range, Size, Color
  - Brand, Material, Style
  - Rating, Discount, Stock Availability
  - New Arrivals
- **Sorting Options**: Featured, Newest, Price (High/Low), Highest Rated
- **Search**: Real-time product search across name, category, and brand
- **Product Details**: 
  - Multiple image gallery
  - Size selection with interactive size guide
  - Customer reviews and ratings
  - Related products suggestions

### 💝 User Experience
- **Wishlist**: Save favorite items with persistent storage
- **Shopping Cart**: 
  - Add/remove items
  - Quantity management
  - Real-time price calculations (subtotal, shipping, tax)
- **Mock Checkout**: Complete checkout flow with form validation
- **Toast Notifications**: Real-time feedback using Sonner
- **LocalStorage Persistence**: Cart and wishlist data persists across sessions

## 🚀 Tech Stack

### Frontend
- **React 19.0.0** - UI framework
- **React Router DOM** - Navigation
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Shadcn/UI** - Component library
- **Radix UI** - Primitive components
- **Sonner** - Toast notifications
- **Lucide React** - Icons

### Backend
- **FastAPI** - Python web framework
- **Motor** - Async MongoDB driver
- **Pydantic** - Data validation
- **Python-dotenv** - Environment management

### Database
- **MongoDB** - NoSQL database for scalability

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- Python 3.8+
- MongoDB
- Yarn package manager

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cat > .env << EOF
MONGO_URL="mongodb://localhost:27017"
DB_NAME="ecommerce_db"
CORS_ORIGINS="*"
EOF

# Start the server
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
yarn install

# Create .env file
cat > .env << EOF
REACT_APP_BACKEND_URL=http://localhost:8001
EOF

# Start the development server
yarn start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8001
- API Documentation: http://localhost:8001/docs

## 📁 Project Structure

```
/app
├── backend/
│   ├── server.py              # FastAPI application
│   ├── requirements.txt       # Python dependencies
│   └── .env                   # Environment variables
│
├── frontend/
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── ui/           # Shadcn UI components
│   │   │   ├── Navigation.js
│   │   │   └── ProductCard.js
│   │   ├── context/          # React Context providers
│   │   │   └── CartContext.js
│   │   ├── data/             # Mock data
│   │   │   └── products.js
│   │   ├── pages/            # Page components
│   │   │   ├── LandingPage.js
│   │   │   ├── ShopPage.js
│   │   │   ├── ProductDetailPage.js
│   │   │   ├── WishlistPage.js
│   │   │   ├── CartPage.js
│   │   │   └── CheckoutPage.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── .env
│
└── README.md
```

## 🎯 Usage

### Shopping Flow
1. **Browse**: Start on the landing page and click "Explore Collection"
2. **Filter**: Use the comprehensive filters on the shop page to find products
3. **View Details**: Click any product to see full details, reviews, and size guide
4. **Add to Cart**: Select a size and add items to your cart
5. **Wishlist**: Save favorites for later with the heart icon
6. **Checkout**: Review your cart and complete the mock checkout process

### Key Routes
- `/` - Landing page
- `/shop` - Product catalog with filters
- `/product/:id` - Product detail page
- `/wishlist` - Saved favorites
- `/cart` - Shopping cart
- `/checkout` - Checkout and order confirmation

## 🛠️ API Endpoints

### Backend API (FastAPI)
- `GET /api/` - Health check
- `POST /api/status` - Create status check
- `GET /api/status` - Get all status checks

*Note: Current implementation uses frontend mock data. Backend endpoints can be expanded for production.*

## 🎨 Design System

### Typography
- **Headings**: Bodoni Moda (Serif) - Luxury, editorial feel
- **Body**: Manrope (Sans-serif) - Clean, modern readability

### Color Palette
- **Primary**: #0A0A0A (Deep Black)
- **Secondary**: #FFFFFF (Pure White)
- **Accent**: #C5A059 (Luxury Gold)
- **Neutral Light**: #F5F5F0
- **Neutral Dark**: #1A1A1A

### Components
- Shadcn/UI components with custom styling
- Consistent spacing and layout system
- Accessible and responsive design

## 🔧 Configuration

### Environment Variables

**Backend** (`backend/.env`):
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=ecommerce_db
CORS_ORIGINS=*
```

**Frontend** (`frontend/.env`):
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

## 📝 Development

### Available Scripts

**Frontend**:
```bash
yarn start      # Start development server
yarn build      # Build for production
yarn test       # Run tests
```

**Backend**:
```bash
uvicorn server:app --reload    # Development with hot reload
uvicorn server:app --workers 4 # Production with multiple workers
```

### Code Style
- ESLint for JavaScript/React
- Black for Python formatting
- Prettier for code formatting

## 🚀 Deployment

### Frontend Deployment
The frontend can be deployed to:
- Vercel
- Netlify
- AWS Amplify
- GitHub Pages

```bash
cd frontend
yarn build
# Deploy the 'build' folder
```

### Backend Deployment
The backend can be deployed to:
- Railway
- Render
- AWS EC2/ECS
- Google Cloud Run
- Heroku

Ensure environment variables are properly configured in your deployment platform.

### Docker Deployment (Optional)
Docker configuration can be added for containerized deployment.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from luxury fashion brands
- Images from Unsplash and Pexels
- UI components from Shadcn/UI
- Icons from Lucide React

## 📧 Contact

For questions or support, please open an issue on GitHub.

## 🔮 Future Enhancements

- [ ] User authentication and accounts
- [ ] Real payment integration (Stripe)
- [ ] Product reviews and ratings system
- [ ] Inventory management
- [ ] Order tracking
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] "Complete the Look" recommendations
- [ ] Size recommendations based on user preferences

---

Built with ❤️ for luxury fashion enthusiasts
