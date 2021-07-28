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
  //we need to loop the array
  for (let i = 0; i < arr.length; i++) {
    //for each item in the array beginning at index 0
    const result = callback(arr[i]);
    console.log(result);
    //as soon result is true i will retun index of the item
    if (result === true) {
      return [i];
    } 
  }
  return -1;
};
