/**
 * write a function that accepts two sets and returns
 * the union of the two sets.
 */
function union(s1, s2) {
  // creates a set that include the values from s1
  const union = new Set(s1);

  // iterates through values of s2 and appends them to 'union' if not already included
  for (const value of s2) {
    union.add(value);
  }

  return union;
  console.log("union of s1 and s2:", union);
}

/**
 * other possible solution for union using spread operator
 */
function union(s1, s2) {
  console.log("s1:", s1, "s2:", s2);

  // creates a set using spread operator with all unique values from both sets
  const union = new Set([...s1, ...s2]);
  return union;
  console.log("union:", union);
}

/**
 * return the intersection of two sets
 * the intersection of two sets are the elements that belong to both sets.
 */
function intersect(s1, s2) {
  // creates set using s1 vals, and uses filter() method to only
  // add the vals also included in s2
  let intersection = new Set([...s1].filter((val) => s2.has(val)));
  console.log("intersection:", intersection);
  return intersection;
}

/**
 * return the difference of two sets
 * the difference between two sets a and b are
 * all the elements that belong to a but not b
 */
function difference(s1, s2) {
  // creates a set that filters through s2 and only adds values
  // that are not included in s2
  let difference = new Set([...s1].filter((val) => !s2.has(val)));
  console.log("difference :", difference);
  return difference;
}

module.exports = { union, intersect, difference };
