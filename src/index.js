
module.exports = function towelSort (matrix = []) {
  let result = [];
  matrix.forEach((element, index, array) => {
    if(index % 2 !== 0) {
      element = element.reverse();
    }
    result.push(...element);
  });
  return result;
}
