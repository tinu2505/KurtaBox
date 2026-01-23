# Quick Start Guide

Get ATELIER running on your local machine in under 5 minutes!

## Prerequisites

Before you begin, ensure you have:
- ✅ Node.js v16+ ([Download](https://nodejs.org/))
- ✅ Python 3.8+ ([Download](https://www.python.org/))
- ✅ MongoDB ([Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- ✅ Yarn (`npm install -g yarn`)
- ✅ Git

## Option 1: Local Development (Recommended)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/atelier-ecommerce.git
cd atelier-ecommerce
```

### Step 2: Start MongoDB

**If you have MongoDB installed locally:**
```bash
mongod --dbpath /path/to/your/data
```

**Or use MongoDB Atlas (cloud):**
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get your connection string

### Step 3: Setup Backend

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Mac/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cat > .env << EOF
MONGO_URL="mongodb://localhost:27017"
DB_NAME="ecommerce_db"
CORS_ORIGINS="*"
EOF

# Start backend server (keep this terminal open)
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

✅ Backend running at: http://localhost:8001
📚 API docs available at: http://localhost:8001/docs

### Step 4: Setup Frontend (New Terminal)

```bash
# Navigate to frontend
cd frontend

# Install dependencies
yarn install

# Create .env file
cat > .env << EOF
REACT_APP_BACKEND_URL=http://localhost:8001
EOF

# Start frontend (keep this terminal open)
yarn start
```

✅ Frontend running at: http://localhost:3000

### Step 5: Explore the Application! 🎉

Open your browser and navigate to:
- **Frontend**: http://localhost:3000
- **Backend API Docs**: http://localhost:8001/docs

## Option 2: Docker (Coming Soon)

```bash
docker-compose up
```

## Testing the Application

### Quick Feature Test

1. **Landing Page**: Visit http://localhost:3000
2. **Shop**: Click "Explore Collection"
3. **Filters**: Try filtering by category, price, or brand
4. **Search**: Use the search icon to find products
5. **Product Detail**: Click any product
6. **Add to Cart**: Select a size and click "Add to Cart"
7. **Wishlist**: Click the heart icon to save favorites
8. **Cart**: Click the shopping bag icon to view cart
9. **Checkout**: Click "Proceed to Checkout" and complete the form

### Backend API Test

```bash
# Test health check
curl http://localhost:8001/api/

# Create a status check
curl -X POST http://localhost:8001/api/status \
  -H "Content-Type: application/json" \
  -d '{"client_name": "test_client"}'

# Get status checks
curl http://localhost:8001/api/status
```

## Common Issues & Solutions

### Issue: Port Already in Use

**Frontend (Port 3000):**
```bash
# Find and kill process on port 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill -9
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Backend (Port 8001):**
```bash
# Find and kill process on port 8001
# Mac/Linux:
lsof -ti:8001 | xargs kill -9
# Windows:
netstat -ano | findstr :8001
taskkill /PID <PID> /F
```

### Issue: MongoDB Connection Failed

**Solution 1: Check if MongoDB is running**
```bash
# Mac/Linux:
ps aux | grep mongod

# Windows:
tasklist | findstr mongod
```

**Solution 2: Use MongoDB Atlas**
1. Get connection string from MongoDB Atlas
2. Update `MONGO_URL` in `backend/.env`:
```
MONGO_URL="mongodb+srv://username:password@cluster.mongodb.net/ecommerce_db"
```

### Issue: Module Not Found

**Frontend:**
```bash
cd frontend
rm -rf node_modules yarn.lock
yarn install
```

**Backend:**
```bash
cd backend
pip install --upgrade -r requirements.txt
```

### Issue: CORS Errors

Ensure `backend/.env` has:
```
CORS_ORIGINS="*"
```

Or specify your frontend URL:
```
CORS_ORIGINS="http://localhost:3000"
```

## Development Tips

### Hot Reload

Both frontend and backend support hot reload:
- **Frontend**: Changes automatically refresh in browser
- **Backend**: Changes automatically restart server (with `--reload` flag)

### Environment Variables

Never commit `.env` files! Use `.env.example` as a template.

### Code Style

**Frontend:**
```bash
cd frontend
yarn lint          # Check for issues
yarn lint --fix    # Auto-fix issues
```

**Backend:**
```bash
cd backend
black .            # Format code
isort .            # Sort imports
flake8 .           # Check for issues
```

### Debugging

**Frontend (React DevTools):**
- Install React DevTools extension
- Open browser DevTools > React tab

**Backend (FastAPI Debug Mode):**
```bash
uvicorn server:app --reload --log-level debug
```

## Next Steps

Now that you have ATELIER running:

1. 📖 Read the [README.md](README.md) for detailed documentation
2. 🏗️ Check [ARCHITECTURE.md](ARCHITECTURE.md) to understand the codebase
3. 🤝 Review [CONTRIBUTING.md](CONTRIBUTING.md) to contribute
4. 🎨 Explore the design system in Tailwind config
5. 🚀 Deploy to production (see README deployment section)

## Useful Commands

### Frontend
```bash
yarn start         # Start dev server
yarn build         # Build for production
yarn test          # Run tests
```

### Backend
```bash
uvicorn server:app --reload    # Dev server
python -m pytest               # Run tests
black .                        # Format code
```

## Quick Links

- 📚 [API Documentation](http://localhost:8001/docs) (when backend is running)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- ⚡ [FastAPI Docs](https://fastapi.tiangolo.com/)
- ⚛️ [React Docs](https://react.dev/)
- 🍃 [MongoDB Docs](https://docs.mongodb.com/)

## Getting Help

- 🐛 Found a bug? [Open an issue](https://github.com/yourusername/atelier-ecommerce/issues)
- 💡 Have a question? Check [existing issues](https://github.com/yourusername/atelier-ecommerce/issues)
- 🤝 Want to contribute? Read [CONTRIBUTING.md](CONTRIBUTING.md)

---

Happy coding! If you encounter any issues, please open an issue on GitHub. 🚀
