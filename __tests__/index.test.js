import { filterArray, findIndex, mapArray, reduceArray } from '../index.js';

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
    
  it('should return an array of words that end with d', () => {

    const arr = ['kind', 'rind', 'blind', 'apple', 'dumb'];
    const callback = (item) => item.endsWith('d');
    const expected = ['kind', 'rind', 'blind'];
    const actual = filterArray(arr, callback);

    expect(actual).toEqual(expected);
  });
    
  it('should return an array of even numbers', () => {
    const arr = [2, 4, 5, 13, 8];
    const callback = (item) => item % 2 === 0;
    const expected = [2, 4, 8];
    const actual = filterArray(arr, callback);

    expect(actual).toEqual(expected);
  });
    
  it('should return an array of numbers less than or equal to 10', () => {
    const arr = [2, 4, 5, 8, 10];
    const callback = (item) => item <= 10;
    const expected = [2, 4, 5, 8, 10];
    const actual = filterArray(arr, callback);

    expect(actual).toEqual(expected);
  });
});

describe('find index of element in an array', () => {
  it('should return the index of the element in the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const callback = (item) => item < 2;
    const expected = [0];
    const actual = findIndex(arr, callback);

    expect(actual).toEqual(expected);
  });

  it('should return the index of the element in the array', () => {
    const arr = ['dog', 'mouse', 'car'];
    const callback = (item) => item.startsWith('c');
    const expected = [2];
    const actual = findIndex(arr, callback);

    expect(actual).toEqual(expected);
  });

  it('should return the index of the element in the array', () => {
    const arr = ['dog', 'mouse', 'far'];
    const callback = (item) => item.startsWith('c');
    const expected = -1;
    const actual = findIndex(arr, callback);

    expect(actual).toEqual(expected);
  });

  it('should return the index of the element in the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const callback = (item) => item > 2;
    const expected = [2];
    const actual = findIndex(arr, callback);

    expect(actual).toEqual(expected);
  });

  it('should return the index of the element in the array', () => {
    const arr = ['dog', 'mouse', 'far'];
    const callback = (item) => item.endsWith('e');
    const expected = [1];
    const actual = findIndex(arr, callback);

    expect(actual).toEqual(expected);
  });
});

describe('reduces an array to a final single value', () => {
  it('loops through an array and adds them, returning a single value', () => {
    const arr = [1, 2, 3, 4, 5];
    const callback = (acc, item) => acc + item;
    const expected = 25;
    const actual = reduceArray(arr, callback, 10);

    expect(actual).toEqual(expected);
  });

  it('loops through an array and adds them, returning a single value', () => {
    const arr = [1, 2, 3, 4, 5];
    const callback = (acc, item) => acc * item;
    const expected = 0;
    const actual = reduceArray(arr, callback, 0);

    expect(actual).toEqual(expected);
  });

  it('loops through an array and adds them, returning a single value', () => {
    const arr = ['a', 'b', 'c'];
    const callback = (acc, item) => acc + item;
    const expected = 'zabc';
    const actual = reduceArray(arr, callback, 'z');

    expect(actual).toEqual(expected);
  });

  it('loops through an array and adds them, returning a single value', () => {
    const arr = ['apple', ' ', 'doesn\'t', ' ', 'fall ', 'far ', 'from ', 'the ', 'tree', '.'];
    const callback = (acc, item) => acc + item;
    const expected = 'The apple doesn\'t fall far from the tree.';
    const actual = reduceArray(arr, callback, 'The ');

    expect(actual).toEqual(expected);
  });

   it('loops through an array and adds them, returning a single value', () => {
    const arr = ['apple', ' ', 'doesn\'t', ' ', 'fall ', 'far ', 'from ', 'the ', 'tree', '.'];
    const callback = (acc, item) => acc + item;
    const expected = 'apple doesn\'t fall far from the tree.';
    const actual = reduceArray(arr, callback, '');

    expect(actual).toEqual(expected);
  });
});
