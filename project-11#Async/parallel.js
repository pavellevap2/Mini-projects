let tasks = [];

let functionOne = (callback) => {
    setTimeout(() => callback(null, "first func"),
        3000);
};
let functionTwo = (callback) => {
    setTimeout(() => callback(null, "sec func"),
        1000);
};

tasks.push(functionOne, functionTwo);


function parallel(xs, callback) {
  return xs.forEach((x) => x(callback));

}
let result = (err, result) =>{
    if (err) {
      return err
    } else {
        return result
    }
}


parallel(tasks, result)
