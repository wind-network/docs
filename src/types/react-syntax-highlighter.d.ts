declare module 'react-syntax-highlighter' {
  import { ComponentType, ReactNode } from 'react';
  
  export interface SyntaxHighlighterProps {
    language?: string;
    style?: Record<string, unknown>;
    children?: ReactNode;
    className?: string;
    [key: string]: unknown;
  }
  
  export const Prism: ComponentType<SyntaxHighlighterProps>;
  const SyntaxHighlighter: ComponentType<SyntaxHighlighterProps>;
  export default SyntaxHighlighter;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  export const oneDark: Record<string, unknown>;
}

declare module 'react-syntax-highlighter/dist/cjs' {
  import { ComponentType, ReactNode } from 'react';
  
  export interface SyntaxHighlighterProps {
    language?: string;
    style?: Record<string, unknown>;
    children?: ReactNode;
    className?: string;
    [key: string]: unknown;
  }
  
  export const PrismLight: ComponentType<SyntaxHighlighterProps>;
  const SyntaxHighlighter: ComponentType<SyntaxHighlighterProps>;
  export default SyntaxHighlighter;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark' {
  const style: Record<string, unknown>;
  export default style;
} 