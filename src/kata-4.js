/**
 * @param {object[]} array
 * @return {string[]}
 */
const kata4 = (array) => {
  // Do something here and return an array of strings
  if (!array || array.length === 0) return [];
  return array.map((item) => item.name);
};

export default kata4;
