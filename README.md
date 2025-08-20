# 🏠 Airbnb NYC Analysis - Complete Portfolio Project

[![Live Website](https://img.shields.io/badge/Live%20Website-View%20Site-blue?style=for-the-badge&logo=vercel)](https://airbnb-ml-analysis.vercel.app/)
[![Jupyter Notebook](https://img.shields.io/badge/Jupyter-Analysis%20Notebook-orange?style=for-the-badge&logo=jupyter)](https://airbnb-ml-analysis.vercel.app/airbnb-ml-project.ipynb)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> **A comprehensive machine learning analysis of NYC Airbnb data, transformed into a professional portfolio website. Demonstrates end-to-end ML workflow from data exploration to deployment.**

## 🎯 Project Overview

This project implements a complete supervised machine learning workflow to predict Airbnb listing popularity in New York City using the AB_NYC_2019 dataset. The analysis is presented through a modern, interactive website that showcases both technical depth and professional presentation skills.

### 🏆 Key Achievement
**Final Model Performance: R² = 0.6956** (69.6% variance explanation)

## 🌐 Live Website

**🔗 [View Live Website](https://airbnb-ml-analysis.vercel.app/)**

The website includes:
- **Executive Summary**: Key results and business insights
- **Interactive Walkthrough**: Step-by-step analysis with collapsible Python code
- **Results Dashboard**: Interactive charts and model performance metrics
- **Professional Presentation**: Portfolio-ready design for recruiters

## 📊 Project Highlights

### Technical Achievements
- ✅ **End-to-end ML pipeline** with proper validation and testing
- ✅ **Feature engineering** and selection techniques
- ✅ **Hyperparameter optimization** using cross-validation
- ✅ **Model interpretation** with SHAP values
- ✅ **Professional web deployment** with interactive visualizations

### Business Impact
- 🎯 **69.6% variance explanation** in listing popularity prediction
- 📊 **Actionable insights** for hosts and platform optimization
- 🔍 **Key predictors identified**: Recency, reviews, booking flexibility
- 💡 **Strategic recommendations** for business growth

## 🛠️ Technology Stack

### Data Science & ML
- **Python 3.11+** - Core programming language
- **pandas** - Data manipulation and analysis
- **scikit-learn** - Machine learning framework
- **LightGBM** - Gradient boosting (best performing model)
- **SHAP** - Model interpretation and explainability
- **matplotlib/seaborn** - Data visualization

### Web Development
- **Next.js 15** - React framework with TypeScript
- **TailwindCSS** - Utility-first CSS framework
- **Recharts** - Interactive data visualizations
- **Prism.js** - Python syntax highlighting
- **Framer Motion** - Smooth animations

## 🚀 Quick Start

### Prerequisites
- **Python 3.8+**
- **Node.js 18+**
- **npm** or **yarn**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/inigogrch/airbnb-ml-analysis.git
cd airbnb-ml-analysis
```

2. **Run setup script**
```bash
chmod +x setup.sh
./setup.sh
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

### Manual Setup (Alternative)

**Python Environment:**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

**Node.js Dependencies:**
```bash
npm install
```

## 📁 Project Structure

```
airbnb-nyc-analysis/
├── 📊 public/
│   └── airbnb-ml-project.ipynb    # Complete analysis notebook
├── 🌐 src/
│   ├── app/                       # Next.js pages
│   │   ├── page.tsx              # Homepage
│   │   ├── walkthrough/          # Analysis walkthrough
│   │   ├── results/              # Interactive results
│   │   └── about/                # About page
│   └── components/               # React components
│       ├── CodeBlock.tsx         # Python syntax highlighting
│       ├── ChartPanel.tsx        # Chart containers
│       └── [other components]    # Various UI components
├── 📋 documentation/
│   ├── METHODOLOGY.md            # Detailed methodology
│   ├── RESULTS.md                # Comprehensive results
│   └── PROJECT_STRUCTURE.md      # Detailed project overview
├── 🔧 Configuration Files
│   ├── package.json              # Node.js dependencies
│   ├── requirements.txt          # Python dependencies
│   ├── tailwind.config.ts        # Styling configuration
│   └── next.config.js            # Next.js configuration
└── 📄 Documentation
    ├── README.md                 # This file
    └── LICENSE                   # MIT License
```

## 📈 Key Results

### Model Performance
| Metric | Value | Interpretation |
|--------|-------|----------------|
| **Test R²** | **0.6956** | Explains 69.6% of variance |
| **Cross-Validation R²** | 0.686 | Consistent performance |
| **MAE** | 0.89 | Average error: ±0.89 reviews/month |
| **RMSE** | 1.42 | Standard error: ±1.42 reviews/month |

### Top Features (by importance)
1. **Recency** (28.5%) - Days since last review
2. **Number of Reviews** (19.8%) - Total review count
3. **Minimum Nights** (14.2%) - Booking flexibility
4. **Neighborhood Group** (11.8%) - Location impact
5. **Price** (8.9%) - Pricing strategy

### Geographic Insights
- **Manhattan**: 44.3% of listings, premium market
- **Brooklyn**: 41.1% of listings, strong alternative
- **Queens**: 11.6% of listings, emerging opportunity
- **Bronx & Staten Island**: <3% combined, developing markets

## 🎯 Business Recommendations

### For Airbnb Hosts
- **Maintain active engagement** to encourage recent reviews
- **Optimize booking flexibility** with lower minimum nights
- **Build review portfolio** through excellent guest service
- **Leverage location advantages** in marketing

### For Platform Development
- **Prioritize recent activity** in ranking algorithms
- **Support new listings** to overcome review barriers
- **Develop location-specific** optimization strategies
- **Implement predictive tools** for host guidance

## 📚 Documentation

- **[METHODOLOGY.md](documentation/METHODOLOGY.md)** - Detailed analysis methodology and approach
- **[RESULTS.md](documentation/RESULTS.md)** - Comprehensive results and business insights
- **[PROJECT_STRUCTURE.md](documentation/PROJECT_STRUCTURE.md)** - Complete project overview
 

## 🤝 Contributing

This is a portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Benjamin Gerochi**
- 📧 Email: [bgerochi@gmail.com](mailto:bgerochi@gmail.com)
- 💼 LinkedIn: [benjaminpgerochi](https://www.linkedin.com/in/benjaminpgerochi/)
- 🌐 Portfolio: [Live Website](https://airbnb-ml-analysis.vercel.app/)

## 🙏 Acknowledgments

- **Dataset**: [Inside Airbnb](http://insideairbnb.com/) for providing the NYC 2019 dataset
- **Libraries**: Thanks to the open-source community for the amazing tools
- **Inspiration**: Data science community for best practices and methodologies

---

⭐ **If you found this project helpful, please give it a star!** ⭐

*This project demonstrates comprehensive machine learning skills, web development capabilities, and professional presentation suitable for data science portfolios.*

