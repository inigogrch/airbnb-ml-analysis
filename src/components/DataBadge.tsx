import { cn } from '@/lib/utils';

interface DataBadgeProps {
  label: string;
  value: string | number;
  className?: string;
}

export function DataBadge({ label, value, className }: DataBadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm',
        className
      )}
    >
      <span className="text-muted-foreground">{label}:</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

