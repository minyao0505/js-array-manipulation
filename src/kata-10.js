/**
 * @param {number[]} array
 * @return {number[]}
 */
const kata10 = (array = [], start, end) => {
  // Do something here and return an array of numbers
  if (!array || array.length === 0) return [];
  return array.slice(start, end);
};

export default kata10;
