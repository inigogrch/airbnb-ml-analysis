import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  hint?: string;
  className?: string;
  icon?: React.ReactNode;
}

export function MetricCard({ title, value, hint, className, icon }: MetricCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md',
        className
      )}
    >
      <div className="flex items-center gap-3">
        {icon && <div className="text-primary">{icon}</div>}
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
        </div>
      </div>
    </div>
  );
}

