/**
 * @param {number[]} array
 * @return {number[]}
 */
const kata11 = (array = [], start, quantity, ...newElems) => {
  // Do something here and return an array of numbers
  array.splice(start, quantity, ...newElems);

  return array;
};

export default kata11;
