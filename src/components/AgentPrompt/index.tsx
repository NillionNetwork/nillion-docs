import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import agentPrompt from '@site/src/data/blacklight-l1-agent-brief.json';
import styles from './styles.module.css';

/**
 * The coding-agent brief, as a banner whose Copy button works WITHOUT expanding.
 *
 * That constraint drives the structure. Almost nobody wants to read 300 lines of brief in a
 * docs page — they want it on their clipboard and in their project. So copying is the primary
 * action and sits in the banner header; reading is the secondary one and is collapsed. A plain
 * <details> around a code block would have buried Docusaurus's own copy button inside the
 * collapsed region, making "expand" a mandatory step toward the thing everyone came for.
 *
 * `<details>`/`<summary>` rather than useState for the disclosure: native keyboard and
 * screen-reader behaviour, and it survives with JS disabled. The Copy button is deliberately
 * NOT inside <summary> — a button in a summary element toggles the disclosure when clicked,
 * which is exactly the behaviour we are trying to avoid.
 */
export default function AgentPrompt(): JSX.Element {
  const [copied, setCopied] = useState(false);
  const text = agentPrompt.prompt;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Older browsers, and any page not served over a secure context, have no
      // clipboard API. Fall back rather than failing silently under the user's cursor.
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = text.split('\n').length;

  return (
    <div className={styles.banner}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <div className={styles.title}>
            <span className={styles.icon} aria-hidden="true">
              ✦
            </span>
            Agentic coding
          </div>
          <p className={styles.subtitle}>
            Building with an AI assistant? Copy this brief into your project as{' '}
            <code>AGENT-BRIEF.md</code> and tell your agent to read it. It covers the
            primitive, what conditions can and cannot express, hooks, and the traps —
            verified against the live deployment.
          </p>
        </div>

        <button
          type="button"
          className={styles.copyButton}
          onClick={copy}
          aria-label="Copy the agent brief to the clipboard"
        >
          {copied ? '✓ Copied' : 'Copy brief'}
        </button>
      </div>

      <details className={styles.details}>
        <summary className={styles.summary}>
          View the brief
          <span className={styles.meta}>{lines} lines</span>
        </summary>
        <div className={styles.body}>
          {/* Rendered as markdown SOURCE, not as prose: the reader's job is to copy it
              verbatim into a file, so showing them the bytes they will get is honest.
              It also sidesteps nesting a fenced block inside MDX, since the brief
              contains fences of its own. */}
          <CodeBlock language="markdown">{text}</CodeBlock>
        </div>
      </details>
    </div>
  );
}
