function sumTo(a) {
    if (a > 1){
      return  a + sumTo(a -1);
    } else {
        return 1;
    }
}
sumTo(5); //15

function arrMax(numArr) {

    if (numArr.length == 1) {
        return numArr[0];
    } else {
        numArr[0] > numArr[1] ? numArr.splice(1, 1) : numArr.splice(0, 1)
    }
    return arrMax(numArr);
}

function arrMin(numArr){

    if (numArr.length == 1) {
        return numArr[0]
    }else {
        numArr[0] < numArr[1] ? numArr.splice(1, 1) : numArr.splice(0, 1)
    }
    return arrMin(numArr)
}
