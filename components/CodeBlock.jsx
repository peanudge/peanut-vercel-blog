import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { rainbow } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function CodeBlock({ children }) {
  return (
    <div>
      <SyntaxHighlighter style={rainbow} showLineNumbers>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
