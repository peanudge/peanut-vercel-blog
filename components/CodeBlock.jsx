import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { rainbow } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

function CopyButton({ target }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(target);
    } catch (err) {
      alert(`copy failed ${err}`);
    }
  };
  return <button onClick={handleCopy} className="absolute right-0.5 top-0.5 rounded-lg px-2 bg-white dark:text-gray-800 " type="button">copy</button>;
}

export default function CodeBlock({ children }) {
  return (
    <div className="relative">
      <CopyButton target={children} />
      <SyntaxHighlighter style={rainbow} showLineNumbers>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
