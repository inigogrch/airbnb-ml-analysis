import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warn' | 'success' | 'error';
  children: React.ReactNode;
  className?: string;
}

const calloutStyles = {
  info: 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100',
  warn: 'border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100',
  success: 'border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100',
  error: 'border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100',
};

const calloutIcons = {
  info: Info,
  warn: AlertTriangle,
  success: CheckCircle,
  error: AlertCircle,
};

export function Callout({ type = 'info', children, className }: CalloutProps) {
  const Icon = calloutIcons[type];
  
  return (
    <div
      className={cn(
        'rounded-lg border p-4 my-4',
        calloutStyles[type],
        className
      )}
    >
      <div className="flex gap-3">
        <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

