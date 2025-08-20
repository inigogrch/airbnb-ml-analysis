'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const modelPerformanceData = [
  { model: 'LightGBM', r2_score: 0.686, type: 'best' },
  { model: 'Random Forest', r2_score: 0.669, type: 'good' },
  { model: 'Decision Tree', r2_score: 0.636, type: 'good' },
  { model: 'Ridge Regression', r2_score: 0.498, type: 'baseline' },
  { model: 'Dummy Regressor', r2_score: 0.000, type: 'baseline' },
];

const getBarColor = (type: string) => {
  switch (type) {
    case 'best': return 'hsl(142, 76%, 36%)'; // Green
    case 'good': return 'hsl(var(--primary))'; // Blue
    case 'baseline': return 'hsl(var(--muted-foreground))'; // Gray
    default: return 'hsl(var(--primary))';
  }
};

export function ModelPerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={modelPerformanceData}
        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
      >
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis 
          dataKey="model" 
          angle={-45}
          textAnchor="end"
          height={80}
          fontSize={12}
        />
        <YAxis 
          label={{ value: 'R² Score', angle: -90, position: 'insideLeft' }}
          domain={[0, 0.8]}
          fontSize={12}
        />
        <Tooltip 
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="bg-background border rounded-lg p-3 shadow-lg">
                  <p className="font-semibold">{label}</p>
                  <p className="text-primary font-medium">
                    R² Score: {data.r2_score.toFixed(3)}
                  </p>
                  <p className="text-sm text-muted-foreground capitalize">
                    {data.type} performer
                  </p>
                </div>
              );
            }
            return null;
          }}
        />
        <Bar dataKey="r2_score" radius={[4, 4, 0, 0]}>
          {modelPerformanceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getBarColor(entry.type)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

