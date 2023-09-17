/**
 * @param {object[]} array
 * @return {object[]}
 */
const kata3 = (array, year) => {
  // Do something here and return an array of objects
  if (!array || array.length === 0) return [];
  if (array && year) {
    const newArr = [];
    array.forEach((item) => {
      // forEach return undefined
      item.year = year;
      newArr.push(item);
    });
    return newArr;
  }
};

export default kata3;
