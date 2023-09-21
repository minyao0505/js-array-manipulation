/**
 * @param {string[]} array
 * @return {string}
 */
const kata7 = (array, connector) => {
  // Do something here and return a string
  if (!array || !array.length) {
    return "";
  }

  if (!connector) {
    return array.join("");
  }
  return array.join(connector);
};

export default kata7;
