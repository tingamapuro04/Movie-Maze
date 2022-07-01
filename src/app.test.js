/*eslint-disable*/
const { TestEnvironment } = require('jest-environment-jsdom');
const movies = require('./__mock__/countLikes.js');
const comments = require('./__mock__/countComments.js');

const firstTestArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const secondTestArray = ['a', 'b', 'c'];
const thirdTestArray = ['Peaky blinders', 'Arrow', 'Far from home', 'Suits', 'Knight Rider'];

describe('count the number movies', () => {
  test('First test', () => {
    expect(movies(firstTestArray)).toBe(8);
  });

  test('second test', () => {
    expect(movies(secondTestArray)).toBe(3);
  });

  test('third test', () => {
    expect(movies(thirdTestArray)).toBe(5);
  });
});

const commentsList = [
  {
    username: 'Youta',
    comment: 'Cameroon',
  },
  {
    username: 'Gleen',
    comment: 'Cameroon',
  },
  {
    username: 'Agasha',
    comment: 'Uganda',
  },
  {
    username: 'Tofana',
    comment: 'Romania',
  },
];

const commentList1 = [
  {
    username: 'Elisha',
    comment: 'Ghana',
  },
  {
    username: 'Suleiman',
    comment: 'Nigeria',
  },
  {
    username: 'Quami killy',
    comment: 'Ghana',
  },
  {
    username: 'Hanningtone',
    comment: 'Kenya',
  },
  {
    username: 'Chris',
    comment: 'Rwanda',
  },
];

describe('Test comments', () => {
  test('comments 1', () => {
    expect(comments(commentsList)).toBe(4);
  });

  test('comments 2', () => {
    expect(comments(commentList1)).toBe(5);
  });
});