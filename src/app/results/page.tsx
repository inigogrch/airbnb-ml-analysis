import { ChartPanel } from '@/components/ChartPanel';
import { FeatureImportanceChart } from '@/components/FeatureImportanceChart';
import { ModelPerformanceChart } from '@/components/ModelPerformanceChart';
import { DataDistributionChart } from '@/components/DataDistributionChart';
import { PredictionScatterChart } from '@/components/PredictionScatterChart';
import { MetricCard } from '@/components/MetricCard';
import { Callout } from '@/components/Callout';
import { DownloadButton } from '@/components/DownloadButton';
import { 
  TrendingUp, 
  BarChart3, 
  Target, 
  Database,
  MapPin,
  Users,
  Star,
  Activity
} from 'lucide-react';

export default function ResultsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Interactive Results</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Explore the model performance, feature importance, and data insights
        </p>
        <DownloadButton href="/airbnb-ml-project.ipynb" download={false}>
          View Original Notebook
        </DownloadButton>
      </div>

      {/* Key Metrics Summary */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Final Model Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Test R²"
            value="0.6956"
            hint="Final holdout performance"
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
            title="Model Type"
            value="LightGBM"
            hint="Gradient boosting"
            icon={<Target className="h-6 w-6" />}
          />
          <MetricCard
            title="Features Used"
            value="15"
            hint="After preprocessing"
            icon={<Database className="h-6 w-6" />}
          />
        </div>
        
        <Callout type="success" className="mt-8">
          <p className="font-medium mb-2">Outstanding Performance</p>
          <p>
            The final LightGBM model achieved an <strong>R² of 0.6956</strong> on the test set, 
            explaining nearly 70% of the variance in Airbnb listing popularity. This demonstrates 
            excellent predictive capability for a real-world regression problem.
          </p>
        </Callout>
      </section>

      {/* Model Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Model Performance Comparison</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChartPanel
            title="Cross-Validation R² Scores"
            description="Comparison of different algorithms on the training set"
          >
            <ModelPerformanceChart />
          </ChartPanel>
          
          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Model Insights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="font-medium">LightGBM (Best)</p>
                    <p className="text-sm text-muted-foreground">
                      Gradient boosting with excellent bias-variance balance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-3 w-3 rounded-full bg-primary mt-2"></div>
                  <div>
                    <p className="font-medium">Random Forest</p>
                    <p className="text-sm text-muted-foreground">
                      Strong ensemble method, slightly overfitting
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-3 w-3 rounded-full bg-primary mt-2"></div>
                  <div>
                    <p className="font-medium">Decision Tree</p>
                    <p className="text-sm text-muted-foreground">
                      Good performance after hyperparameter tuning
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-3 w-3 rounded-full bg-muted-foreground mt-2"></div>
                  <div>
                    <p className="font-medium">Ridge Regression</p>
                    <p className="text-sm text-muted-foreground">
                      Linear baseline, limited by feature relationships
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Why LightGBM Won</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Efficient gradient boosting implementation</li>
                <li>• Excellent handling of categorical features</li>
                <li>• Built-in regularization prevents overfitting</li>
                <li>• Fast training with good generalization</li>
                <li>• Robust to outliers and missing values</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Importance */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Feature Importance Analysis</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ChartPanel
              title="Most Important Features"
              description="Features ranked by their impact on model predictions"
            >
              <FeatureImportanceChart />
            </ChartPanel>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Top Insights
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-sm">Recency is King</p>
                  <p className="text-xs text-muted-foreground">
                    Days since last review is the strongest predictor
                  </p>
                </div>
                <div>
                  <p className="font-medium text-sm">Review History Matters</p>
                  <p className="text-xs text-muted-foreground">
                    Total review count indicates established popularity
                  </p>
                </div>
                <div>
                  <p className="font-medium text-sm">Flexibility Wins</p>
                  <p className="text-xs text-muted-foreground">
                    Lower minimum nights increase booking appeal
                  </p>
                </div>
                <div>
                  <p className="font-medium text-sm">Location Impact</p>
                  <p className="text-xs text-muted-foreground">
                    Neighborhood significantly affects popularity
                  </p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-500" />
                Business Implications
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Maintain active listing engagement</li>
                <li>• Encourage recent guest reviews</li>
                <li>• Optimize minimum night requirements</li>
                <li>• Consider location in pricing strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Insights */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Dataset Insights</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChartPanel
            title="Reviews per Month Distribution"
            description="Distribution of target variable across all listings"
          >
            <DataDistributionChart type="reviews" />
          </ChartPanel>
          
          <ChartPanel
            title="Listings by Borough"
            description="Geographic distribution of Airbnb listings in NYC"
          >
            <DataDistributionChart type="boroughs" />
          </ChartPanel>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border p-6 text-center">
            <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Geographic Patterns</h3>
            <p className="text-sm text-muted-foreground">
              Manhattan and Brooklyn dominate the market, representing 85% of all listings
            </p>
          </div>
          
          <div className="rounded-lg border p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Review Patterns</h3>
            <p className="text-sm text-muted-foreground">
              20% of listings have zero reviews, indicating new or inactive properties
            </p>
          </div>
          
          <div className="rounded-lg border p-6 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Market Dynamics</h3>
            <p className="text-sm text-muted-foreground">
              Most active listings receive 1-3 reviews per month consistently
            </p>
          </div>
        </div>
      </section>

      {/* Model Predictions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Prediction Quality</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ChartPanel
              title="Predicted vs Actual Values"
              description="Scatter plot showing model prediction accuracy (sample of test data)"
            >
              <PredictionScatterChart />
            </ChartPanel>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Prediction Quality</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">R² Score</span>
                  <span className="font-medium">0.696</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Mean Absolute Error</span>
                  <span className="font-medium">0.89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Root Mean Square Error</span>
                  <span className="font-medium">1.42</span>
                </div>
              </div>
            </div>
            
            <Callout type="info">
              <p className="font-medium mb-2">Interpretation</p>
              <p className="text-sm">
                Points close to the diagonal line indicate accurate predictions. 
                The model performs well across the range of review frequencies, 
                with some scatter expected in real-world data.
              </p>
            </Callout>
            
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Model Strengths</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Strong performance on popular listings</li>
                <li>• Good generalization to unseen data</li>
                <li>• Robust to outliers and edge cases</li>
                <li>• Consistent across different price ranges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
        <div className="max-w-4xl mx-auto">
          <Callout type="success">
            <p className="font-medium mb-2">Project Success</p>
            <p>
              This analysis successfully demonstrates end-to-end machine learning workflow, 
              achieving <strong>69.6% variance explanation</strong> in Airbnb listing popularity. 
              The insights provide actionable recommendations for hosts and platform optimization.
            </p>
          </Callout>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-6 text-left">
              <h3 className="font-semibold mb-3">For Airbnb Hosts</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Maintain active guest engagement</li>
                <li>• Optimize minimum night requirements</li>
                <li>• Focus on recent review generation</li>
                <li>• Consider location in pricing strategy</li>
              </ul>
            </div>
            
            <div className="rounded-lg border p-6 text-left">
              <h3 className="font-semibold mb-3">For Platform Development</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Prioritize recent activity in rankings</li>
                <li>• Encourage flexible booking options</li>
                <li>• Develop location-based recommendations</li>
                <li>• Support new listing visibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

