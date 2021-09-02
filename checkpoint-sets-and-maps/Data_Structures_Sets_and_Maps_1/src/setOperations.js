/**
 * return the union of two sets
 */
 function union(s1, s2) {
    let union = new Set([...s1, ...s2])
    console.log("union: ", union)
    return union
  }
  
  /**
   * return the intersection of two sets
   */
  function intersect(s1, s2) {
    let intersection = new Set([...s1].filter(x => s2.has(x)))
    console.log("intersection: ", intersection)
    return intersection
  }
  
  /**
   * return the difference of two sets
   */
  function difference(s1, s2) {
    let difference = new Set([...s1].filter(x => !s2.has(x)))
    console.log("difference: ", difference)
    return difference
  }
  
  module.exports = { union, intersect, difference };
  