# Contributing to @domeadev

Thank you for your interest in contributing to the @domeadev monorepo!

## Development Setup

### Prerequisites

- Node.js >= 20.0.0
- pnpm >= 10.0.0

### Installation

1. Clone the repository:

```bash
git clone https://github.com/domeafavour/domeadev.git
cd domeadev
```

2. Install dependencies:

```bash
pnpm install
```

3. Build all packages:

```bash
pnpm run build
```

## Creating a New Package

To create a new package in the monorepo:

```bash
pnpm run create-package <package-name> -d "<package description>"
```

For example:

```bash
pnpm run create-package my-utils -d "Utility functions for @domeadev"
```

This will:

- Create a new package at `packages/my-utils`
- Set up TypeScript configuration
- Create a basic `package.json` with the `@domeadev/my-utils` namespace
- Generate example code and tests
- Add the package to the workspace

After creating a new package:

1. Navigate to the package directory:

   ```bash
   cd packages/my-utils
   ```

2. Update the root `tsconfig.json` to include the new package reference
3. Install dependencies: `pnpm install`
4. Build the package: `pnpm run build`
5. Run tests: `pnpm run test`

## Development Workflow

### Running Tests

```bash
# Run all tests in watch mode
pnpm run test

# Run tests with UI
pnpm run test:ui

# Run tests with coverage
pnpm run test:coverage
```

### Building

```bash
# Build all packages
pnpm run build

# Build a specific package
cd packages/<package-name>
pnpm run build
```

### Code Formatting

We use Prettier for code formatting:

```bash
# Check formatting
pnpm run lint

# Fix formatting issues
pnpm run format
```

### Storybook

Run Storybook locally for component development:

```bash
pnpm run storybook
```

Build Storybook for production:

```bash
pnpm run build-storybook
```

## Project Structure

```
domeadev/
├── .github/
│   └── workflows/         # GitHub Actions workflows
├── .storybook/            # Storybook configuration
├── packages/              # Workspace packages
│   └── example/           # Example package
├── stories/               # Storybook stories
├── tools/
│   └── create-package/    # CLI tool for creating packages
├── .editorconfig          # Editor configuration
├── .gitignore             # Git ignore rules
├── .prettierrc.json       # Prettier configuration
├── package.json           # Root package configuration
├── pnpm-workspace.yaml    # pnpm workspace configuration
├── tsconfig.base.json     # Shared TypeScript configuration
└── vitest.config.ts       # Vitest configuration
```

## Package Structure

Each package follows this structure:

```
packages/<package-name>/
├── src/
│   └── index.ts          # Main entry point
├── tests/
│   └── index.test.ts     # Tests
├── .npmignore            # npm ignore rules
├── package.json          # Package configuration
├── README.md             # Package documentation
└── tsconfig.json         # TypeScript configuration
```

## Testing Guidelines

- Write tests for all new features
- Ensure all tests pass before submitting a PR
- Use descriptive test names
- Follow the existing test patterns

## Commit Guidelines

- Use clear, descriptive commit messages
- Keep commits focused on a single change
- Reference issues in commit messages when applicable

## Pull Request Process

1. Create a new branch for your feature/fix
2. Make your changes
3. Run tests and linting: `pnpm run lint && pnpm run test && pnpm run build`
4. Commit your changes
5. Push to your fork
6. Create a Pull Request

## Publishing Packages

Packages are automatically published when a new release is created:

1. Update package versions as needed
2. Create a new release on GitHub
3. The publish workflow will automatically build and publish packages to GitHub Packages

## Questions?

If you have questions, please open an issue on GitHub.
