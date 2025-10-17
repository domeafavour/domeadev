# GitHub Copilot Instructions

This repository contains the @domeadev packages collection.

## General Guidelines

- Follow modern JavaScript/TypeScript best practices
- Write clean, maintainable, and well-documented code
- Prioritize code quality and readability over brevity

## Code Style

- Use consistent indentation (2 spaces for JS/TS, 4 for Python)
- Use meaningful variable and function names
- Follow the established naming conventions in the codebase
- Keep functions focused and single-purpose
- Add comments for complex logic, but prefer self-documenting code

## Testing

- Write tests for new features and bug fixes
- Ensure all tests pass before submitting changes
- Maintain or improve existing code coverage
- Use appropriate testing frameworks for the language being used

## Documentation

- Update README.md when adding new packages or features
- Document public APIs and exported functions
- Include usage examples where appropriate
- Keep documentation up-to-date with code changes

## Dependencies

- Minimize external dependencies when possible
- Use well-maintained and popular packages
- Keep dependencies up-to-date
- Document the purpose of each dependency

## Security

- Never commit secrets, API keys, or sensitive data
- Validate and sanitize all external input
- Follow security best practices for the specific language/framework
- Use secure defaults for all configurations

## Version Control

- Write clear, descriptive commit messages
- Keep commits focused and atomic
- Follow conventional commit format when possible (e.g., `feat:`, `fix:`, `docs:`, `chore:`)
  - See https://www.conventionalcommits.org/ for more details
- Reference related issues in commit messages

## Package Management

- Follow semantic versioning for all packages
- Update package versions appropriately
- Maintain compatibility across packages where applicable
- Document breaking changes clearly
