import { describe, it, expect } from 'vitest';
import { example } from '../src/index.js';

describe('@domeadev/example', () => {
  it('should return correct message', () => {
    expect(example()).toBe('Hello from @domeadev/example');
  });
});
