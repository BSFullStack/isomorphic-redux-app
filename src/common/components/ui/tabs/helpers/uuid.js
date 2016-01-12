// Get a universally unique identifier
let count = 0;
module.exports = function uuid() {
  return count++;
};
