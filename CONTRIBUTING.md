# Contributing to ATELIER

Thank you for your interest in contributing to ATELIER! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (browser, OS, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please:
- Check if the feature has already been suggested
- Provide clear use cases
- Explain why this would be valuable

### Pull Requests

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/atelier-ecommerce.git
   cd atelier-ecommerce
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make Your Changes**
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed
   - Test your changes thoroughly

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature" 
   # or
   git commit -m "fix: resolve bug in cart"
   ```
   
   Use conventional commits:
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation changes
   - `style:` Code style changes (formatting, etc.)
   - `refactor:` Code refactoring
   - `test:` Adding tests
   - `chore:` Maintenance tasks

5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then create a Pull Request on GitHub with:
   - Clear description of changes
   - Reference any related issues
   - Screenshots for UI changes

## Development Guidelines

### Frontend

- Use functional React components with hooks
- Follow React best practices
- Maintain consistent component structure
- Use Tailwind CSS for styling
- Ensure responsive design
- Add proper data-testid attributes for testing

### Backend

- Follow FastAPI best practices
- Use async/await for database operations
- Add proper error handling
- Document API endpoints
- Use Pydantic models for validation

### Code Style

**JavaScript/React:**
- Use ESLint configuration
- 2 spaces for indentation
- Single quotes for strings
- Semicolons required

**Python:**
- Follow PEP 8
- Use Black for formatting
- 4 spaces for indentation
- Type hints when possible

### Testing

- Add tests for new features
- Ensure existing tests pass
- Test edge cases
- Test responsive design

### Commit Messages

Follow conventional commits format:
```
<type>(<scope>): <subject>

<body>

<footer>
```

Example:
```
feat(cart): add quantity validation

Add validation to prevent negative quantities in cart.
Also add maximum quantity limit of 99 per item.

Closes #123
```

## Project Structure

```
/app
├── backend/          # FastAPI backend
├── frontend/         # React frontend
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── context/     # React Context
│   │   └── data/        # Mock data
└── README.md
```

## Need Help?

- Check existing issues and discussions
- Ask questions in issue comments
- Reach out to maintainers

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to ATELIER! 🎉
