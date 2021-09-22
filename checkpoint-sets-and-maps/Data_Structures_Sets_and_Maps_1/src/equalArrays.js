/**
 * return true if two arrays are equal, false otherwise
 */
function isEqual(a1, a2) {
  let a1Map = new Map();
  let a2Map = new Map();

  a1.forEach((item) => {
    let count = a1Map.get(item);
    count >= 1 ? count++ : (count = 1);
    a1Map.set(item, count);
  });

  a2.forEach((item) => {
    let count = a2Map.get(item);
    count >= 1 ? count++ : (count = 1);
    a2Map.set(item, count);
  });

  if (a1Map.size !== a2Map.size) return false;

  for (let [key, value] of a1Map.entries()) {
    if (a2Map.get(key) !== value) return false;
  }
  return true;
}

module.exports = isEqual;
