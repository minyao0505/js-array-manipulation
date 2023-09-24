/**
 * @param {string[]} array
 * @return {string[]}
 */
const kata9 = (array, propToSort) => {
  // Do something here and return an array of strings
  if (!array) return [];
  return array.sort((a, b) => a[propToSort].localeCompare(b[propToSort]));
};

/**
 * @param {string[]} array
 * @return {string[]}
 */
const kata9Super = (array, propToSort) => {
  // Do something here and return an array of strings
  if (!array) return [];
  return array.sort((a, b) => b[propToSort].localeCompare(a[propToSort]));
};

export { kata9, kata9Super };
