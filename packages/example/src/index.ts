import { capitalize } from '@/utils/helper';

export function example(): string {
  return 'Hello from @domeadev/example';
}

export function greet(name: string): string {
  return `Hello, ${capitalize(name)}!`;
}
