#!/usr/bin/env node

import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';

interface PackageOptions {
  description?: string;
}

const program = new Command();

program
  .name('create-package')
  .description('Create a new @domeadev package')
  .argument('<name>', 'Package name (without @domeadev/ prefix)')
  .option('-d, --description <description>', 'Package description', '')
  .action((name: string, options: PackageOptions) => {
    createPackage(name, options);
  });

function createPackage(name: string, options: PackageOptions) {
  const packagesDir = path.resolve(process.cwd(), 'packages');
  const packageDir = path.join(packagesDir, name);
  const fullPackageName = `@domeadev/${name}`;
  const description = options.description || `${fullPackageName} package`;

  // Check if package already exists
  if (fs.existsSync(packageDir)) {
    console.error(`Error: Package "${name}" already exists at ${packageDir}`);
    process.exit(1);
  }

  // Create package directory structure
  console.log(`Creating package: ${fullPackageName}`);
  fs.mkdirSync(packageDir, { recursive: true });
  fs.mkdirSync(path.join(packageDir, 'src'), { recursive: true });
  fs.mkdirSync(path.join(packageDir, 'src', 'tests'), { recursive: true });

  // Create package.json
  const packageJson = {
    name: fullPackageName,
    version: '0.1.0',
    description: description,
    type: 'module',
    main: './dist/index.js',
    types: './dist/index.d.ts',
    exports: {
      '.': {
        import: './dist/index.js',
        types: './dist/index.d.ts',
      },
    },
    files: ['dist', 'README.md'],
    scripts: {
      build: 'tsc',
      dev: 'tsc --watch',
      test: 'vitest',
      clean: 'rm -rf dist *.tsbuildinfo',
    },
    keywords: ['domeadev'],
    license: 'MIT',
    devDependencies: {
      typescript: '^5.0.0',
      vitest: '^2.0.0',
    },
  };

  fs.writeFileSync(
    path.join(packageDir, 'package.json'),
    JSON.stringify(packageJson, null, 2) + '\n'
  );

  // Create tsconfig.json
  const tsConfig = {
    extends: '../../tsconfig.base.json',
    compilerOptions: {
      outDir: './dist',
      rootDir: './src',
      baseUrl: '.',
      paths: {
        '@/*': ['src/*'],
      },
    },
    include: ['src/**/*'],
    exclude: ['node_modules', 'dist'],
  };

  fs.writeFileSync(
    path.join(packageDir, 'tsconfig.json'),
    JSON.stringify(tsConfig, null, 2) + '\n'
  );

  // Create vitest.config.ts
  const vitestConfig = `import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
  },
});
`;

  fs.writeFileSync(path.join(packageDir, 'vitest.config.ts'), vitestConfig);

  // Create README.md
  const readme = `# ${fullPackageName}

${description}

## Installation

\`\`\`bash
pnpm add ${fullPackageName}
\`\`\`

## Usage

\`\`\`typescript
import { example } from '${fullPackageName}';

// Your code here
\`\`\`

## License

MIT
`;

  fs.writeFileSync(path.join(packageDir, 'README.md'), readme);

  // Create src/index.ts
  const indexTs = `export function example(): string {
  return 'Hello from ${fullPackageName}';
}
`;

  fs.writeFileSync(path.join(packageDir, 'src', 'index.ts'), indexTs);

  // Create tests/index.test.ts
  const testTs = `import { describe, it, expect } from 'vitest';
import { example } from '../index';

describe('${fullPackageName}', () => {
  it('should return correct message', () => {
    expect(example()).toBe('Hello from ${fullPackageName}');
  });
});
`;

  fs.writeFileSync(path.join(packageDir, 'src', 'tests', 'index.test.ts'), testTs);

  // Create .npmignore
  const npmignore = `src
tests
*.tsbuildinfo
tsconfig.json
vitest.config.ts
`;

  fs.writeFileSync(path.join(packageDir, '.npmignore'), npmignore);

  console.log(`✓ Package created successfully at ${packageDir}`);
  console.log('\nNext steps:');
  console.log('  1. cd', packageDir);
  console.log('  2. pnpm install');
  console.log('  3. pnpm build');
  console.log('  4. pnpm test');
}

program.parse();
