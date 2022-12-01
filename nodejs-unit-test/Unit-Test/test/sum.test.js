import { sum } from '../src/sum';

test('sum(1, 2) must be 3', () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});

test('sum(4, -10) must be -6', () => {
  const result = sum(4, -10);

  expect(result).toBe(-6);
});

test('tes 3', () => {
  const result = sum(-5, -5);

  expect(result).toBe(-10);
});