# DecibelDesigns

A premium, technical acoustic engineering platform built with Next.js and an Agentic 3-Layer Architecture.

## Project Structure

This repository uses a hybrid architecture that separates the web application from the agentic orchestration layers:

- `/web`: The Next.js 14 application (Frontend/UI).
- `/directives`: Standard Operating Procedures (SOPs) for the AI agent (Layer 1).
- `/execution`: Deterministic Python scripts for backend tasks (Layer 3).
- `/brand-identity`: Design tokens, voice, and tone definitions.
- `/superpowers`: Extended capabilities and technical skills.

## Architecture: 3-Layer System

1. **Directive (What to do)**: Markdown-based instruction sets in `directives/`.
2. **Orchestration (Decision making)**: The AI Agent (Layer 2) which routes intents to tools.
3. **Execution (Doing the work)**: Deterministic Python scripts in `execution/` for reliable, testable actions.

## Getting Started

### Web Application
```bash
cd web
npm install
npm run dev
```

### Agent Architecture
Ensure Python 3.9+ is installed. Diagnostic scripts can be found in `execution/`.

## Author
[dhvl](https://github.com/dhvl)
