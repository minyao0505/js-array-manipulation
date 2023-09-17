/**
 * @param {number[]} array
 * @return {boolean}
 */
const kata1 = (array) => {
  // Do something here and return a boolean
  if (!array || array.length === 0) return false;

  if (array.length > 0) {
    const newArr = [...new Set(array)];
    return JSON.stringify(newArr) === JSON.stringify(array) ? false : true;
  }
};

export default kata1;
