# AGENTS.md

This file is for contributors and coding agents working in this repository.
It captures how documentation is organized, written, and maintained in `nillion-docs`.

## Repo Overview

- Framework: Docusaurus v3
- Docs root: `docs/`
- Blog root: `blog/`
- Static assets: `static/` (especially `static/img/`)
- Sidebar config:
  - `sidebars.js`
  - `sidebar-learn.js`
  - `sidebar-build.js`
  - `sidebar-community.js`
  - `sidebar-blacklight.js`

## Documentation Approach In This Repo

- Write for builders first: practical, task-oriented, and implementation-focused.
- Prefer clear build flows over conceptual prose:
  - prerequisites
  - step-by-step instructions
  - runnable commands/code
  - troubleshooting/next steps
- Explicitly recommend preferred paths when relevant (for example, UI/recommended workflow vs low-level alternatives).
- Use Nillion product language consistently:
  - Blind Computer
  - Blacklight
  - Private Storage (nilDB)
  - Private LLMs (nilAI)
  - Private Compute / Confidential Compute (nilCC)

## Authoring Conventions

### 1) File Type

- Use `.md` for mostly markdown pages.
- Use `.mdx` when using React/Docusaurus components or custom JSX layouts.
- Note: this repo already uses MDX features in both `.md` and `.mdx` files (imports/components at top are common).

### 2) Titles and Frontmatter

- Most hand-authored docs pages rely on `# H1` and often omit frontmatter.
- Use frontmatter when needed (for example custom `title`, `description`, `sidebar_label`, or blog metadata).
- Blog posts should use frontmatter with fields like:
  - `title`
  - `description`
  - `slug`
  - `authors`
  - `tags`
  - `image`

### 3) Page Structure Patterns

Common structure used in quickstarts and guides:

1. Intro / what the guide does
2. Prerequisites
3. Numbered steps
4. Verification or expected output
5. Next steps / related docs

Common section names in this repo include:
- `What You'll Build`
- `What You'll Learn`
- `Prerequisites`
- `Project Setup`
- `Next Steps`

### 4) Links

- Use root-relative internal links (example: `/blind-computer/build/storage/overview`).
- Use explicit external links for tools, repos, and portals.
- Keep links actionable and specific (direct users to exact guide/section when possible).

### 5) Code Blocks

- Always set a language for fenced code blocks when possible (`bash`, `typescript`, `python`, `yaml`, etc.).
- Use `reference showGithubLink` blocks when pointing to canonical source examples in external repos.
- Keep commands copy-paste friendly.

### 6) MDX Components Used Here

Commonly used components:

- Docusaurus:
  - `Tabs`
  - `TabItem`
- Local components:
  - `CTABanner`
  - `ThumbsUpDown`
  - `FeatureSection`
  - `ToolFeatureItem`
  - `AddNetworkButton` (MetaMask network add UX)
  - `IframeVideo`

If reusing a component, check its props in:
- `src/components/CTABanner/index.js`
- `src/components/ThumbsUpDown/index.js`
- `src/components/ToolFeatureItem/index.js`
- `src/components/MetamaskConnect/index.js`
- `src/components/IframeVideo/index.js`

### 7) Admonitions and Callouts

Use Docusaurus admonitions for guidance and guardrails:
- `:::tip`
- `:::info`
- `:::note`
- `:::warning`

Prefer concise callouts that directly unblock the user.

### 8) Images and Embeds

- Store assets in `static/img/`.
- Reference images with site-relative paths like `/img/<file>`.
- Use descriptive alt text.
- This repo sometimes uses inline HTML/JSX layout (`<div>`, `<img>`, `<iframe>`) for side-by-side walkthrough sections.

## Sidebar and Navigation Rules

- New docs do not automatically appear in navigation; update relevant sidebar file.
- Choose the sidebar file by section:
  - Blacklight docs -> `sidebar-blacklight.js`
  - Blind Computer Learn/Build/Tools -> `sidebar-learn.js` or `sidebar-build.js`
  - Community -> `sidebar-community.js`
- `sidebars.js` composes all section sidebars.

## Build and Validation

Use:

```bash
yarn start
```

and for verification:

```bash
yarn build
```

`docusaurus.config.js` is strict on broken links (`onBrokenLinks: 'throw'`, `onBrokenMarkdownLinks: 'throw'`), so link integrity must be maintained.

## Style and Tone Guardrails

- Keep explanations concrete and implementation-oriented.
- Prefer short paragraphs and scannable lists.
- Avoid unnecessary jargon when a direct instruction is possible.
- If describing a sequence, use numbered steps.
- If a flow has options (e.g., UI vs API, Python vs TypeScript), use tabs.

## When Updating Docs

Checklist:

1. Update the target doc page(s).
2. Update relevant sidebar file if navigation should change.
3. Verify internal links and anchors.
4. Ensure commands/code snippets are runnable and current.
5. Run `yarn build` before finalizing substantial changes.

