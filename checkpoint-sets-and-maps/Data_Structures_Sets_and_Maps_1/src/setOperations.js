/**
 * return the union of two sets
 */
function union(s1, s2) {
  /**
   * setting parameter values and an expected result
   * to check work as i go
   */
  let s1 = new Set([1, 2, 3, 4, 5, 6]);
  let s2 = new Set([5, 7, 8, 9, 10]);

  /** this isn't necessary, but i also converted
   * each set into an array and logged it out for
   * a cleaner look
   */
  let firstSet = Array.from(s1);
  let secondSet = Array.from(s2);

  console.log(`s1: ${firstSet}`);
  console.log(`s2: ${secondSet}`);

  let setOne = [...s1];

  console.log(`set one: ${setOne}`);
  let setTwo = [...s2];

  console.log(`set two: ${setTwo}`);
  let combinedSets = [...setOne, ...setTwo];

  let unionSet = new Set(combinedSets);

  console.log(`union of s1 and s2: ${unionSet}`);
  return unionSet;
}

/**
 * return the intersection of two sets
 */

function intersect(s1, s2) {
  let s1 = new Set([1, 2, 3, 4, 5, 6]);
  let s2 = new Set([5, 2, 8, 4, 10]);

  let s1Array = [...s1];
  let s2Array = [...s2];
  let expectedIntersection = [2, 5, 4];

  console.log(`set 1: ${s1Array}`);
  console.log(`set 2: ${s2Array}`);
  console.log(`expected intersection of sets: ${expectedIntersection}`);

  let intersection = new Set();

  s1.forEach((s) => {
    if (s2.has(s)) {
      intersection.add(s);
    }
  });
  console.log(`intersection of sets: ${[...intersection]}`);
  return intersection;
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
  let s1 = new Set([1, 2, 3, 4, 5, 6]);
  let s2 = new Set([5, 2, 8, 4, 10]);
  let expectedDifference = [1, 3, 6];

  console.log(`set 1: ${[...s1]}`);
  console.log(`set 2: ${[...s2]}`);
  console.log(`expected difference: ${expectedDifference}`);

  let actualDifference = new Set();
  s1.forEach((s) => {
    if (!s2.has(s)) {
      actualDifference.add(s);
    }
  });
  console.log(`actual difference between sets: ${[...actualDifference]}`);
  return actualDifference;
}

module.exports = { union, intersect, difference };
