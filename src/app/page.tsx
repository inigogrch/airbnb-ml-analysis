import { MetricCard } from '@/components/MetricCard';
import { Callout } from '@/components/Callout';
import { DownloadButton } from '@/components/DownloadButton';
import { DataBadge } from '@/components/DataBadge';
import { BarChart3, Database, TrendingUp, Users, MapPin, Calendar, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <section className="text-center py-12 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Predicting Airbnb Listing Popularity
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          A comprehensive machine learning analysis of NYC Airbnb data, predicting listing popularity 
          using reviews per month as a proxy. From exploratory data analysis to model deployment.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <DataBadge label="Dataset" value="48,895 listings" />
          <DataBadge label="Features" value="16 variables" />
          <DataBadge label="Year" value="2019" />
          <DataBadge label="Location" value="NYC" />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <DownloadButton href="/airbnb-ml-project.ipynb" download={false}>
            View Original Notebook
          </DownloadButton>
          <Link
            href="/walkthrough"
            className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            View Analysis
          </Link>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Final Test R²"
            value="0.6956"
            hint="LightGBM Regressor"
            icon={<TrendingUp className="h-6 w-6" />}
            className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950"
          />
          <MetricCard
            title="Best Model"
            value="LightGBM"
            hint="Gradient Boosting"
            icon={<BarChart3 className="h-6 w-6" />}
          />
          <MetricCard
            title="Training Data"
            value="34,227"
            hint="70% of dataset"
            icon={<Database className="h-6 w-6" />}
          />
          <MetricCard
            title="Test Data"
            value="14,668"
            hint="30% holdout set"
            icon={<Users className="h-6 w-6" />}
          />
        </div>
      </section>

      {/* Executive Summary */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Executive Summary</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            This project implements an end-to-end supervised machine learning workflow to predict 
            Airbnb listing popularity in New York City using the AB_NYC_2019 dataset. The analysis 
            covers comprehensive exploratory data analysis, feature engineering, model comparison, 
            hyperparameter tuning, and model interpretation.
          </p>
          
          <Callout type="success">
            <p className="font-medium mb-2">Key Achievement</p>
            <p>
              The final tuned LightGBM model achieves a <strong>Test R² of 0.6956</strong> on the 
              held-out test set, demonstrating strong predictive performance for listing popularity.
            </p>
          </Callout>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Problem Statement
              </h3>
              <p className="text-muted-foreground">
                Predict Airbnb listing popularity using <em>reviews per month</em> as a proxy metric. 
                This helps hosts and Airbnb understand what drives listing success and optimize 
                rental strategies accordingly.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Technical Highlights
              </h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Scikit-learn pipelines for robust preprocessing</li>
                <li>• Feature engineering and selection techniques</li>
                <li>• Cross-validation and hyperparameter optimization</li>
                <li>• Model interpretation with SHAP values</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Methodology Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border p-6 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
              </div>
              <h3 className="font-semibold">Data Exploration</h3>
            </div>
            <p className="text-sm text-muted-foreground flex-1">
              Comprehensive EDA revealing missing value patterns, feature distributions, 
              and correlation analysis across NYC boroughs.
            </p>
          </div>
          
          <div className="rounded-lg border p-6 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-bold text-sm">2</span>
              </div>
              <h3 className="font-semibold">Feature Engineering</h3>
            </div>
            <p className="text-sm text-muted-foreground flex-1">
              Created derived features like minimum payment, recency metrics, 
              and binned categorical variables to improve model performance.
            </p>
          </div>
          
          <div className="rounded-lg border p-6 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">3</span>
              </div>
              <h3 className="font-semibold">Model Selection</h3>
            </div>
            <p className="text-sm text-muted-foreground flex-1">
              Compared multiple algorithms from linear regression to gradient boosting, 
              with LightGBM emerging as the top performer.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Key Takeaways</h2>
        <Callout type="info">
          <p className="font-medium mb-2">Machine Learning Insights</p>
          <p>
            This project demonstrates the iterative nature of ML development, highlighting important 
            tradeoffs between model complexity, performance, and computational efficiency. The 
            bias-variance tradeoff and performance-efficiency considerations guided our model 
            selection process.
          </p>
        </Callout>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-3">Most Important Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Recency:</strong> Days since last review</li>
              <li>• <strong>Review Count:</strong> Total number of reviews</li>
              <li>• <strong>Minimum Nights:</strong> Booking flexibility</li>
              <li>• <strong>Neighborhood:</strong> Location impact</li>
            </ul>
          </div>
          
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-3">Model Performance</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>LightGBM:</strong> R² = 0.686 (optimized)</li>
              <li>• <strong>Random Forest:</strong> R² = 0.669</li>
              <li>• <strong>Ridge Regression:</strong> R² = 0.498</li>
              <li>• <strong>Decision Tree:</strong> R² = 0.636 (optimized)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation to Other Pages */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6">Explore the Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/walkthrough"
            className="group rounded-lg border p-6 transition-colors hover:bg-accent h-full flex flex-col"
          >
            <BookOpen className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Detailed Walkthrough</h3>
            <p className="text-sm text-muted-foreground flex-1">
              Step-by-step analysis from data exploration to final results
            </p>
          </Link>
          
          <Link
            href="/results"
            className="group rounded-lg border p-6 transition-colors hover:bg-accent h-full flex flex-col"
          >
            <BarChart3 className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Interactive Results</h3>
            <p className="text-sm text-muted-foreground flex-1">
              Explore visualizations and model performance metrics
            </p>
          </Link>
          
          <Link
            href="/about"
            className="group rounded-lg border p-6 transition-colors hover:bg-accent h-full flex flex-col"
          >
            <Users className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">About & Contact</h3>
            <p className="text-sm text-muted-foreground flex-1">
              Learn more about the author and get in touch
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

