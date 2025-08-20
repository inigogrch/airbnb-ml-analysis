'use client';

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

// Simulated prediction vs actual data based on model performance
const generateScatterData = () => {
  const data = [];
  for (let i = 0; i < 200; i++) {
    const actual = Math.random() * 10;
    const noise = (Math.random() - 0.5) * 2;
    const predicted = actual * 0.83 + noise; // Simulate R² ≈ 0.69
    data.push({
      actual: Math.max(0, actual),
      predicted: Math.max(0, predicted),
    });
  }
  return data;
};

const scatterData = generateScatterData();

export function PredictionScatterChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        data={scatterData}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis 
          type="number" 
          dataKey="actual" 
          name="Actual"
          label={{ value: 'Actual Reviews per Month', position: 'insideBottom', offset: -10 }}
          fontSize={12}
        />
        <YAxis 
          type="number" 
          dataKey="predicted" 
          name="Predicted"
          label={{ value: 'Predicted Reviews per Month', angle: -90, position: 'insideLeft' }}
          fontSize={12}
        />
        <Tooltip 
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="bg-background border rounded-lg p-3 shadow-lg">
                  <p className="font-semibold">Prediction vs Actual</p>
                  <p className="text-primary font-medium">
                    Actual: {data.actual.toFixed(2)}
                  </p>
                  <p className="text-green-600 font-medium">
                    Predicted: {data.predicted.toFixed(2)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Error: {Math.abs(data.actual - data.predicted).toFixed(2)}
                  </p>
                </div>
              );
            }
            return null;
          }}
        />
        <Scatter 
          dataKey="predicted" 
          fill="hsl(var(--primary))"
          fillOpacity={0.6}
        />
        <ReferenceLine 
          segment={[{ x: 0, y: 0 }, { x: 10, y: 10 }]} 
          stroke="hsl(var(--muted-foreground))" 
          strokeDasharray="5 5"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

