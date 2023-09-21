/**
 * @param {string[]} array
 * @return {string[]}
 */
const kata8 = (array, ...otherArrays) => {
  // Do something here and return an array of strings
  if (!array) {
    return [];
  }
  return array.concat(...otherArrays).sort();
};

export default kata8;
