
const add = (p1, p2) => {
  return p1 + p2;
}   

const subtruct = (p1, p2) => {
  if (p1 > p2) {
    return p1 - p2;
  } else {
    return p2 - p1;
  }
}

module.exports = { add, subtruct };