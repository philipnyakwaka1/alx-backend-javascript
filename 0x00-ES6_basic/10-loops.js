export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const elem of array) {
    arr.push(appendString + elem);
  }

  return arr;
}
