import React, { useState } from 'react';

export const CopyIcon = ({ value, hideValue = false }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <>
      <span
        onClick={copyToClipboard}
        style={{
          marginLeft: '10px',
          cursor: 'pointer',
          color: copied ? 'green' : 'inherit',
        }}
        title={copied ? 'Copied!' : 'Copy to clipboard'}
      >
        {copied ? '✓' : '📋'}
      </span>
      {!hideValue && <span style={{ marginLeft: '4px' }}>{value}</span>}
    </>
  );
};
