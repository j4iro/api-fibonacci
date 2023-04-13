import FibonacciServices from '../services/fibonacci.services'

test('Fibonacci from 3 index is equal to 2', () => {
  expect(FibonacciServices.getFibonacciByIndex(3)).toBe(2)
})

test('Fibonacci from 6 index is equal to 8', () => {
  expect(FibonacciServices.getFibonacciByIndex(6)).toBe(8)
})

test('Fibonacci from 9 index is equal to 34', () => {
  expect(FibonacciServices.getFibonacciByIndex(9)).toBe(34)
})
