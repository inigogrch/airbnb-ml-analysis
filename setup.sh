#!/bin/bash

# Airbnb NYC Analysis - Project Setup Script
# This script sets up the complete development environment

echo "🚀 Setting up Airbnb NYC Analysis Project..."

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed. Please install Python 3.8+ first."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required but not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Create virtual environment for Python
echo "📦 Creating Python virtual environment..."
python3 -m venv venv
source venv/bin/activate

# Install Python dependencies
echo "📦 Installing Python dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

echo "✅ Python environment setup complete"

# Install Node.js dependencies
echo "📦 Installing Node.js dependencies..."
npm install

echo "✅ Node.js dependencies installed"

# Create necessary directories
echo "📁 Creating project directories..."
mkdir -p data
mkdir -p notebooks
mkdir -p docs
mkdir -p scripts

echo "✅ Project structure created"

# Set up pre-commit hooks (optional)
echo "🔧 Setting up development tools..."
pip install pre-commit
pre-commit install

echo "✅ Development tools configured"

# Display next steps
echo ""
echo "🎉 Setup complete! Next steps:"
echo ""
echo "1. 📊 Data Analysis:"
echo "   - Place your dataset in the 'data/' directory"
echo "   - Open 'notebooks/airbnb-ml-project.ipynb' in Jupyter"
echo "   - Run: jupyter notebook"
echo ""
echo "2. 🌐 Website Development:"
echo "   - Start development server: npm run dev"
echo "   - Open http://localhost:3000 in your browser"
echo ""
echo "3. 🚀 Deployment:"
echo "   - Build for production: npm run build"
echo "   - Deploy using your preferred platform"
echo ""
echo "📚 Documentation:"
echo "   - README.md - Main project documentation"
echo "   - METHODOLOGY.md - Detailed analysis methodology"
echo "   - RESULTS.md - Comprehensive results and insights"
echo "   - DEPLOYMENT.md - Deployment instructions"
echo ""
echo "Happy coding! 🎯"

