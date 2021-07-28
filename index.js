// export const mapArray = (arr, callback) => {
    
//   let desiredResult = [];

//   for (let i = 0; i < arr.length; i++) {
//     let finalResult;
//     if (arr[i]) {
//       finalResult = callback(arr[i]);
//     } else {
//       finalResult = '';
//     }
//     desiredResult = [...desiredResult, finalResult];
//   }
//   return desiredResult;

// };


export const mapArray = (arr, callback) => {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    newArray[i] = callback(item);

  }
  return newArray;
};


export const filterArray = (arr, callback) => {
  let newArray = [];
    
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    const result = callback(item);
    if (result) {
      newArray = [...newArray, item];
    }
  }
  return newArray;
};

export const findIndex = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i]);
    if (result === true) {
      return [i];
    } 
  }
  return -1;
};

export const reduceArray = (arr, callback, initialValue) => {
  let acc = initialValue;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item) {
      const newAcc = callback(acc, item);
      acc = newAcc;
    }
  }
  return acc;
};
