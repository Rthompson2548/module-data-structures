/**
 * return true if two arrays are equal, false otherwise
 */

function isEqual(a1, a2) {
  console.log("a1: ", a1);
  console.log("a2: ", a2);

  if (a1.equals(a2)) {
    return true;
  }
  return false;
}

module.exports = isEqual;
