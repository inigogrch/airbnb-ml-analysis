'use client';

import React from 'react';
import { CodeBlock } from './CodeBlock';

interface CodeToggleProps {
  code: string;
  title?: string;
  language?: string;
  defaultExpanded?: boolean;
  className?: string;
}

export const CodeToggle: React.FC<CodeToggleProps> = ({
  code,
  title = 'Show Code',
  language = 'python',
  defaultExpanded = false,
  className,
}) => {
  return (
    <div className={`my-6 ${className || ''}`}>
      <CodeBlock
        code={code}
        title={title}
        language={language}
        collapsible={true}
        defaultExpanded={defaultExpanded}
        showLineNumbers={true}
      />
    </div>
  );
};

