'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'python',
  title,
  collapsible = false,
  defaultExpanded = true,
  showLineNumbers = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const toggleExpanded = () => {
    if (collapsible) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="relative group">
      {/* Header */}
      {(title || collapsible) && (
        <div
          className={`flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700 ${
            collapsible ? 'cursor-pointer hover:bg-gray-750' : ''
          }`}
          onClick={toggleExpanded}
        >
          <div className="flex items-center gap-2">
            {collapsible && (
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </motion.div>
            )}
            {title && (
              <span className="text-sm font-medium text-gray-300">{title}</span>
            )}
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              {language}
            </span>
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 rounded hover:bg-gray-700"
            title="Copy code"
          >
            {isCopied ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4 text-gray-400" />
            )}
          </button>
        </div>
      )}

      {/* Code Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={collapsible ? { height: 0, opacity: 0 } : false}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="relative">
              {/* Copy button for non-titled blocks */}
              {!title && !collapsible && (
                <button
                  onClick={handleCopy}
                  className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-md bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm"
                  title="Copy code"
                >
                  {isCopied ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              )}

              <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                showLineNumbers={showLineNumbers}
                customStyle={{
                  margin: 0,
                  borderRadius: title || collapsible ? '0 0 0.5rem 0.5rem' : '0.5rem',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                }}
                lineNumberStyle={{
                  color: '#6b7280',
                  fontSize: '0.75rem',
                  paddingRight: '1rem',
                  userSelect: 'none',
                }}
              >
                {code?.trim() || '// No code provided'}
              </SyntaxHighlighter>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

