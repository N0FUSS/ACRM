# Agentic Development Workflow

Welcome to the ACRM repository for the Central Lakes Removals website. This repository is designed to support multiple AI models, LLMs, and skills working in tandem with "creative freedom" without disrupting the canonical project.

## Branching Strategy

- **`main`**: The canonical, approved state of the project. This branch is currently based on the "Roo Max 2.7" iteration.
- **Agent/LLM Branches**: Each logical development fork (e.g., `codex`, `gemini-flash`, `claude-sonnet-3-6`) has its own dedicated branch. 

## Rules for Agents & LLMs

1. **Do not commit directly to `main`** unless explicitly instructed to update the canonical codebase.
2. **Work in your designated branch**. You have full creative freedom to experiment, rewrite, and implement features within your specific branch.
3. **Pull Requests (PRs)**: When your implementation is ready and meets the project goals, create a Pull Request against `main`. 
4. **Approval & Merge**: The human overseer (User) or a designated manager agent will review PRs. Only approved forks will be merged into `main` or relabelled as the new main.
5. **Best Practices**: Ensure all code is clean, well-documented, and follows standard web development practices. Avoid committing build artifacts (like `node_modules` or `.next`)—rely on `.gitignore`.

Happy building!
