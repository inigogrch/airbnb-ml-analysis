'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const featureImportanceData = [
  { feature: 'Recency', importance: 0.285, description: 'Days since last review' },
  { feature: 'Number of Reviews', importance: 0.198, description: 'Total review count' },
  { feature: 'Minimum Nights', importance: 0.142, description: 'Booking flexibility' },
  { feature: 'Neighborhood Group', importance: 0.118, description: 'Location impact' },
  { feature: 'Price', importance: 0.095, description: 'Listing price per night' },
  { feature: 'Availability 365', importance: 0.087, description: 'Days available per year' },
  { feature: 'Room Type', importance: 0.075, description: 'Type of accommodation' },
];

export function FeatureImportanceChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={featureImportanceData}
        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
      >
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis 
          dataKey="feature" 
          angle={-45}
          textAnchor="end"
          height={80}
          fontSize={12}
        />
        <YAxis 
          label={{ value: 'Importance', angle: -90, position: 'insideLeft' }}
          fontSize={12}
        />
        <Tooltip 
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="bg-background border rounded-lg p-3 shadow-lg">
                  <p className="font-semibold">{label}</p>
                  <p className="text-sm text-muted-foreground">{data.description}</p>
                  <p className="text-primary font-medium">
                    Importance: {(data.importance * 100).toFixed(1)}%
                  </p>
                </div>
              );
            }
            return null;
          }}
        />
        <Bar 
          dataKey="importance" 
          fill="hsl(var(--primary))"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

