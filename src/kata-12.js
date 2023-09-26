/**
 * @param {number[]} array
 * @return {number}
 */
const kata12 = (array = []) => {
  // Do something here and return a number
  const initialValue = 0;
  return array.reduce(
    (total, currentValue) => total + currentValue,
    initialValue
  );
};

/**
 * @param {number[]} array
 * @return {number}
 */
const kata12Super = (array) => {
  // Do something here and return a number
  if (!array) return 0;
  const initialValue = 0;
  return array.reduce(
    (total, currentValue) => total + currentValue.price,
    initialValue
  );
};

export { kata12, kata12Super };
