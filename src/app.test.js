const { TestEnvironment } = require('jest-environment-jsdom')
const calculator = require('./jiji.js')

test('math', () => {
  let math = calculator(7, 6)
  expect(math).toBe(13)
});