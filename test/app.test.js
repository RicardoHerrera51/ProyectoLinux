// sum.test.js
import { expect, test } from 'vitest'

//Testing example
function sum(a, b) {
    return a + b
  }

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})