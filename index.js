export const mapArray = (arr, callback) => {

  let desiredResult = [];

  for (let i = 0; i < arr.length; i++) {
    desiredResult = [...desiredResult, callback(arr[i])];
    // console.log('im in the loop', desiredResult);
  }
  return desiredResult;


};   

