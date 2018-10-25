function iterativeLog(array) {
  array.forEach((element, index, list) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var array = [`Cello`, `Violin`]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}