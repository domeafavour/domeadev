# domeadev

A TypeScript monorepo for @domeadev packages using pnpm workspace.

## Features

- **TypeScript**: Full TypeScript support with shared configuration
- **pnpm Workspace**: Efficient package management with pnpm workspaces
- **Vitest**: Modern testing framework for unit tests
- **Storybook**: Component preview and documentation deployed to GitHub Pages
- **GitHub Actions**: Automated workflows for deployment and publishing
- **CLI Tool**: Command-line tool for creating new packages

## Requirements

- Node.js >= 20.0.0
- pnpm >= 10.0.0

## Getting Started

### Installation

```bash
pnpm install
```

### Building Packages

```bash
pnpm run build
```

### Running Tests

```bash
# Run tests in watch mode
pnpm run test

# Run tests with UI
pnpm run test:ui

# Run tests with coverage
pnpm run test:coverage
```

### Creating a New Package

Use the built-in CLI tool to create a new package:

```bash
pnpm run create-package <name> [-d <description>]
```

Example:

```bash
pnpm run create-package my-package -d "My awesome package"
```

This will create a new package at `packages/my-package` with:

- TypeScript configuration
- Package.json with @domeadev namespace
- Basic test setup
- Example code

### Code Formatting

```bash
# Check formatting
pnpm run lint

# Fix formatting
pnpm run format
```

## Project Structure

```
domeadev/
├── .github/
│   └── workflows/
│       ├── deploy-storybook.yml  # Deploy Storybook to GitHub Pages
│       └── publish.yml           # Publish packages to npm
├── .storybook/                   # Storybook configuration
├── packages/                     # Workspace packages
│   └── example/                  # Example package
├── stories/                      # Storybook stories
├── tools/
│   └── create-package/           # CLI tool for creating packages
├── .editorconfig                 # Editor configuration
├── .gitignore                    # Git ignore rules
├── .prettierrc.json              # Prettier configuration
├── package.json                  # Root package.json
├── pnpm-workspace.yaml           # pnpm workspace configuration
├── tsconfig.base.json            # Shared TypeScript configuration
├── tsconfig.json                 # Root TypeScript configuration
└── vitest.config.ts              # Vitest configuration
```

## Storybook

Run Storybook locally:

```bash
pnpm run storybook
```

Build Storybook for production:

```bash
pnpm run build-storybook
```

Deploy to GitHub Pages: Trigger the "Deploy Storybook to GitHub Pages" workflow manually from the Actions tab.

## Publishing Packages

Packages are automatically published to GitHub Packages when a new release is created.

1. Create a new release on GitHub
2. The publish workflow will automatically build and publish all packages

## License

MIT
