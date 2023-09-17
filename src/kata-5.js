/**
 * @param {object[]} users
 * @return {object[][]}
 */
const kata5 = (users, id, newFirstName) => {
  // Do something here and return an array of arrays
  if (!users || users.length === 0) return [];
  if (users && id && newFirstName) {
    const newUsers = users.filter((user) => true); // clone the users arr
    const updatedUser = newUsers.find((user) => user.id === id); // obtain the user with changed properties
    updatedUser.firstname = newFirstName;
    return [newUsers, users];
  }
};

export default kata5;
