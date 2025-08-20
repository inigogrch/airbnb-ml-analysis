import { Callout } from '@/components/Callout';
import { CodeToggle } from '@/components/CodeToggle';
import { MetricCard } from '@/components/MetricCard';
import { DataBadge } from '@/components/DataBadge';
import { DownloadButton } from '@/components/DownloadButton';
import { 
  Database, 
  Search, 
  Settings, 
  BarChart3, 
  TrendingUp, 
  Target,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function WalkthroughPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Analysis Walkthrough</h1>
        <p className="text-xl text-muted-foreground mb-6">
          A step-by-step journey through the machine learning pipeline
        </p>
        <DownloadButton href="/airbnb-ml-project.ipynb" download={true}>
          Download Original Notebook
        </DownloadButton>
      </div>

      {/* Table of Contents */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="#problem" className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent transition-colors">
            <Target className="h-5 w-5 text-primary" />
            <span>1. Understanding the Problem</span>
          </a>
          <a href="#data-splitting" className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent transition-colors">
            <Database className="h-5 w-5 text-primary" />
            <span>2. Data Splitting</span>
          </a>
          <a href="#eda" className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent transition-colors">
            <Search className="h-5 w-5 text-primary" />
            <span>3. Exploratory Data Analysis</span>
          </a>
          <a href="#feature-engineering" className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent transition-colors">
            <Settings className="h-5 w-5 text-primary" />
            <span>4. Feature Engineering</span>
          </a>
          <a href="#models" className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent transition-colors">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span>5. Model Comparison</span>
          </a>
          <a href="#results" className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent transition-colors">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>6. Final Results</span>
          </a>
        </div>
      </section>

      {/* Problem Understanding */}
      <section id="problem" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Target className="h-8 w-8 text-primary" />
          1. Understanding the Problem
        </h2>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-muted-foreground">
            We chose to work on the <strong>Airbnb NYC regression problem</strong>, predicting 
            listing popularity using <em>reviews per month</em> as a proxy metric.
          </p>
        </div>

        <Callout type="info">
          <p className="font-medium mb-2">Dataset Overview</p>
          <p>
            The dataset contains <strong>48,895 Airbnb listings</strong> from New York City in 2019, 
            with 16 features including location, pricing, room type, and review metrics.
          </p>
        </Callout>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <DataBadge label="Total Listings" value="48,895" />
          <DataBadge label="Features" value="16" />
          <DataBadge label="Target" value="reviews_per_month" />
          <DataBadge label="Problem Type" value="Regression" />
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Key Insights from Initial Analysis</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <p>Missing values in the target variable correspond to listings with zero reviews</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <p>Geographic features show clear patterns across NYC boroughs</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <p>Price and room type are strong predictors of listing popularity</p>
            </div>
          </div>
        </div>

        <CodeToggle 
          title="Dataset Loading and Initial Exploration" 
          className="mt-6"
          code={`# Load the dataset
airbnb_data = pd.read_csv("data/AB_NYC_2019.csv")

print(airbnb_data.info())
airbnb_data.head()`}
        />
      </section>

      {/* Data Splitting */}
      <section id="data-splitting" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Database className="h-8 w-8 text-primary" />
          2. Data Splitting
        </h2>

        <p className="text-lg text-muted-foreground mb-6">
          We split the data into training (70%) and test (30%) sets with a fixed random state 
          for reproducibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <MetricCard
            title="Training Set"
            value="34,227"
            hint="70% of total data"
            icon={<Database className="h-6 w-6" />}
          />
          <MetricCard
            title="Test Set"
            value="14,668"
            hint="30% holdout for final evaluation"
            icon={<Database className="h-6 w-6" />}
          />
        </div>

        <CodeToggle 
          title="Data Splitting Implementation"
          code={`# Split data into train and test sets
airbnb_train, airbnb_test = train_test_split(
    airbnb_data, 
    train_size=0.7, 
    random_state=123
)

print(f"Training set size: {len(airbnb_train)}")
print(f"Test set size: {len(airbnb_test)}")
airbnb_train.head()`}
        />
      </section>

      {/* EDA */}
      <section id="eda" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Search className="h-8 w-8 text-primary" />
          3. Exploratory Data Analysis
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-muted-foreground">
            Our EDA revealed crucial insights about missing values, feature distributions, 
            and relationships between variables.
          </p>
        </div>

        <Callout type="warn">
          <p className="font-medium mb-2">Missing Value Pattern</p>
          <p>
            Missing values in <code>reviews_per_month</code> are <strong>Missing Not At Random (MNAR)</strong> 
            - they systematically represent listings with zero reviews. We imputed these with 0.
          </p>
        </Callout>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Key EDA Findings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg border p-6">
                <h4 className="font-semibold mb-3">Geographic Distribution</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Manhattan: Highest density, premium pricing</li>
                  <li>• Brooklyn: Second largest market</li>
                  <li>• Queens: More affordable options</li>
                  <li>• Bronx & Staten Island: Smaller markets</li>
                </ul>
              </div>
              
              <div className="rounded-lg border p-6">
                <h4 className="font-semibold mb-3">Price Patterns</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Wide price range: $0 - $10,000</li>
                  <li>• Median price: ~$106</li>
                  <li>• Entire homes cost more than private rooms</li>
                  <li>• Manhattan commands premium prices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <CodeToggle 
          title="Missing Value Analysis" 
          className="mt-6"
          code={`# Investigate missing values in target variable
missing_rpm = airbnb_train[['number_of_reviews', 'last_review', 'reviews_per_month']][
    airbnb_train['reviews_per_month'].isnull()
]

print(f"Missing reviews_per_month: {len(missing_rpm)}")
print(f"All have 0 reviews: {(missing_rpm['number_of_reviews'] == 0).all()}")

# Impute missing values with 0
airbnb_train['reviews_per_month'].fillna(0, inplace=True)
airbnb_test['reviews_per_month'].fillna(0, inplace=True)`}
        />
      </section>

      {/* Feature Engineering */}
      <section id="feature-engineering" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Settings className="h-8 w-8 text-primary" />
          4. Feature Engineering
        </h2>

        <p className="text-lg text-muted-foreground mb-8">
          We created several derived features to improve model performance and capture 
          domain-specific insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-4">New Features Created</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <strong>min_payment:</strong> price × minimum_nights
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <strong>recency:</strong> Days since last review
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <strong>price_binned:</strong> Categorical price ranges
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <strong>min_nights_binned:</strong> Booking flexibility categories
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-4">Feature Selection</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                <div>Removed redundant ID columns</div>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                <div>Excluded text fields (name, host_name)</div>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                <div>Kept geographic coordinates</div>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                <div>Retained all engineered features</div>
              </li>
            </ul>
          </div>
        </div>

        <CodeToggle 
          title="Feature Engineering Implementation"
          code={`# Create minimum payment feature
airbnb_train['min_payment'] = airbnb_train['price'] * airbnb_train['minimum_nights']

# Calculate recency (days since last review)
airbnb_train['last_review'] = pd.to_datetime(airbnb_train['last_review'])
reference_date = pd.to_datetime('2019-07-08')
airbnb_train['recency'] = (reference_date - airbnb_train['last_review']).dt.days
airbnb_train['recency'] = airbnb_train['recency'].fillna(airbnb_train['recency'].max())

# Create binned features
airbnb_train['price_binned'] = pd.cut(
    airbnb_train['price'], 
    bins=[0, 69, 106, 175, float('inf')], 
    labels=['Low', 'Medium', 'High', 'Premium']
)

airbnb_train['min_nights_binned'] = pd.cut(
    airbnb_train['minimum_nights'],
    bins=[0, 1, 3, 30, float('inf')],
    labels=['Flexible', 'Short', 'Medium', 'Long']
)`}
        />
      </section>

      {/* Model Comparison */}
      <section id="models" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <BarChart3 className="h-8 w-8 text-primary" />
          5. Model Comparison & Optimization
        </h2>

        <p className="text-lg text-muted-foreground mb-8">
          We compared multiple algorithms and applied hyperparameter optimization to find 
          the best performing model.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard
            title="LightGBM"
            value="0.686"
            hint="Best performer"
            className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950"
          />
          <MetricCard
            title="Random Forest"
            value="0.669"
            hint="Strong baseline"
          />
          <MetricCard
            title="Decision Tree"
            value="0.636"
            hint="After optimization"
          />
          <MetricCard
            title="Ridge Regression"
            value="0.498"
            hint="Linear baseline"
          />
        </div>

        <Callout type="success">
          <p className="font-medium mb-2">Final Model Performance</p>
          <p>
            The optimized LightGBM model achieved <strong>R² = 0.6956</strong> on the test set, 
            demonstrating excellent generalization performance.
          </p>
        </Callout>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Hyperparameter Optimization</h3>
          <p className="text-muted-foreground mb-4">
            We used RandomizedSearchCV to optimize key hyperparameters for the top-performing models.
          </p>
        </div>

        <CodeToggle 
          title="Model Training and Optimization"
          code={`from sklearn.ensemble import RandomForestRegressor
from lightgbm.sklearn import LGBMRegressor
from sklearn.model_selection import RandomizedSearchCV
from sklearn.pipeline import Pipeline

# Define hyperparameter search space for LightGBM
lgbm_param_dist = {
    'lgbmregressor__n_estimators': [100, 200, 300],
    'lgbmregressor__max_depth': [3, 5, 7, 10],
    'lgbmregressor__learning_rate': [0.01, 0.1, 0.2],
    'lgbmregressor__num_leaves': [31, 50, 100]
}

# Create pipeline with preprocessing and model
lgbm_pipe = Pipeline([
    ('preprocessor', preprocessor),
    ('lgbmregressor', LGBMRegressor(random_state=123))
])

# Perform randomized search
lgbm_search = RandomizedSearchCV(
    lgbm_pipe, lgbm_param_dist, 
    n_iter=20, cv=5, 
    scoring='r2', random_state=123
)

lgbm_search.fit(X_train, y_train)
print(f"Best LightGBM R²: {lgbm_search.best_score_:.4f}")`}
        />
      </section>

      {/* Results */}
      <section id="results" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="h-8 w-8 text-primary" />
          6. Final Results & Interpretation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Test R²"
            value="0.6956"
            hint="Final model performance"
            icon={<TrendingUp className="h-6 w-6" />}
            className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950"
          />
          <MetricCard
            title="Cross-Validation R²"
            value="0.686"
            hint="Training performance"
            icon={<BarChart3 className="h-6 w-6" />}
          />
          <MetricCard
            title="Model"
            value="LightGBM"
            hint="Gradient boosting"
            icon={<Settings className="h-6 w-6" />}
          />
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Most Important Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg border p-6">
                <h4 className="font-semibold mb-3">Top Predictors</h4>
                <ol className="space-y-2 text-sm">
                  <li><strong>1. Recency:</strong> Days since last review</li>
                  <li><strong>2. Number of reviews:</strong> Total review count</li>
                  <li><strong>3. Minimum nights:</strong> Booking flexibility</li>
                  <li><strong>4. Neighborhood group:</strong> Location impact</li>
                </ol>
              </div>
              
              <div className="rounded-lg border p-6">
                <h4 className="font-semibold mb-3">Key Insights</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Recent activity drives popularity</li>
                  <li>• Review history is crucial</li>
                  <li>• Flexible booking increases appeal</li>
                  <li>• Location significantly matters</li>
                </ul>
              </div>
            </div>
          </div>

          <Callout type="info">
            <p className="font-medium mb-2">Model Interpretation</p>
            <p>
              SHAP analysis revealed that recency (days since last review) is the most influential 
              feature, with recent activity strongly predicting higher review rates. This aligns 
              with business intuition about listing momentum and visibility.
            </p>
          </Callout>
        </div>

        <CodeToggle 
          title="Final Model Evaluation" 
          className="mt-6"
          code={`# Evaluate final model on test set
final_model = lgbm_search.best_estimator_
test_score = final_model.score(X_test, y_test)

print(f"Final Test R²: {test_score:.4f}")

# Feature importance analysis
feature_importance = final_model.named_steps['lgbmregressor'].feature_importances_
feature_names = final_model.named_steps['preprocessor'].get_feature_names_out()

importance_df = pd.DataFrame({
    'feature': feature_names,
    'importance': feature_importance
}).sort_values('importance', ascending=False)

print("Top 10 Most Important Features:")
print(importance_df.head(10))`}
        />
      </section>

      {/* Conclusion */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
        
        <Callout type="success">
          <p className="font-medium mb-2">Project Success</p>
          <p>
            This analysis successfully demonstrates the complete machine learning workflow, 
            from data exploration to model deployment, achieving strong predictive performance 
            with clear business insights.
          </p>
        </Callout>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-3">Technical Achievements</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Robust preprocessing pipeline</li>
              <li>• Effective feature engineering</li>
              <li>• Comprehensive model comparison</li>
              <li>• Hyperparameter optimization</li>
              <li>• Model interpretation with SHAP</li>
            </ul>
          </div>
          
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-3">Business Insights</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Recent activity drives popularity</li>
              <li>• Location significantly impacts success</li>
              <li>• Booking flexibility matters</li>
              <li>• Review history is crucial</li>
              <li>• Price optimization opportunities</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

