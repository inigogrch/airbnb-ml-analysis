'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Simulated data based on the notebook analysis
const reviewsDistribution = [
  { range: '0', count: 10052, percentage: 20.6 },
  { range: '0-1', count: 15234, percentage: 31.2 },
  { range: '1-3', count: 12456, percentage: 25.5 },
  { range: '3-5', count: 7823, percentage: 16.0 },
  { range: '5+', count: 3330, percentage: 6.8 },
];

const boroughData = [
  { name: 'Manhattan', value: 21661, color: 'hsl(var(--primary))' },
  { name: 'Brooklyn', value: 20104, color: 'hsl(142, 76%, 36%)' },
  { name: 'Queens', value: 5666, color: 'hsl(48, 96%, 53%)' },
  { name: 'Bronx', value: 1091, color: 'hsl(0, 84%, 60%)' },
  { name: 'Staten Island', value: 373, color: 'hsl(262, 83%, 58%)' },
];

// Calculate percentages for each borough
const totalListings = boroughData.reduce((sum, item) => sum + item.value, 0);
const boroughDataWithPercentages = boroughData.map(item => ({
  ...item,
  percentage: ((item.value / totalListings) * 100).toFixed(1)
}));

interface DataDistributionChartProps {
  type: 'reviews' | 'boroughs';
}

export function DataDistributionChart({ type }: DataDistributionChartProps) {
  if (type === 'reviews') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={reviewsDistribution}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="range" fontSize={12} />
          <YAxis fontSize={12} />
          <Tooltip 
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-background border rounded-lg p-3 shadow-lg">
                    <p className="font-semibold">Reviews per month: {label}</p>
                    <p className="text-primary font-medium">
                      Count: {data.count.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {data.percentage}% of listings
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Area 
            type="monotone" 
            dataKey="count" 
            stroke="hsl(var(--primary))" 
            fill="hsl(var(--primary))"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={boroughDataWithPercentages}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label={({ name, percentage }) => `${name}: ${percentage}%`}
          labelLine={false}
        >
          {boroughDataWithPercentages.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="bg-background border rounded-lg p-3 shadow-lg">
                  <p className="font-semibold">{data.name}</p>
                  <p className="text-primary font-medium">
                    Listings: {data.value.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {data.percentage}% of total
                  </p>
                </div>
              );
            }
            return null;
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

