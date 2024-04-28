export default function cleanSet(set, startString) {
  let result = '';
  set.forEach((elem) => {
    if (startString.length > 0 && elem.startsWith(startString)) {
      if (result.length > 0) {
        result += '-';
      }
      result += elem.slice(startString.length);
    }
  });
  return result;
}
