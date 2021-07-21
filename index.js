export const mapArray = (arr, callback) => {
    
  let desiredResult = [];

  for (let i = 0; i < arr.length; i++) {
    let finalResult;
    if (arr[i]) {
      finalResult = callback(arr[i]);
    } else {
      finalResult = '';
    }
    desiredResult = [...desiredResult, finalResult];
  }
  return desiredResult;

};   

