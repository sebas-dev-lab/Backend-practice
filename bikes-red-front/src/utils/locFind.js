/* Return location by id */

const locFind = (arr) => {
  let location = [];
  arr.forEach((item) => {
    return location.push(item.location);
  });
  return location;
};

module.exports = locFind;
