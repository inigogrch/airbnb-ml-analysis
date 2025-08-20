# Airbnb NYC Analysis - Complete Project Structure

## 📁 Project Overview

This repository contains a comprehensive machine learning analysis of NYC Airbnb data, transformed into a professional portfolio website. The project demonstrates end-to-end ML workflow from data exploration to deployment.

## 🗂️ Repository Structure

```
airbnb-nyc-analysis/
├── 📊 data/
│   └── AB_NYC_2019.csv                 # Original dataset
├── 📓 notebooks/
│   └── airbnb-ml-project.ipynb         # Complete analysis notebook
├── 🌐 website/
│   ├── src/
│   │   ├── app/                        # Next.js app directory
│   │   │   ├── page.tsx               # Homepage
│   │   │   ├── walkthrough/           # Analysis walkthrough
│   │   │   ├── results/               # Interactive results
│   │   │   └── about/                 # About page
│   │   ├── components/                # React components
│   │   │   ├── CodeBlock.tsx          # Syntax highlighting
│   │   │   ├── ChartPanel.tsx         # Chart containers
│   │   │   ├── FeatureImportanceChart.tsx
│   │   │   ├── ModelPerformanceChart.tsx
│   │   │   └── DataDistributionChart.tsx
│   │   └── lib/                       # Utilities
│   ├── public/                        # Static assets
│   ├── package.json                   # Dependencies
│   ├── tailwind.config.ts             # Styling config
│   └── next.config.js                 # Next.js config
├── 📋 docs/
│   ├── METHODOLOGY.md                 # Detailed methodology
│   ├── RESULTS.md                     # Complete results
│   └── DEPLOYMENT.md                  # Deployment guide
├── 🚀 scripts/
│   ├── setup.sh                      # Environment setup
│   ├── build.sh                      # Build script
│   └── deploy.sh                     # Deployment script
├── 📄 README.md                      # Main documentation
├── 📋 requirements.txt               # Python dependencies
└── 📜 LICENSE                        # MIT License
```

## 🎯 Key Components

### 1. **Machine Learning Analysis**
- **Notebook**: Complete Jupyter notebook with all analysis steps
- **Data**: NYC Airbnb dataset (48,895 listings)
- **Models**: LightGBM, Random Forest, Decision Tree, Ridge Regression
- **Performance**: R² = 0.6956 on test set

### 2. **Portfolio Website**
- **Framework**: Next.js 15 with TypeScript
- **Styling**: TailwindCSS with custom design system
- **Charts**: Interactive visualizations with Recharts
- **Features**: Python syntax highlighting, responsive design

### 3. **Documentation**
- **Complete README**: Setup and usage instructions
- **Methodology**: Detailed analysis approach
- **Results**: Comprehensive findings and insights
- **Deployment**: Step-by-step deployment guide

## 🔗 Live Demo

**Website**: [https://bolpdrke.manus.space](https://bolpdrke.manus.space)

## 🛠️ Technologies Used

### Data Science Stack
- **Python 3.11+**
- **pandas** - Data manipulation
- **scikit-learn** - Machine learning
- **LightGBM** - Gradient boosting
- **matplotlib/seaborn** - Visualization
- **SHAP** - Model interpretation

### Web Development Stack
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Recharts** - Interactive charts
- **Prism.js** - Syntax highlighting
- **Framer Motion** - Animations

## 📈 Project Highlights

### Technical Achievements
- ✅ **End-to-end ML pipeline** with proper validation
- ✅ **Feature engineering** and selection
- ✅ **Hyperparameter optimization** with cross-validation
- ✅ **Model interpretation** with SHAP values
- ✅ **Professional web deployment**

### Business Impact
- 🎯 **69.6% variance explanation** in listing popularity
- 📊 **Actionable insights** for hosts and platform
- 🔍 **Key predictors identified**: Recency, reviews, flexibility
- 💡 **Strategic recommendations** for optimization

## 🚀 Quick Start

1. **Clone the repository**
2. **Install dependencies**: `npm install` (website) + `pip install -r requirements.txt` (analysis)
3. **Run development server**: `npm run dev`
4. **View analysis**: Open `notebooks/airbnb-ml-project.ipynb`

## 📞 Contact

**Benjamin Gerochi**
- 📧 Email: bgerochi@gmail.com
- 💼 LinkedIn: [benjaminpgerochi](https://www.linkedin.com/in/benjaminpgerochi/)
- 🌐 Portfolio: [Live Demo](https://bolpdrke.manus.space)

---

*This project demonstrates comprehensive machine learning skills, web development capabilities, and professional presentation suitable for data science portfolios.*

