import { describe, it, expect } from 'vitest';
import { example, greet } from '../index';
import { capitalize } from '@/utils/helper';

describe('@domeadev/example', () => {
  it('should return correct message', () => {
    expect(example()).toBe('Hello from @domeadev/example');
  });

  it('should greet with capitalized name', () => {
    expect(greet('john')).toBe('Hello, John!');
  });

  it('should capitalize strings using @ alias', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});
