import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DownloadButtonProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

export function DownloadButton({ 
  href = '/airbnb-ml-project.ipynb', 
  children = 'Download Original Notebook',
  className 
}: DownloadButtonProps) {
  return (
    <a
      href={href}
      download="airbnb-ml-project.ipynb"
      className={cn(
        'inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover-lift focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-pulse-glow',
        className
      )}
    >
      <Download className="h-4 w-4" />
      {children}
    </a>
  );
}

