import { Mail, Linkedin, Github, ExternalLink, GraduationCap, Briefcase } from 'lucide-react';
import { Callout } from '@/components/Callout';
import { DownloadButton } from '@/components/DownloadButton';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About & Contact</h1>
        <p className="text-xl text-muted-foreground">
          Learn more about the author and get in touch
        </p>
      </div>

      {/* About Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-6">About This Project</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-4">
                  This portfolio project showcases a comprehensive machine learning analysis 
                  of Airbnb listing data from New York City. Originally completed as part of 
                  <strong> CPSC 330: Applied Machine Learning</strong>, the analysis demonstrates 
                  end-to-end ML workflow from data exploration to model deployment.
                </p>
                
                <p className="text-muted-foreground mb-4">
                  The project predicts listing popularity using <em>reviews per month</em> as a 
                  proxy metric, achieving an impressive <strong>R² of 0.6956</strong> on the test set. 
                  This website transforms the original Jupyter notebook into an interactive, 
                  portfolio-ready presentation suitable for both technical and non-technical audiences.
                </p>
              </div>
            </div>

            <Callout type="info">
              <p className="font-medium mb-2">Technical Stack</p>
              <p>
                <strong>Analysis:</strong> Python, scikit-learn, pandas, matplotlib, seaborn, LightGBM, SHAP<br/>
                <strong>Website:</strong> Next.js, TypeScript, TailwindCSS, Recharts, Vercel
              </p>
            </Callout>

            <div>
              <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Academic Excellence
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Comprehensive ML workflow implementation</li>
                    <li>• Advanced feature engineering techniques</li>
                    <li>• Model interpretation with SHAP</li>
                    <li>• Statistical validation and testing</li>
                  </ul>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Professional Skills
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Full-stack web development</li>
                    <li>• Interactive data visualization</li>
                    <li>• Responsive design principles</li>
                    <li>• Modern deployment practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Benjamin Gerochi</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Data Science & Machine Learning Enthusiast
              </p>
              
              <div className="space-y-3">
                <a
                  href="mailto:bgerochi@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-xs text-muted-foreground">bgerochi@gmail.com</p>
                  </div>
                  <ExternalLink className="h-4 w-4 ml-auto" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/benjaminpgerochi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">LinkedIn</p>
                    <p className="text-xs text-muted-foreground">Professional Profile</p>
                  </div>
                  <ExternalLink className="h-4 w-4 ml-auto" />
                </a>
                
                <a
                  href="https://github.com/inigogrch/airbnb-ml-analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent transition-colors"
                >
                  <Github className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">GitHub</p>
                    <p className="text-xs text-muted-foreground">Code Portfolio</p>
                  </div>
                  <ExternalLink className="h-4 w-4 ml-auto" />
                </a>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Project Resources</h3>
              <div className="space-y-3">
                <DownloadButton href="/airbnb-ml-project.ipynb" className="w-full justify-center">
                  Original Jupyter Notebook
                </DownloadButton>
                
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Complete analysis with code, visualizations, and detailed explanations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Project Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-3">1. Data Exploration</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Comprehensive analysis of 48,895 NYC Airbnb listings with 16 features.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Missing value pattern analysis</li>
              <li>• Feature distribution examination</li>
              <li>• Correlation analysis</li>
              <li>• Geographic pattern identification</li>
            </ul>
          </div>
          
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-3">2. Feature Engineering</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Created derived features to capture domain-specific insights.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Minimum payment calculation</li>
              <li>• Recency metrics</li>
              <li>• Categorical binning</li>
              <li>• Geographic encoding</li>
            </ul>
          </div>
          
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-3">3. Model Development</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Systematic comparison and optimization of multiple algorithms.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Cross-validation framework</li>
              <li>• Hyperparameter optimization</li>
              <li>• Performance evaluation</li>
              <li>• Model interpretation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Website Development */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Website Development</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            This portfolio website was built to showcase the analysis in an interactive, 
            accessible format. The development process focused on creating a professional 
            presentation suitable for recruiters, collaborators, and technical audiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-4">Design Principles</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Clean, professional aesthetic</li>
              <li>• Responsive design for all devices</li>
              <li>• Interactive visualizations</li>
              <li>• Accessible navigation structure</li>
              <li>• SEO optimization</li>
              <li>• Performance optimization</li>
            </ul>
          </div>
          
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-4">Technical Implementation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Next.js 15 with App Router</li>
              <li>• TypeScript for type safety</li>
              <li>• TailwindCSS for styling</li>
              <li>• Recharts for data visualization</li>
              <li>• Vercel for deployment</li>
              <li>• Modern web standards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="text-center border-t pt-8">
        <p className="text-sm text-muted-foreground mb-4">
          Built with Next.js, TypeScript, and TailwindCSS. Deployed on Vercel.
        </p>
        <p className="text-xs text-muted-foreground">
          © 2024 Benjamin Gerochi. This project is for educational and portfolio purposes.
        </p>
      </section>
    </div>
  );
}

