import { cn } from '@/lib/utils';

interface ChartPanelProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function ChartPanel({ title, description, children, className }: ChartPanelProps) {
  return (
    <div className={cn('rounded-lg border bg-card p-6', className)}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

