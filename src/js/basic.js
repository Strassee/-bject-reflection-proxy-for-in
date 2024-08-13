export default function orderByProps(obj, sort) {
  const result = [];
  const sortedA = [];
  for (const prop in obj) {
    if (!sort.includes(prop)) {
      sortedA.push(prop);
    }
  }
  sortedA.sort();
  const keys = sort.concat(sortedA);
  keys.forEach((prop) => {
    result.push({ key: prop, value: obj[prop] });
  });
  return result;
}
