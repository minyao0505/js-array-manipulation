/**
 * @param {object[]} basket
 * @return {boolean}
 */
const kata6 = (basket, groupLabel) => {
  // Do something here and return a boolean
  if (!basket && !groupLabel) {
    return false;
  }
  if (groupLabel) {
    return basket.every((item) => item.shippingCost > 0);
  }
  return basket.some((item) => item.shippingCost > 0);
};

export default kata6;
