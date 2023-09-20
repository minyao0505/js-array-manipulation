/**
 * @param {number[]} array
 * @return {number[]}
 */
const kata2 = (array, position, newElement) => {
  // Do something here and return an array of numbers
  if (position === "add_first") {
    array.unshift(newElement);
  } else if (position === "remove_first") {
    array.shift();
  } else if (position === "add_last") {
    array.push(newElement);
  } else if (position === "remove_last") {
    array.pop();
  }
  return array;
};

/**
 * @param {number[]} array
 * @return {number[]}
 */
const kata2Super = (array, position, newElement) => {
  // Do something here and return an array of numbers
  if (position === "add_first") {
    array.unshift(newElement);
  } else if (position === "remove_first") {
    array.shift();
  } else if (position === "add_last") {
    array.push(newElement);
  } else if (position === "remove_last") {
    array.pop();
  }
  return array;
};

export { kata2, kata2Super };
