# Directive: Setup and Maintain Agents

This directive defines the process for adding new capabilities or modifying existing ones within the 3-layer architecture.

## Goal
Ensure all automated tasks are handled via deterministic execution scripts (Layer 3) orchestrated by the agent (Layer 2) based on standardized SOPs (Layer 1).

## Workflow

### 1. Create a Directive (Layer 1)
- Create a new file in `directives/` named `<feature_name>.md`.
- Define the Goal, Inputs, Tools to use, and expected Outputs.
- Write instructions in natural language.

### 2. Create Execution Script (Layer 3)
- Create a corresponding Python script in `execution/` named `<feature_name>.py`.
- Ensure the script is idempotent and handles errors gracefully.
- Use environment variables from `.env` for configuration.
- Store intermediate data in `.tmp/`.

### 3. Orchestration (Layer 2)
- Read the directive.
- Determine the necessary inputs.
- Call the execution script via `run_command`.
- Interpret the results and handle any failures (Self-annealing).

## Best Practices
- **No Manual Logic**: Do not perform complex data processing or API calling directly in the chat. Delegate to scripts.
- **Environment Isolation**: Keep all persistent state in Google Cloud services or local files as defined by the directive.
- **Continuous Improvement**: Update the directive if a script change or error fix reveals a better approach.

## Tools
- `run_command`: To execute scripts in `execution/`.
- `write_to_file`: To update directives or create scripts.
- `command_status`: To monitor long-running execution tasks.
