function sumArr(arr) {
  if (arr.length == 0){
      return null;
  }else if(arr.length == 1){
      return arr[0]
  }else{
      return arr[0] * sumArr(arr.slice(1))
    }
}

function arrMax(numArr) {
    numArr = numArr.slice();

    if (!numArr.length) return null;
    if (numArr.length == 1) {
        return numArr[0];
    } else {
        numArr[0] > numArr[1] ? numArr.splice(1, 1) : numArr.splice(0, 1)
    }
    return arrMax(numArr);
}

function arrMin(numArr){
    numArr = numArr.slice();

    if (!numArr.length) return null;
    if (numArr.length == 1) {
        return numArr[0]
    } else {
        numArr[0] < numArr[1] ? numArr.splice(1, 1) : numArr.splice(0, 1)
    }
    return arrMin(numArr)
}
function reverse(arr) {
    if (!arr.length) return arr;
    return reverse(arr.slice(1)).concat(arr[0]);
}
console.log(sumArr([]))