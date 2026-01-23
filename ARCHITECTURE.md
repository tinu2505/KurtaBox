# Project Architecture

## Overview

ATELIER is a full-stack luxury e-commerce platform built with a modern, scalable architecture focusing on performance, user experience, and maintainability.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend                            │
│                      (React 19.0.0)                         │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   Pages      │  │  Components  │  │   Context    │    │
│  │              │  │              │  │              │    │
│  │ - Landing    │  │ - Navigation │  │ - CartContext│    │
│  │ - Shop       │  │ - ProductCard│  │              │    │
│  │ - Product    │  │ - UI Library │  │              │    │
│  │ - Cart       │  │              │  │              │    │
│  │ - Checkout   │  │              │  │              │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
│  ┌──────────────────────────────────────────────────┐    │
│  │            State Management                      │    │
│  │   - React Context API                            │    │
│  │   - LocalStorage for persistence                 │    │
│  └──────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP/REST
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Backend API                            │
│                     (FastAPI 0.110.1)                       │
│                                                             │
│  ┌──────────────────────────────────────────────────┐    │
│  │              API Routes                          │    │
│  │   - GET  /api/                                   │    │
│  │   - POST /api/status                             │    │
│  │   - GET  /api/status                             │    │
│  └──────────────────────────────────────────────────┘    │
│                                                             │
│  ┌──────────────────────────────────────────────────┐    │
│  │          Middleware & CORS                       │    │
│  └──────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ Motor (Async Driver)
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                        Database                             │
│                      (MongoDB 4.5.0)                        │
│                                                             │
│  Collections:                                               │
│  - status_checks                                            │
│  - (extensible for products, users, orders)                │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend Layer

**Core Framework:**
- React 19.0.0 - Latest React with concurrent features
- React Router DOM 7.5.1 - Client-side routing

**Styling:**
- Tailwind CSS 3.4.17 - Utility-first CSS framework
- Custom design system with Bodoni Moda & Manrope fonts
- Shadcn/UI components
- Radix UI primitives

**State Management:**
- React Context API - Global state (Cart, Wishlist)
- LocalStorage - Data persistence
- Custom hooks for state logic

**Animations:**
- Framer Motion 12.29.0 - Smooth page transitions
- @studio-freight/lenis - Smooth scrolling

**UI Components:**
- Lucide React - Icon library
- Sonner - Toast notifications
- Custom component library

### Backend Layer

**Framework:**
- FastAPI 0.110.1 - High-performance async Python framework
- Uvicorn - ASGI server
- Pydantic 2.6.4+ - Data validation

**Database:**
- MongoDB 4.5.0 - Document database
- Motor 3.3.1 - Async MongoDB driver

**Utilities:**
- python-dotenv - Environment management
- python-jose - JWT handling (ready for auth)
- bcrypt - Password hashing (ready for auth)

## Data Flow

### Shopping Flow

```
User Action → Component → Context → LocalStorage
                              ↓
                        State Update
                              ↓
                        UI Re-render
```

### API Communication (Extensible)

```
Frontend Request → Axios
                     ↓
              FastAPI Route
                     ↓
            Pydantic Validation
                     ↓
            MongoDB Query
                     ↓
            Response Model
                     ↓
             JSON Response
                     ↓
          Frontend State Update
```

## Key Design Decisions

### Frontend Architecture

**Component Structure:**
- **Pages**: Top-level route components
- **Components**: Reusable UI components
- **Context**: Global state management
- **Data**: Mock data and utilities

**State Management Strategy:**
- Cart and Wishlist managed via Context API
- LocalStorage for persistence across sessions
- No external state library needed for current scope
- Easily extendable to Redux/Zustand if needed

**Routing Strategy:**
- Client-side routing with React Router
- Nested routes for clean URL structure
- Dynamic routes for product details
- Query params for search and filters

### Backend Architecture

**API Design:**
- RESTful API structure
- Async/await for all database operations
- Pydantic models for request/response validation
- CORS middleware for frontend communication

**Database Design:**
- Document-based MongoDB for flexibility
- Async Motor driver for performance
- Schema-less design allows rapid iteration
- Ready for production with proper indexing

**Error Handling:**
- Structured error responses
- Proper HTTP status codes
- Validation errors with detailed messages

## Scalability Considerations

### Current Implementation
- Mock data in frontend for rapid prototyping
- LocalStorage for client-side persistence
- Basic FastAPI endpoints

### Production Readiness Path

**Phase 1: Data Layer**
- Move product data to MongoDB
- Implement product CRUD endpoints
- Add product search and filtering APIs

**Phase 2: User Management**
- User authentication (JWT)
- User profiles
- Order history

**Phase 3: Commerce Features**
- Real payment integration (Stripe)
- Inventory management
- Order processing
- Email notifications

**Phase 4: Performance**
- Redis caching
- CDN for static assets
- Database indexing
- API rate limiting

**Phase 5: Advanced Features**
- Admin dashboard
- Analytics
- Recommendations engine
- Multi-language support

## Security

### Current
- Environment variables for configuration
- CORS protection
- Input validation with Pydantic

### Production Requirements
- [ ] HTTPS enforcement
- [ ] JWT authentication
- [ ] Rate limiting
- [ ] Input sanitization
- [ ] SQL injection prevention (MongoDB)
- [ ] XSS protection
- [ ] CSRF tokens
- [ ] Secure payment handling
- [ ] Data encryption

## Performance Optimization

### Frontend
- Code splitting with React Router
- Lazy loading of images
- Optimized bundle size
- Framer Motion performance mode
- LocalStorage for reduced API calls

### Backend
- Async database operations
- Connection pooling
- Response compression
- Pagination for large datasets

## Testing Strategy

### Frontend Testing (Planned)
- Unit tests with Jest
- Component tests with React Testing Library
- E2E tests with Playwright
- Visual regression tests

### Backend Testing (Planned)
- Unit tests with pytest
- API tests with FastAPI TestClient
- Integration tests with test database
- Load testing

## Deployment Architecture

```
┌─────────────────────────────────────────┐
│          CDN (CloudFlare/CloudFront)   │
│              Static Assets             │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│       Frontend (Vercel/Netlify)        │
│            React SPA                   │
└─────────────────────────────────────────┘
                    │
                    │ HTTPS
                    ▼
┌─────────────────────────────────────────┐
│     Backend (Railway/Render/AWS)       │
│          FastAPI + Uvicorn             │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│     Database (MongoDB Atlas)           │
│         Managed MongoDB                │
└─────────────────────────────────────────┘
```

## File Structure

```
/app
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # Shadcn UI components
│   │   │   ├── Navigation.js    # Main navigation
│   │   │   └── ProductCard.js   # Product card component
│   │   ├── context/
│   │   │   └── CartContext.js   # Cart & Wishlist state
│   │   ├── data/
│   │   │   └── products.js      # Mock product data
│   │   ├── pages/
│   │   │   ├── LandingPage.js
│   │   │   ├── ShopPage.js
│   │   │   ├── ProductDetailPage.js
│   │   │   ├── WishlistPage.js
│   │   │   ├── CartPage.js
│   │   │   └── CheckoutPage.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── .env
│
├── backend/
│   ├── server.py              # FastAPI application
│   ├── requirements.txt       # Python dependencies
│   └── .env
│
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
└── .env.example
```

## Future Architecture Considerations

### Microservices (Future)
```
- Product Service
- User Service
- Order Service
- Payment Service
- Notification Service
- Search Service
```

### Event-Driven Architecture (Future)
```
- Message Queue (RabbitMQ/Redis)
- Event Bus
- Async processing
- Webhooks
```

### Caching Strategy (Future)
```
- Redis for session data
- CDN for static assets
- API response caching
- Database query caching
```

---

This architecture is designed to be simple for development while being ready to scale for production use.
