import { mapArray } from '../index.js';

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

});
