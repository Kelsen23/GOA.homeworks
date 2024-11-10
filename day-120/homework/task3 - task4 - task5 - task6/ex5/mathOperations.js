
export default function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  if (a > b) {
    return a - b;
  } else{
    return b - a;
  }
}
