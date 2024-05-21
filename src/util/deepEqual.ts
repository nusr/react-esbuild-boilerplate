export function deepEqual(x: any, y: any) {
  if (x === y) {
    return true;
  }
  if (x && typeof x === 'object' && y && typeof y === 'object') {
    if (Object.keys(x).length !== Object.keys(y).length) {
      return false;
    }
    const keys1 = Object.keys(x);
    const keys2 = Object.keys(y);
    for (let i = 0; i < keys1.length; i++) {
      const key1 = keys1[i];
      const key2 = keys2[i];
      if (key1 !== key2 || !deepEqual(x[key1], y[key2])) {
        return false;
      }
    }
    return true;
  }
  return false;
}