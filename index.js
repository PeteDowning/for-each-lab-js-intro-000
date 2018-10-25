function iterativeLog(array) {
  array.forEach((element, index, list) => {
    console.log(`${index}: ${element}`);
  })
}