import { filterArray, mapArray } from '../index.js';

describe('map an array return another', () => {
  it('should return "map" over original array and return a new array of same length and values', () => {

    const arr = [1, 2, 3, 4, 5];
    const callback = (item) => item * 2;
    const expected = [2, 4, 6, 8, 10];
    const actual = mapArray(arr, callback);

    expect(actual).toEqual(expected);
  });
    
  it('should return "map" over original array and return a new array of same length and values', () => {

    const arr = ['Tom', 'hi'];
    const callback = (item) => item.toUpperCase();
    const expected = ['TOM', 'HI'];
    const actual = mapArray(arr, callback);

    expect(actual).toEqual(expected);
  });
    
  it('should return "map" over original array and return a new array of same length and values', () => {

    const arr = ['pant', '', 'shoe'];
    const callback = (item) => item + 's!';
    const expected = ['pants!', 's!', 'shoes!'];
    const actual = mapArray(arr, callback);

    expect(actual).toEqual(expected);
  });
});


describe('filter an array', () => {
  it('should return an array of c-words', () => {

    const arr = ['cat', 'dog', 'cartwheel', 'mouse'];
    const callback = (item) => item.startsWith('c');
    const expected = ['cat', 'cartwheel'];
    const actual = filterArray(arr, callback);

    expect(actual).toEqual(expected);
  });
    
  //   it('should return an array of words that end with d', () => {

  //     const arr = ['cat', 'dog', 'mouse'];
  //     const callback = (item) => item.startsWith('c');
  //     const expected = ['cat'];
  //     const actual = filterArray(arr, callback);

  //     expect(actual).toEqual(expected);
  //   });
    
  it('should return an array of even numbers', () => {
    const arr = [2, 4, 5, 13, 8];
      const callback = (item) => item % 2 === 0;
    // const callback = (item) => item > 10;
    const expected = [2, 4, 8];
    const actual = filterArray(arr, callback);

    expect(actual).toEqual(expected);
  });
});
