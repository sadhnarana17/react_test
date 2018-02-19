const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(6, 7)).toBe(13);
});