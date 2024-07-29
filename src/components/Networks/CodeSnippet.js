import React from 'react';
import { CopyIcon } from './CopyIcon';

export const CodeSnippet = ({ code, name }) => {
  return (
    <div>
      <span>
        <CopyIcon value={code} hideValue />
        {name && <span style={{ marginLeft: '4px' }}>Copy {name}</span>}
      </span>
      <div>
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          {code}
        </pre>
      </div>
    </div>
  );
};
